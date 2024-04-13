import React from 'react'

const SkillsInfocard = ({heading,skills}) => {
  return (
    <div className="mt-5 border bg-gradient-to-l  from-purple-900 rounded-xl max-w-[40em]">
        <h2 className='text-2xl font-semibold text-center py-2'>{heading}</h2> <hr />
        <div className='py-6 px-4'>
           {skills.map((item,index) => (
            <React.Fragment key={`skill_${index}`}>
                <div className='flex justify-between py-2'>
                    <p className='py-2'>{item.skill}</p>
                    <p>{item.percentage}</p>
                </div>
                <div className='bg-black h-2  rounded-lg'>
                <div
                    className='bg-green-400 h-full ease-in-out duration-500 rounded-lg'
                    style={{ width: `${item.percentage}` }}
                ></div>
            </div>
            </React.Fragment>
           ))}
        </div>
    </div>
  )
}

export default SkillsInfocard