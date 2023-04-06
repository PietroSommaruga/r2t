import React from 'react'

export default function Home() {
  return (
    <div className='h-screen flex flex-col lg:flex-row-reverse snap-start'>
        <div className='h-screen bg-black dark:bg-red-500 lg:w-[50%]'></div>
        <div className='h-screen flex flex-col justify-center items-center lg:w-[50%]'>
            <h4 className='font-semibold mt-1 text-2xl'>Ready2Trade</h4>
            <p className='max-w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium quis ut mollitia nesciunt ratione necessitatibus doloribus odio rerum itaque perspiciatis delectus blanditiis ex in, nemo optio earum magni. Accusantium?</p>
        </div>
    </div>
  )
}
