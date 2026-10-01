import styles from "./OdooOutcomes.module.css";

export default function OdooOutcomes() {
  return (
    <section
      className={styles.section}
      id="outcomes"
      aria-labelledby="odoo-outcomes-title"
    >
      <div className={styles.wrapper}>
        {/* Ambient background graphics */}
        <div className={styles.bgGlowLeft} aria-hidden="true" />
        <div className={styles.bgGlowRight} aria-hidden="true" />
        <div className={styles.bgDotsLeft} aria-hidden="true" />
        <div className={styles.bgDotsRight} aria-hidden="true" />

        {/* Section Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>BUSINESS OUTCOMES</span>
          <h2 id="odoo-outcomes-title" className={styles.title}>
            What a connected ERP changes
          </h2>
          <p className={styles.subtitle}>
            The goal of an Odoo project is not a new system; it is a business that runs with fewer gaps
            <br />
            between teams and data.
          </p>
        </header>

        {/* Main Cards Container */}
        <div className={styles.cardsContainer}>
          {/* Top Row: 3 Cards */}
          <div className={styles.rowTop}>
            {/* Card 1: Unified operations */}
            <article className={`${styles.card} ${styles.topCard}`}>
              <div className={styles.cardHead}>
                <div className={`${styles.iconBox} ${styles.iconBlue}`}>
                  {/* Org Hierarchy Tree Icon */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="9" y="3" width="6" height="5" rx="1.5" />
                    <rect x="3" y="16" width="6" height="5" rx="1.5" />
                    <rect x="15" y="16" width="6" height="5" rx="1.5" />
                    <path d="M12 8v4M6 16v-4h12v4" />
                  </svg>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>Unified operations</h3>
                  <p className={styles.cardDesc}>
                    Finance, sales, inventory, projects and people work from one platform instead of disconnected tools and spreadsheets.
                  </p>
                </div>
                <div className={`${styles.artBox} ${styles.artOrbit}`} aria-hidden="true">
                  <div className={styles.orbitGlow} />
                  <div className={styles.orbitRing} />
                  <div className={styles.orbitCenter}>
                    <span className={styles.odooText}>odoo</span>
                  </div>
                  {/* Floating orbit badges */}
                  <div className={`${styles.orbitBadge} ${styles.badgeGreen}`}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 4h2l2.2 10.5a1.5 1.5 0 001.5 1.2h8.6a1.5 1.5 0 001.5-1.2L20 7H6.5" />
                      <circle cx="9" cy="19" r="1.5" fill="currentColor" />
                      <circle cx="17" cy="19" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className={`${styles.orbitBadge} ${styles.badgePurple}`}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M18 20V10M12 20V4M6 20v-6" />
                    </svg>
                  </div>
                  <div className={`${styles.orbitBadge} ${styles.badgeAmber}`}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />
                    </svg>
                  </div>
                  <div className={`${styles.orbitBadge} ${styles.badgeBlue}`}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: A faster financial close */}
            <article className={`${styles.card} ${styles.topCard}`}>
              <div className={styles.cardHead}>
                <div className={`${styles.iconBox} ${styles.iconPurple}`}>
                  {/* Clock Icon */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.2 2" />
                  </svg>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>A faster financial close</h3>
                  <p className={styles.cardDesc}>
                    Accounting connected to sales, purchasing and inventory means less manual reconciliation at period end.
                  </p>
                </div>
                <div className={`${styles.artBox} ${styles.artFinance}`} aria-hidden="true">
                  <div className={styles.financeGlow} />
                  <div className={styles.financeSheet}>
                    <div className={styles.financeBars}>
                      <div className={`${styles.fBar} ${styles.fBar1}`} />
                      <div className={`${styles.fBar} ${styles.fBar2}`} />
                      <div className={`${styles.fBar} ${styles.fBar3}`} />
                    </div>
                    <div className={styles.sheetLines}>
                      <div className={`${styles.sLine} ${styles.sLine1}`} />
                      <div className={`${styles.sLine} ${styles.sLine2}`} />
                    </div>
                  </div>
                  <div className={styles.financeCheckBadge}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3: Better visibility */}
            <article className={`${styles.card} ${styles.topCard}`}>
              <div className={styles.cardHead}>
                <div className={`${styles.iconBox} ${styles.iconBlue}`}>
                  {/* Analytics Bars + Trend Line Icon */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                    <path d="M4 14l5-5 4 4 7-7" />
                  </svg>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>Better visibility</h3>
                  <p className={styles.cardDesc}>
                    Dashboards and reports draw on live operational data, so decisions always rest on current numbers.
                  </p>
                </div>
                <div className={`${styles.artBox} ${styles.artDashboard}`} aria-hidden="true">
                  <div className={styles.dashGlow} />
                  <div className={styles.dashWindow}>
                    <div className={styles.dashHeader}>
                      <div className={styles.dashDot} />
                      <div className={styles.dashDot} />
                      <div className={styles.dashDot} />
                    </div>
                    <div className={styles.dashBody}>
                      <div className={styles.dashChartsRow}>
                        <svg className={styles.dashLineChart} viewBox="0 0 52 26" fill="none">
                          <path
                            d="M2 22 L14 11 L25 17 L36 5 L50 13"
                            stroke="#6366f1"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className={styles.dashDonut} />
                      </div>
                      <div className={styles.dashSkeleton}>
                        <div className={`${styles.dLine} ${styles.dLine1}`} />
                        <div className={`${styles.dLine} ${styles.dLine2}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Middle Row: 2 Cards */}
          <div className={styles.rowMid}>
            {/* Card 4: Less manual work */}
            <article className={`${styles.card} ${styles.midCard}`}>
              <div className={styles.midLeft}>
                <div className={`${styles.iconBox} ${styles.iconPink}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      strokeWidth="1.8"
                    />
                    <path d="M8 12L11 15L16 9" strokeWidth="2.2" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Less manual work</h3>
                  <p className={styles.cardDesc}>
                    Repeated entry, approvals and follow-up move into defined workflows your teams no longer have to chase by hand.
                  </p>
                </div>
              </div>
              <div className={`${styles.artBox} ${styles.artWorkflow}`} aria-hidden="true">
                <div className={styles.wfGlow} />
                <div className={styles.wfCardShadow} />
                {/* SVG Connecting line with dotted styling */}
                <svg className={styles.wfSvgPath} viewBox="0 0 175 95" fill="none">
                  <path
                    d="M36 22 L36 48 Q36 58 46 58 L98 58 Q98 58 98 48"
                    stroke="#cbd7f6"
                    strokeWidth="2"
                    strokeDasharray="3.5 3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M98 48 L98 62 Q98 72 108 72 L142 72"
                    stroke="#cbd7f6"
                    strokeWidth="2"
                    strokeDasharray="3.5 3.5"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Step 1: Doc */}
                <div className={`${styles.wfNode} ${styles.wfNode1}`}>
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                {/* Step 2: Gear */}
                <div className={`${styles.wfNode} ${styles.wfNode2}`}>
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                {/* Step 3: Check */}
                <div className={`${styles.wfNode} ${styles.wfNode3}`}>
                  <svg viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </article>

            {/* Card 5: Room to scale */}
            <article className={`${styles.card} ${styles.midCard}`}>
              <div className={styles.midLeft}>
                <div className={`${styles.iconBox} ${styles.iconGreen}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 22s5.5-1.5 8.5-6.5C13 11 14 6 14 6s-5 1-9.5 4.5C2 13.5 2 22 2 22z" />
                    <path d="M14 6s2.5 1.5 4.5 4.5c2 3 2.5 7.5 2.5 7.5s-4-.5-6.5-2.5C12 13 11.5 10 14 6z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Room to scale</h3>
                  <p className={styles.cardDesc}>
                    Start with the applications you need today, then add modules and users as your operations grow.
                  </p>
                </div>
              </div>
              <div className={`${styles.artBox} ${styles.artScale}`} aria-hidden="true">
                <div className={styles.scaleGlow} />
                <div className={styles.scaleBars}>
                  <div className={`${styles.sBar} ${styles.sBar1}`} />
                  <div className={`${styles.sBar} ${styles.sBar2}`} />
                  <div className={`${styles.sBar} ${styles.sBar3}`} />
                  <div className={`${styles.sBar} ${styles.sBar4}`} />
                </div>
                {/* Swooping curved growth arrow */}
                <svg className={styles.scaleArrowSvg} viewBox="0 0 140 72" fill="none">
                  <path
                    d="M4 62 C 38 58, 80 44, 130 10"
                    stroke="#3b82f6"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M116 9 L130 10 L126 24"
                    stroke="#3b82f6"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
          </div>

          {/* Bottom Row: 3-column Summary Strip */}
          <div className={styles.summaryStrip}>
            <div className={styles.stripItem}>
              <div className={styles.stripIcon}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />
                </svg>
              </div>
              <div className={styles.stripText}>
                <b>Finance + Sales + Inventory + HR</b>
                <small>One connected platform</small>
              </div>
            </div>

            <div className={styles.stripItem}>
              <div className={styles.stripIcon}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                  <path d="M3 20h18" />
                </svg>
              </div>
              <div className={styles.stripText}>
                <b>Live operational data</b>
                <small>Real-time dashboards</small>
              </div>
            </div>

            <div className={styles.stripItem}>
              <div className={styles.stripIcon}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className={styles.stripText}>
                <b>Scalable workflows</b>
                <small>Grow with your business</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
