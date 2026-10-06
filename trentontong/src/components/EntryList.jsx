import tdLogo from '../assets/images/logos/td.webp';
import telusLogo from '../assets/images/logos/telus-health.webp';
import styles from './EntryList.module.css';

// Keys used by `logo` in content.js.
const logos = { td: tdLogo, telus: telusLogo };

function Points({ points }) {
  return (
    <ul className={styles.points}>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

/**
 * A stack of cards for jobs or projects: optional logo, title, organization and dates, then an
 * optional description, bullet points, and sub-sections (e.g. teams within one role).
 */
export default function EntryList({ entries, twoColumn = false }) {
  return (
    <div className={`${styles.list} ${twoColumn ? styles.twoColumn : ''}`}>
      {entries.map(({ title, org, dates, logo, description, points, sections }) => (
        <article key={`${title}-${dates}`} className={`card ${logo ? styles.withLogo : ''}`}>
          {/* Decorative: the organization's name is written out beside it. */}
          {logo && <img className={styles.logo} src={logos[logo]} alt="" />}
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.meta}>
              <span>{org}</span>
              <span>{dates}</span>
            </p>
            {description && <p>{description}</p>}
            {points && <Points points={points} />}
            {sections && (
              <div className={styles.sections}>
                {sections.map((section) => (
                  <div key={section.heading} className={styles.section}>
                    <h4 className={styles.sectionHeading}>
                      <span>{section.heading}</span>
                      <span className={styles.sectionDates}>{section.dates}</span>
                    </h4>
                    {section.points && <Points points={section.points} />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
