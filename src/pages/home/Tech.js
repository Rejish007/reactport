import React from 'react'
import { DiCss3, DiExtjs, DiGithub, DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiReact } from 'react-icons/di'

const Tech = () => {
  return (
    <div className='space-y-12'>

      <h1 className='text-3xl font-bold text-center'>Technologies I use</h1>

      <div className="dex-icons grid grid-cols-4 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <DiNodejs size={200} className='animate-pulse' />
        <DiHtml5 size={200} />
        <DiCss3 size={200} />
        <DiJavascript size={200} />
        <DiReact size={200} />
        <DiMongodb size={200} />
        <DiGithub size={200} />
        <DiExtjs size={200} className='animate-pulse' />

      </div>



    </div>
  )
}

export default Tech