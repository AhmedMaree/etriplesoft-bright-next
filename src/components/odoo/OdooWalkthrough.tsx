"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import styles from "./OdooPageHero.module.css";

// Official product overview used on https://www.odoo.com/.
const videoUrl =
  "https://download.odoocdn.com/videos/odoo_com/video_homepage.mp4";

export default function OdooWalkthrough() {
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <figure className={styles.showcase}>
      <div className={styles.videoHeader}>
        <span>See Odoo in action</span>
        <span className={styles.videoLabel}>Official product tour</span>
      </div>
      <div className={styles.videoStage}>
        {started ? (
          <video
            className={styles.video}
            src={videoUrl}
            autoPlay
            controls
            playsInline
            muted
            preload="metadata"
            aria-label="Official Odoo product walkthrough"
            onError={() => setFailed(true)}
          />
        ) : (
          <button
            className={styles.preview}
            onClick={() => setStarted(true)}
            aria-label="Play the official Odoo product walkthrough"
          >
            <Image
              src="/images/odoo/official-video-poster.webp"
              alt=""
              width={1200}
              height={675}
              sizes="(max-width: 979px) 100vw, 650px"
              preload
            />
            <span className={styles.play}>
              <Play aria-hidden="true" fill="currentColor" />
            </span>
            <span className={styles.playLabel}>Watch the product tour</span>
          </button>
        )}
        {failed && (
          <div className={styles.videoError} role="status">
            The video could not load.{" "}
            <a href={videoUrl} target="_blank" rel="noreferrer">
              Open the official video <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
      <figcaption className={styles.caption}>
        <div>
          <strong>One connected platform.</strong>
          <span>Explore how Odoo brings your business together.</span>
        </div>
        <a
          href="https://www.odoo.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Video source: Odoo, opens in a new tab"
        >
          Video by Odoo <ArrowUpRight aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
