import styles from './EntryList.module.css';

/** A stack of cards for jobs or projects: title, organization and dates, optional description. */
export default function EntryList({ entries }) {
  return (
    <div className={styles.list}>
      {entries.map(({ title, org, dates, description }) => (
        <article key={`${title}-${dates}`} className="card">
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.meta}>
            <span>{org}</span>
            <span>{dates}</span>
          </p>
          {description && <p>{description}</p>}
        </article>
      ))}
    </div>
  );
}
