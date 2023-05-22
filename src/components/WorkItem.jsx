import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { staggerContainer, fadeIn } from '../utils/motion';

const WorkItem = ({year, title, duration, description, projectName, pictureName, tags, isActive ,onShow}) => {

    let mobileBackground = ""; 


    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, []);

    const isMobile = width < 1536

    if (!isMobile) {
        mobileBackground += " hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
    }


  return (

    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    >
    <motion.div
    variants={fadeIn("right", "spring", 0.25, 1.5)}>
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white '/>
            <motion.p

            className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-blue-700 rounded-md'>
                    {year}
                </span>
                <span className='text-lg font-semibold text-cyan-600'>{title}</span>
                <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
            </motion.p>
            <p className='my-2 text-base font-normal text-stone-600'>{description}</p>
            
            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p
                    key = {`${title}-${tag.name}`} 
                    className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                    </p>
                ))}
            </div>
            
            {pictureName ?
            
            <div onClick={!isMobile ? onShow : null} className={'w-[300px] sm:w-[400px] md:w-[600px] h-auto  relative flex items-center justify-center shadow-xl group grounded-xl' + mobileBackground}>
                <img src={pictureName} alt='Picture of project' className='rounded-xl group-hover:opacity-10'/>
                {!isMobile &&
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{projectName ? projectName : "No Name"}</h3>
                    <p className='font-bold text-white'>Click to view bigger image</p>
                </div>
                }
            </div>
            
            :
            <p className='text-[12px] text-gray-400 pt-3'>No Image available.</p>
            }
        {isActive && !isMobile ?
        <div className='fixed z-50 overflow-auto'>
            <div className='w-[1535px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center bg-black modal'>
                <img src={pictureName} className=''/>   
            </div>
            <AiOutlineClose onClick={onShow} className='closeIcon hover:cursor-pointer pointer-events-auto'/>    

        </div>
        :
        null
        }
        </li>
    </ol>
    </motion.div>
    </motion.section>
)
}

export default WorkItem


