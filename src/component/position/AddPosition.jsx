import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <>
    <div className='relative'>
    <DatePicker
      selected={selectedDate}
      onChange={(date) => onDateChange(date)}
      className='relativedata border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full' 
    />
    <i className="my-icon absolute top-3 right-4" ></i>
    </div>
    </>
  );
};

const data = [
  { name: 'Downing One VCT PLC', symbol: 'DDV1.I.S.E', country: 'UK', exchange: 'LSE', isin: 'GB00BFRSVQ41', type: 'Common Stock' },
  { name: 'Dupont De Nemours Inc | DD.US | USD', symbol: 'DDV1.I.S.E', country: 'USA', exchange: 'NYSE', isin: 'US26614N1028', type: 'Common Stock' },
  { name: 'Downing One VCT PLC', symbol: 'DDV1.I.S.E', country: 'UK', exchange: 'LSE', isin: 'GB00BFRSVQ41', type: 'Common Stock' },
  { name: 'Downing One VCT PLC', symbol: 'DDV1.I.S.E', country: 'UK', exchange: 'LSE', isin: 'GB00BFRSVQ41', type: 'Common Stock' },
];

function AddPosition() {
  const [showAllColumns, setShowAllColumns] = useState(true);
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [isChecked, setChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.isin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDateChange1 = (date) => {
    setStartDate1(date);
  };

  const handleDateChange2 = (date) => {
    setStartDate2(date);
  };
  const handleCheckboxChange = () => {
    setShowAllColumns(!showAllColumns);
    setChecked(!isChecked);
  };
  const [selectedTransactionType, setSelectedTransactionType] = useState('Buy');

  const handleTransactionTypeChange = (event) => {
    setSelectedTransactionType(event.target.value);
  };
   
  return (
    <>
      <div className='pb-[15px]'>
        <h2 className='text-white text-md leading-[18px] mb-3 font-medium'>Search Ticker</h2>
        <div className='relative'>
        <input type="search" className='bg-[#161D27] rounded-lg w-full py-[11px] outline-none px-14 placeholder:text-sm placeholder:text-[#3E3F53] text-white focus:border focus:border-[#0083F2] focus:border-opacity-50' placeholder='Type to load suggestions - Enter security name, ticker or isin to search'  value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
        <IoSearch  className="absolute text-white top-3 left-4 text-xl "/>
        </div>
      </div>
      {searchQuery !== '' ? (
        <ul>
          {filteredData.map((item, index) => (
            <li key={index} className='py-[10px] px-[15px] bg-[#132332] rounded-lg mb-[10px] transition-all duration-[0] relative hover:after:absolute after:bg-[#0083F2] after:top-0 after:left-0 after:content-[""] after:w-[6px] after:h-full after:rounded-tr-lg after:rounded-br-lg'>
              <h3 className='text-white text-xs leading-[18px] mb-1'>{item.name} | {item.symbol} | {item.isin}</h3>
              <p className='text-xs text-white text-opacity-50 leading-[18px]'>
                Country: {item.country} | Exchange: {item.exchange} | ISIN: {item.isin} | Type: {item.type}
              </p>
            </li>
          ))}
        </ul>
      ) : (
     <>
  {selectedTransactionType  === 'Accounting Transfer' ? (
            <>
              <div className='bg-[#161D27] rounded-lg p-[15px]'>
            <div className="grid grid-cols-12 gap-5 pb-6">
       <div className="sm:col-span-4 col-span-6">
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Transaction type</h3>
        </div>
        <select
          className='w-full border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
          onChange={handleTransactionTypeChange}
          value={selectedTransactionType}
        >
          <option value="Buy">Buy</option>
          <option value="Accounting Transfer">Accounting Transfer</option>
          <option value="Closing Balance">Closing Balance</option>
        </select>
       </div>
       <div className="sm:col-span-4 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Trade Date</h3>
        </div>
        <CustomDatePicker selectedDate={startDate1} onDateChange={handleDateChange1} />
       </div>
       <div className="sm:col-span-4 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Settlement Date</h3>
        </div>
        <CustomDatePicker selectedDate={startDate2} onDateChange={handleDateChange2} />
       </div>
       <div className="sm:col-span-4 col-span-6">
       <div className='pb-3'>
            <h3 className='text-xs text-white'>Broker reference</h3>
            </div>
            <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="sm:col-span-4 col-span-12">
       <div className='pb-3'>
        <h3 className='text-xs text-white'>Transaction description</h3>
        </div>
       <input type="text" placeholder='Type to search security ticker' className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full' />
       </div>
       <div className="sm:col-span-4 col-span-12">
       <div className='pb-3'>
        <h3 className='text-xs text-white'>Total consideration local ccy</h3>
        </div>
       <input type="number" placeholder='Type to search security ticker' className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'  />
       </div>
        </div>
        </div>
            </>
          ) 
          : (
            <>
             <div className='bg-[#161D27] rounded-lg p-[15px]'>
        <div className="flex w-full gap-5 pb-5 items-center flex-wrap xl:flex-nowrap">
          <div className="xl:w-[603px] lg:w-[552px] md:[552px] w-[496px]">
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Transaction type</h3>
        </div>
        <select
          className='w-full border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
          onChange={handleTransactionTypeChange}
          value={selectedTransactionType}
        >
          <option value="Buy">Buy</option>
          <option value="Accounting Transfer">Accounting Transfer</option>
          <option value="Closing Balance">Closing Balance</option>
        </select>
          </div>
          <div className="xxl:w-[150px] xl:w-[189px] sm:w-[184px] w-[167px]">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Trade Date</h3>
        </div>
        <CustomDatePicker selectedDate={startDate1} onDateChange={handleDateChange1} />
          </div>
          <div className="xxl:w-[150px] xl:w-[189px] sm:w-[184px] w-[167px]">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Settlement Date</h3>
        </div>
        <CustomDatePicker selectedDate={startDate2} onDateChange={handleDateChange2} />
          </div>
          <div className="lg:w-[447.39px] sm:w-[260.39px] w-[210.39px]">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Security ticker</h3>
        </div>
       <input type="text" placeholder='Type to search security ticker' className='border border-[#3E3F53] bg-[#132332] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full' readOnly />
       </div>
          <div className="xxl:w-[364px] xl:w-[341px] lg:w-[378px] sm:w-[218px] w-[128px]">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Quantity</h3>
        </div>
       <input type="number" className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'  />
       </div>
        </div>
        <div className="addposition grid grid-cols-12 gap-5">
        <div className="lg:col-span-4 col-span-8">
        <div className='pb-3'>
          <h3 className='text-xs text-white'>Security name</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#132332] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full' readOnly/>
        </div>
        <div className="2xl:col-span-1 lg:col-span-2 sm:col-span-3 col-span-9">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Security currency</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#132332] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full' readOnly/>
        </div>
        <div className="lg:col-span-3 col-span-5">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Broker reference</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
        </div>
        <div className="2xl:col-span-4 lg:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Transaction description</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
        </div>
        </div>
      </div>
      <div className="py-[15px]  flex justify-between items-center ">
        <h2 className='text-lg text-white relative after:absolute after:bg-[#0083F2] after:top-0 after:left-0 after:content-[""] after:w-[6px] after:h-full px-4 after:rounded-tr-lg after:rounded-br-lg'>Local CCY</h2>
        <label className="text-sm relative inline-flex items-center cursor-pointer text-[#3E3F53] gapy-[11px] px-[15px] gap-3">
        Simple Cost
        <input
          type="checkbox"
          value=""
          className="sr-only peer ps-4"
          onChange={handleCheckboxChange}
        />
         <div
        className={`w-12 h-7 bg-[#132332] rounded-full  peer ${
          isChecked ? 'peer-checked' : ''
        }`}
      >
   <img
  className={`rounded-full  w-6 h-6 mt-[2px] ${
    isChecked ? "-translate-x-0" : "translate-x-full"
  }`}
  src={isChecked ? 'images/uncheck.png' : 'images/check.png'}
  alt="Check"
/>
      </div>
      </label>
       </div>
       <div className='bg-[#161D27] rounded-lg py-[15px] ps-[15px] pe-[25px]'>
       <div className="grid grid-cols-12 gap-5 ">
      {
        showAllColumns ? (
<>
<div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Local ccy</h3>
        </div>
        <input type="text"  readOnly className='border border-[#3E3F53] bg-[#132332] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Unit cost</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Total consideration</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
</>
        ) : (
          <>
              <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Local ccy</h3>
        </div>
        <input type="text" readOnly  className='border border-[#3E3F53] bg-[#132332] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Unit cost</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Brokerage</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Transaction tax </h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Fx transaction cost </h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Total consideration</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
          </>
        )
      }
        </div>
       </div>
        <div className="py-[15px] flex justify-between items-center">
        <h2 className='text-lg text-white relative after:absolute after:bg-[#0083F2] after:top-0 after:left-0 after:content-[""] after:w-[6px] after:h-full px-4 after:rounded-tr-lg after:rounded-br-lg'>Foreign CCY</h2>
        </div>
        <div className='bg-[#161D27] rounded-lg py-[15px] ps-[15px] pe-[25px]'>
    <div className="grid grid-cols-12 gap-5">
      {
        showAllColumns ? (
          <>
            <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Foreign ccy</h3>
        </div>
        <input type="text" readOnly  className='border border-[#3E3F53] bg-[#132332] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Unit cost</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Total consideration</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
       <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
        <h3 className='text-xs text-white'>Fx rate</h3>
        </div>
        <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
          </>
        ) : (
          <>
           <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Foreign ccy</h3>
        </div>
        <input type="text" readOnly  className='border border-[#3E3F53] bg-[#132332] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
       </div>
   <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
    <div className='pb-3'>
    <h3 className='text-xs text-white'>Unit cost</h3>
    </div>
    <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
   </div>
   <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
    <div className='pb-3'>
    <h3 className='text-xs text-white'>Brokerage</h3>
    </div>
    <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
   </div>
   <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
    <div className='pb-3'>
<h3 className='text-xs text-white'>Transaction tax </h3>
    </div>
    <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
   </div>
   <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
    <div className='pb-3'>
    <h3 className='text-xs text-white'>Fx transaction cost </h3>
    </div>
    <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
   </div>
   <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
    <div className='pb-3'>
    <h3 className='text-xs text-white'>Total consideration</h3>
    </div>
    <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
   </div>
   <div className="xl:col-span-2 lg:col-span-3 sm:col-span-3 col-span-6">
    <div className='pb-3'>
    <h3 className='text-xs text-white'>Fx rate</h3>
    </div>
    <input type="text"  className='border border-[#3E3F53] bg-[#131720] py-[11px] px-[15px] rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white w-full'/>
   </div>
      </>
        )
      }
      </div>
       </div>
            </>
          )
        }
        <div className="text-center mt-5">
            <button className='bg-[#0083F2] text-white py-[14px] px-[40px] rounded-md'>Add Position</button>
        </div>
     </>
      )}
        
    </>
  )
}

export default AddPosition
