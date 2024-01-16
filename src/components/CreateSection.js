import React from 'react'

const CreateSection = () => {
  return (
    <div className='flex items-center justify-between' >
      <div className='flex items-center' >
        <img src="/Logo.svg" alt="logo" />
        <div>
            <p className='text-[#3A3740] font-semibold' >Published by</p>
            <img src="/TextLogo.svg" />
        </div>
      </div>
      <div className='flex gap-5 items-center text-[28px] text-[#06286E]  font-semibold' >
        <img src="/create.svg" alt="" />
        <h4>Create Flashcard</h4>
      </div>
    </div>
  )
}

export default CreateSection
