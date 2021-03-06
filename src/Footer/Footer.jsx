//Component that displays at the bottom of every page in the application
//It contains some text and a cookie icon

import React from 'react'

const Footer = () => {
    return(
        <div className='w-screen h-screen-10% bg-dove-gray flex items-center justify-center select-none'>
            <h1 
                className='text-5xl screen-phones:text-sm screen-tablets:text-xl 
                           screen-s:text-2xl screen-m:text-3xl screen-l:text-4xl screen-2xl:text-6xl 
                         text-white opacity-80'>
                    Come to the dark side... we have cookies <i class="fas fa-stroopwafel"/>
            </h1>
        </div>
    )
}

export default Footer;