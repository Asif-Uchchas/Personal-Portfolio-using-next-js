import React from 'react'
import { HeroContents } from '../sub/HeroContents'

export const Hero = () => {
  return (
      <div className='relative flex flex-col h-full w-full'>
          <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContents/>
    </div>
  )
}
