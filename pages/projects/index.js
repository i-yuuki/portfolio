import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import Layout, { siteTitle } from '../../components/layout'
import ProjectCard from '../../components/project-card'
import ProjectFilter from '../../components/project-filter'
import { getProjectsData } from '../../lib/projects'

export default function Test({ projects }){
  const [ sort, setSort ] = useState('recommend');
  const projectsSorted = [...projects];
  switch(sort){
    case "recommend":
      projectsSorted.sort((a, b) => a.recommend < b.recommend ? 1 : -1);
      break;
    case "date-descending":
      projectsSorted.sort((a, b) => a.dates.end < b.dates.end ? 1 : -1);
      break;
    case "date-ascending":
      projectsSorted.sort((a, b) => a.dates.end < b.dates.end ? -1 : 1);
      break;
    default: break;
  }
  return (
    <>
      <Head>
        <title>作ったもの | {siteTitle}</title>
      </Head>
      <Layout>
        <div className='container'>
          <h1>作ったもの</h1>
          <ProjectFilter sort={sort} onSortChange={setSort} />
          <ul className='project-list'>
            {projectsSorted.map(project => (
              <li key={project.id}><Link href={`/projects/${project.id}`}><a>
                <ProjectCard project={project} key={project.id}>a</ProjectCard>
              </a></Link></li>
            ))}
          </ul>
        </div>
      </Layout>
      <style jsx>{`
        .project-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: getProjectsData(),
    },
  }
}
