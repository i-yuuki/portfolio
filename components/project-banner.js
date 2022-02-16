import styles from './project-banner.module.css'

export default function ProjectBanner({ project, children }) {
  return (
    <div className={styles['pf-project-banner']} style={{backgroundImage: `url(${project.banner})`}}>
      <div className={styles['pf-project-banner__content']}>
        {children}
      </div>
    </div>
  );
};
