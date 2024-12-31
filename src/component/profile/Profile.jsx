import React, { useState } from 'react'

function Profile() {
    const [selectedTransactionType, setSelectedTransactionType] = useState('Buy');
    const handleTransactionTypeChange = (event) => {
        setSelectedTransactionType(event.target.value);
      };
  return (
    <>
    <div className="p-4">
      <img src="images/bg-profile.png" className="w-full object-cover"  alt="" />
      <div className="flex sm:items-end justify-between flex-col sm:flex-row items-center -mt-10 lg:-mt-24 mb-6">
        <div className='flex sm:items-end items-center flex-col sm:flex-row gap-5 ps-8 '>
        <img src="images/user-pic.png" className='w-[120px] lg:w-full' alt="" />
        <div className='pb-4'><h3 className='text-white text-xl font-semibold'>Mark to Market</h3><span className='text-xs text-white'>marktomarket20@gmail.com</span></div>
        </div>
        <div className='flex text-white text-xs sm:pb-11 items-center gap-1'>Portfolio Currency : <span className='text-[#0083F2] text-xs'> AED </span></div>
      </div>

      <div className='bg-[#161D27] p-[15px] rounded-lg'>
    <h3 className='text-white text-lg mb-3 border-b pb-2 border-[#3E3F53]'>Edit Profile</h3>
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Profit and Loss Calculation Method</h3>
        </div>
        <div className="flex gap-5">
        <select
          className='w-full border border-[#3E3F53] bg-[#131720] p-3 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
          onChange={handleTransactionTypeChange}
          value={selectedTransactionType}
        >
          <option value="Buy">FIFO</option>
          <option value="Accounting Transfer">Accounting Transfer</option>
          <option value="Closing Balance">Closing Balance</option>
        </select>
        <button className='text-white bg-[#0083F2] rounded-lg py-[11px] px-[43px]'>save</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
