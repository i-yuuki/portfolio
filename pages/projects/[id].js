import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout'
import ProjectHeader from '../../components/project-header';
import { getProjectData, getProjectIds } from '../../lib/projects'

export default function Test({ project }){
  return (
    <>
      <Head>
        <title>{project.title} | {siteTitle}</title>
      </Head>
      <Layout>
        <ProjectHeader project={project}></ProjectHeader>
        <div className='container prose' dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      </Layout>
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
