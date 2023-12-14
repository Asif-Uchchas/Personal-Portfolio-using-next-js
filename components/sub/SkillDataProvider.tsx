"use client" 

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props{
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {
            opacity: 0,    
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.5
            }
        }
    }
    
    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{delay: index*animationDelay}}
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
            style={{ transform: "scale(0.9)" }}
        >
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                <Image src={src} alt="skill image" width={width} height={height} />
            </div>
        </motion.div>
    )
  return (
    <div>
      
    </div>
  )
}

export default SkillDataProvider
