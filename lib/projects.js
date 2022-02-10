import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const projectsFolder = path.join(process.cwd(), 'projects')

export function getProjectIds(){
  const fileNames = fs.readdirSync(projectsFolder).filter(file => file.endsWith('.md'))
  return fileNames.map(file => file.replace(/\.md$/, ''))
}

export function getProjectsData(){
  const fileNames = fs.readdirSync(projectsFolder).filter(file => file.endsWith('.md'))
  const projectsData = fileNames.map(file => {
    const fullPath = path.join(projectsFolder, file)
    const matterResult = matter(fs.readFileSync(fullPath, 'utf8'))
    return {
      id: file.replace(/\.md$/, ''),
      ...matterResult.data,
    }
  })
  return projectsData
}

export async function getProjectData(id){
  const fullPath = path.join(projectsFolder, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContent);
  const contentHtml = (await remark()
  .use(html, { sanitize: false })
  .process(matterResult.content)).toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
