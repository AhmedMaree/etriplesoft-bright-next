<?php
/**
 * CLI-only, read-only export: dumps the current live content of every page (and published posts)
 * as clean JSON, for porting into a new (e.g. Next.js) site. Resolves image IDs to URLs.
 * Read-only — makes no changes to the database.
 *
 * Usage: php export-site-content.php > site-content-export.json
 */
if (PHP_SAPI !== 'cli') exit;
require dirname(__DIR__).'/app/public/wp-load.php';

function ets_export_resolve_images($value) {
    if (is_array($value)) {
        $out = [];
        foreach ($value as $k => $v) $out[$k] = ets_export_resolve_images($v);
        // If this array looks like an item with an imageId, add the resolved URL alongside it.
        if (isset($out['imageId']) && is_numeric($out['imageId']) && (int) $out['imageId'] > 0) {
            $url = wp_get_attachment_url((int) $out['imageId']);
            if ($url) $out['imageUrl'] = $url;
            $alt = get_post_meta((int) $out['imageId'], '_wp_attachment_image_alt', true);
            if ($alt) $out['imageAlt'] = $alt;
        }
        return $out;
    }
    return $value;
}

function ets_export_blocks(array $blocks) {
    $out = [];
    foreach ($blocks as $b) {
        if (empty($b['blockName'])) continue;
        $entry = [
            'type' => $b['blockName'],
            'attrs' => ets_export_resolve_images($b['attrs'] ?? []),
        ];
        if (!empty($b['innerBlocks'])) {
            $inner = ets_export_blocks($b['innerBlocks']);
            if ($inner) $entry['innerBlocks'] = $inner;
        }
        // For core blocks with no attrs (paragraph/heading text lives in innerHTML), include stripped text.
        if (strpos($b['blockName'], 'core/') === 0 && empty($entry['attrs']['content'])) {
            $text = trim(wp_strip_all_tags($b['innerHTML'] ?? ''));
            if ($text !== '') $entry['text'] = $text;
        }
        $out[] = $entry;
    }
    return $out;
}

$export = ['generated' => gmdate('c'), 'site' => home_url('/'), 'pages' => [], 'posts' => []];

$pages = get_posts(['post_type' => 'page', 'post_status' => 'publish', 'numberposts' => -1, 'orderby' => 'ID', 'order' => 'ASC']);
foreach ($pages as $p) {
    $export['pages'][] = [
        'id' => $p->ID,
        'slug' => $p->post_name,
        'title' => get_the_title($p),
        'url' => get_permalink($p),
        'template' => get_page_template_slug($p) ?: null,
        'is_reference_design' => (bool) get_post_meta($p->ID, '_ets_reference_design', true),
        'language' => function_exists('ets_is_arabic') && get_post_meta($p->ID, '_ets_language', true) === 'ar' ? 'ar' : 'en',
        'seo' => [
            'meta_description' => get_post_meta($p->ID, '_ets_meta_description', true) ?: null,
        ],
        'blocks' => ets_export_blocks(parse_blocks($p->post_content)),
    ];
}

$posts = get_posts(['post_type' => 'post', 'post_status' => 'publish', 'numberposts' => -1, 'orderby' => 'date', 'order' => 'DESC']);
foreach ($posts as $p) {
    $thumb = get_post_thumbnail_id($p);
    $export['posts'][] = [
        'id' => $p->ID,
        'slug' => $p->post_name,
        'title' => get_the_title($p),
        'url' => get_permalink($p),
        'date' => get_the_date('c', $p),
        'excerpt' => get_the_excerpt($p),
        'categories' => wp_get_post_categories($p->ID, ['fields' => 'names']),
        'language' => get_post_meta($p->ID, '_ets_language', true) === 'ar' ? 'ar' : 'en',
        'featured_image' => $thumb ? wp_get_attachment_url($thumb) : null,
        'content_html' => apply_filters('the_content', $p->post_content),
    ];
}

// Footer + site-wide settings, since these aren't tied to a single page's blocks.
$export['site_settings'] = [
    'footer_page_id' => (int) get_option('ets_footer_page'),
    'footer_page_id_ar' => (int) get_option('ets_footer_page_ar'),
    'linkedin_url' => get_theme_mod('ets_linkedin_url'),
    'custom_logo_url' => has_custom_logo() ? wp_get_attachment_url(get_theme_mod('custom_logo')) : null,
    'privacy_policy_url' => get_privacy_policy_url(),
];

echo wp_json_encode($export, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
