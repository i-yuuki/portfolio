import { useRef } from 'react'
import styles from './project-card.module.css'
import { getProjectYear } from '../lib/project';

export default function ProjectCard({ project }) {
  const video = useRef();
  const summary = `${getProjectYear(project)} ${project.summary}`;
  function playVideo(){
    video.current?.play();
  }
  function pauseVideo(){
    video.current?.pause();
  }
  return (
    <div className={styles['pf-project-card']} onMouseEnter={() => playVideo()} onMouseLeave={() => pauseVideo()}>
      <div className={styles['pf-project-card__banner']} style={{backgroundImage: `url(${project.banner})`}}>
        {project.video && <video ref={video} className={styles['pf-project-card__video']} src={project.video} muted loop></video>}
      </div>
      <div className={styles['pf-project-card__caption']}>
        <h2>{project.title}</h2>
        <p>{summary}</p>
        <span className={styles['pf-project-card__buttonlike']}>作品を見る</span>
      </div>
    </div>
  )
}
