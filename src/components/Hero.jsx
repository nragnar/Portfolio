import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import { FaPython, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { MdLocationPin } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';




const Hero = () => {

  return (

    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    >
    <section className='flex-col relative w-full h-screen mx-auto '>

      <motion.div variants={fadeIn("left", "spring", 0.25, 1)} className=" px-16 md:px-6 absolute inset-x-1.5 top-[250px] md:top-[200px] max-w-7xl mx-auto flex flex-col items-center md:items-start justify-center gap-20 md:flex-row h-screen">

        <motion.div variants={textVariant()} className='relative flex flex-col items-center mt-5 max-w-[500px] md:items-start '>
          
          <h1 className='text-[50px] font-extrabold text-[rgb(24,26,26)] text-shadow'>Nicolas</h1>
          <p className='text-[18px] text-[rgb(24,26,26)] font-bold mt-4 text-center md:text-left'>Hello, I am a developer interested in developing both front- and backend applications. <br /> I am always eager to learn new technologies.</p>
          
          <div className='flex flex-row mt-5'> 
            <MdLocationPin className='locationIcon'/>
              <p className='text-[18px] text-[#5e6161]'>Turku, Finland</p>
          </div>
            <div className='flex flex-row mt-5'>
            <HiOutlineMail className='emailIcon'/>
            <p className='text-[18px] text-[#5e6161] pl-2'>naikouragnell@gmail.com</p>
          </div>
          <br />
          <h2 className=''>Skills</h2>
            <div className='flex flex-row gap-2 mt-[5px]'>
              <FaPython className='bannerIcon'/>
              <FaReact className='bannerIcon'/>
              <DiJavascript1 className='bannerIcon'/>
              <SiTailwindcss className='bannerIcon'/>
            </div>
          <br/>
          <h2 className="">Find me On</h2>
            <div className='flex flex-row gap-2 mt-[5px]'>
              <AiOutlineGithub onClick={() => window.open('https://github.com/nragnar')} className='bannerIcon2 hover:cursor-pointer'/>
              <AiFillLinkedin onClick={() => window.open('https://www.linkedin.com/in/nicolas-naikou-413215273/')} className='bannerIcon2 hover:cursor-pointer'/>
            </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <div className=' flex flex-col items-center'>
          <div className='relative h-[400px] w-[400px] lg:h-[600px] lg:w-[600px]'>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <pointLight position={[5,2,1]} intensity={5} />
                <ambientLight intensity={1} />
                <directionalLight position={[0,5,0]} />

                <Sphere args={[1.1, 100, 200]} scale={2.5}> 
                    <MeshDistortMaterial color="#009dff" emissive="#8523e7"  attach="material" roughness="0" metalness="0" wireframe={true} distort={0.4} speed={2} />
                </Sphere>
            </Canvas>
          </div>
          <div className='absolute h-[400px] w-[400px]'>
            <img className='w-full h-auto rounded-b-full '  src="../img/cyberboy.png" alt="side-profile-pic" />
          </div>
        </div>

        <div className='hidden md:flex absolute xs:bottom-10 bottom-32 w-full  justify-center items-center pb-[225px]'>
          <a href='#projects'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#232224] flex justify-center items-start p-2'>
              <motion.dev
                animate={{
                  y: [0,24,0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-4 h-4 rounded-full bg-[#232224] mb-1 ">
              </motion.dev>
            </div>
          </a>
        </div>


        

      </motion.div>

    </section>

    </motion.section>



  )
}

export default Hero

/*
<h1 className='lg:text-[80px] sm:text-[80px]'
          data-value = "NAIKOU"
          onMouseEnter={(e) => {
            const interval = setInterval(() => {        
              e.target.innerText = e.target.innerText.split("")
              .map((letter, index) => {
                  if (index < iterations) {
                      return e.target.dataset.value[index];
                  } 
                  return letters[Math.floor(Math.random() * 26)]
              })
              .join("");
                  iterations += 1 / 3;

                  if(iterations >= e.target.dataset.value.length){ 
                    clearInterval(interval)
                    iterations = 0;
                  }   
            }, 35)
          }}   
      >NAIKOU</h1> */


