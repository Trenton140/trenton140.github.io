import styles from './EntryList.module.css';

/**
 * A stack of cards for jobs or projects: title, organization and dates, then an optional
 * description paragraph and/or bullet points.
 */
export default function EntryList({ entries }) {
  return (
    <div className={styles.list}>
      {entries.map(({ title, org, dates, description, points }) => (
        <article key={`${title}-${dates}`} className="card">
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.meta}>
            <span>{org}</span>
            <span>{dates}</span>
          </p>
          {description && <p>{description}</p>}
          {points && (
            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
