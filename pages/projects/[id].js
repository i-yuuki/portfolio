import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout'
import ProjectBanner from '../../components/project-banner';
import { getProjectDuration, getProjectYear } from '../../lib/project';
import { getProjectData, getProjectIds } from '../../lib/projects'

export default function Test({ project }){
  return (
    <>
      <Head>
        <title>{project.title} | {siteTitle}</title>
      </Head>
      <Layout>
        <ProjectBanner project={project}>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <hr />
          <dl className='pf-project-banner__info'>
            <div>
              <dt>実装期間:</dt>
              <dd>{getProjectYear(project)} ({getProjectDuration(project)})</dd>
            </div>
            <div>
              <dt>使用言語:</dt>
              <dd>{project.languages.join(', ')}</dd>
            </div>
          </dl>
          <ul className='pf-project-banner__links'>
            {project.links?.map((link, i) => (<li key={i}>
              <a href={link.href}>{link.text}</a>
            </li>))}
          </ul>
        </ProjectBanner>
        <div className='container prose' dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
        <ProjectBanner project={project}>
          <ul className='pf-project-banner__links'>
            {project.links?.map((link, i) => (<li key={i}>
              <a href={link.href}>{link.text}</a>
            </li>))}
          </ul>
        </ProjectBanner>
      </Layout>
      <style jsx>{`
        .pf-project-banner__info {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin: 0px;
        }

        .pf-project-banner__info dt,
        .pf-project-banner__info dd {
          display: inline-block;
        }

        .pf-project-banner__info dt {
          font-weight: bold;
        }

        .pf-project-banner__info dd {
          margin-left: 0.5rem;
        }

        .pf-project-banner__links {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          padding: 0px;
          list-style: none;
        }

        .pf-project-banner__links a {
          color: inherit;
          padding: 0.5rem 1em;
          font-size: 0.75em;
          font-weight: bold;
          background-color: rgba(var(--pf-background-rgb), 0.5);
          border: solid 1px;
          transition: background-color 0.1s ease;
        }

        .pf-project-banner__links a:hover {
          background-color: var(--pf-background);
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths(){
  const ids = getProjectIds().map(id => ({
    params: {
      id,
    },
  }));
  return {
    paths: ids,
    fallback: false
  }
}

export async function getStaticProps({ params }){
  return {
    props: {
      project: await getProjectData(params.id),
    },
  }
}
