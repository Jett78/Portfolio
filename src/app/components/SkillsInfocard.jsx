import React from 'react'

const SkillsInfocard = ({heading,skills}) => {
  return (
    <div className="mt-5 border-2 rounded-xl max-w-[40em]">
        <h2 className='text-2xl font-semibold text-center py-2'>{heading}</h2> <hr />
        <div className='py-6 px-4'>
           {skills.map((item,index) => (
            <React.Fragment key={`skill_${index}`}>
                <div className='flex justify-between py-2'>
                    <p className='py-2'>{item.skill}</p>
                    <p>{item.percentage}</p>
                </div>
                <div className='bg-gray-800 h-2  rounded-lg'>
                <div
                    className='bg-purple-500 h-full ease-in-out duration-500 rounded-lg'
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