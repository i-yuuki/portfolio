import styles from './skill-meter.module.css'

export default function SkillMeter({ value }) {
  return (
    <div className={styles['pf-skill-meter']}>{"★".repeat(value)}{"☆".repeat(5 - value)}</div>
  );
};
