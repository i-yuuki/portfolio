import styles from './project-header.module.css'

function dateDifference(a, b){
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  const msPerDay = 86400000;
  return Math.floor((utc2 - utc1) / msPerDay);
}

export default function ProjectHeader({ project }) {
  // 終了日も期間に含めたいので+1日
  let days = dateDifference(new Date(project.dates.start), new Date(project.dates.end)) + 1;
  let duration;
  if(days >= 30){
    duration = `${Math.floor(days / 30)}か月`;
  }else{
    duration = `${days}日`;
  }
  return (
    <div className={styles['pf-project-header']} style={{backgroundImage: `url(${project.banner})`}}>
      <div className={styles['pf-project-header__content']}>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <hr />
        <dl className={styles['pf-project-header__info']}>
          <div>
            <dt>実装期間:</dt>
            <dd>{duration}</dd>
          </div>
          <div>
            <dt>使用言語:</dt>
            <dd>{project.languages.join(', ')}</dd>
          </div>
        </dl>
        <ul className={styles['pf-project-header__links']}>
          {project.links?.map((link, i) => (<li key={i}>
            <a href={link.href}>{link.text}</a>
          </li>))}
        </ul>
      </div>
    </div>
  );
};
