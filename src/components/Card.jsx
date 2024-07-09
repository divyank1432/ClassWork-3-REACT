import React from 'react'

export default function Card({text}) {
  return (
    <div className='w-96 p-5 flex flex-wrap flex-col gap-5'>
      <div className='w-full bg-gray-200 p-6 rounded-md'>{text}</div>
      <div className='w-full flex gap-2'>
            <div className='w-16 h-14'>
                <img src="https://th.bing.com/th/id/OIP.AbOFBzNblm9DyddRwxQK0gHaE7?rs=1&pid=ImgDetMain" className='h-full w-full rounded-full' alt="" />
            </div>
            <div>
              <h1 className='font-bold'>Michel Jackson</h1>
              <p className='font-light size-4'>@michel_J120</p>
            </div>
      </div>
    </div>
  )
}