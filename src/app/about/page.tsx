import React from 'react'
import fs from 'fs'
import path from 'path'

type AboutContent = {
  title: string
  content: string
}

const About: React.FC<{ content: AboutContent }> = ({ content }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <p>{content.content}</p>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'content.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileContents)

  return {
    props: {
      content: data.about,
    },
  }
}

export default About