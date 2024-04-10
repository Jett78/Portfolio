import React from 'react'

const Card = () => {
  return (
    <main>
        <section className='grid justify-center items-center border rounded-xl w-fit p-3'>
            <div>
                <img src="./avatar.png" alt="card" className='max-h-80' />
            </div>

            <div>
               <h2 className='text-xl font-semibold my-2'>Project One</h2>
               <div className='flex flex-wrap  justify-around'>
                <button className='border p-2 rounded-full hover:bg-red-600 hover:border-none'>View Code</button>
                <button className='border p-2 rounded-full hover:bg-purple-500 hover:border-none transition'>Live Demo</button>
               </div>
            </div>
          </section>
    </main>
  )
}

export default Card