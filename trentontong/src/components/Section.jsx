import styles from './Section.module.css';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
