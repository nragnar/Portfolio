import React, {useState, useRef} from 'react'
import WorkItem from './WorkItem'
import { data } from '../constants'
import { motion } from 'framer-motion'
import { textVariant, staggerContainer } from '../utils/motion'

const Projects = () => {




  const [isActive, setIsActive] = useState(false);

  if (isActive) {
    document.body.style.backgroundColor = "rgba(0,0,0,0.9)"
    document.body.style.overflow = "hidden"
    document.body.style.pointerEvents = "none"

  }
  else {
    document.body.style.backgroundColor = "white"
    document.body.style.overflow = "visible"
    document.body.style.pointerEvents = "auto"
  }


  return (

    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    >


    <div id="projects" className='relative w-full h-screen mx-auto top-[300px] md:top-2 mb-[200px]'>

      <div 
      className='max-w-[1040px] m-auto md:pl-20 p-4 py-32'>

          <motion.h1 variants={textVariant()} className='text-4xl font-bold text-center pb-10'>Projects</motion.h1>


          {data.map(((item, idx) => (

            <WorkItem key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            description={item.description} 
            projectName={item.projectName} 
            pictureName={item.pictureName} 
            tags={item.tags}
            isActive={isActive}
            onShow={() => setIsActive(!isActive)}
            />

          )
          
          ))}


      </div>

    </div>

    </motion.section>

  )
}

export default Projects;
