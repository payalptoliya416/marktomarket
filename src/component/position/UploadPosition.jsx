import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

const Data = [
  {
    'Row No': 1,
    'Trade Date': '2007-04-10',
    'Settlement Date': '2007-04-10', 
    'Broker Reference': 'Transfer', 
    'Transaction Description': 'Transfer To Bank Of Scotland BOS A/C : 06703087', 
    'Unit Cost Local Ccy': 450.700000000, 
    'Quantity': 1000.000000000, 
    'Brokerage': 25.75,
  },
  {
    'Row No': 1,
    'Trade Date': '2007-04-10',
    'Settlement Date': '2007-04-10', 
    'Broker Reference': 'Transfer', 
    'Transaction Description': 'Transfer To Bank Of Scotland BOS A/C : 06703087', 
    'Unit Cost Local Ccy': 450.700000000, 
    'Quantity': 1000.000000000, 
    'Brokerage': 25.75,
  },
  {
    'Row No': 1,
    'Trade Date': '2007-04-10',
    'Settlement Date': '2007-04-10', 
    'Broker Reference': 'Transfer', 
    'Transaction Description': 'Transfer To Bank Of Scotland BOS A/C : 06703087', 
    'Unit Cost Local Ccy': 450.700000000, 
    'Quantity': 1000.000000000, 
    'Brokerage': 25.75,
  },
  {
    'Row No': 1,
    'Trade Date': '2007-04-10',
    'Settlement Date': '2007-04-10', 
    'Broker Reference': 'Transfer', 
    'Transaction Description': 'Transfer To Bank Of Scotland BOS A/C : 06703087', 
    'Unit Cost Local Ccy': 450.700000000, 
    'Quantity': 1000.000000000, 
    'Brokerage': 25.75,
  },
  {
    'Row No': 1,
    'Trade Date': '2007-04-10',
    'Settlement Date': '2007-04-10', 
    'Broker Reference': 'Transfer', 
    'Transaction Description': 'Transfer To Bank Of Scotland BOS A/C : 06703087', 
    'Unit Cost Local Ccy': 450.700000000, 
    'Quantity': 1000.000000000, 
    'Brokerage': 25.75,
  },
  {
    'Row No': 1,
    'Trade Date': '2007-04-10',
    'Settlement Date': '2007-04-10', 
    'Broker Reference': 'Transfer', 
    'Transaction Description': 'Transfer To Bank Of Scotland BOS A/C : 06703087', 
    'Unit Cost Local Ccy': 450.700000000, 
    'Quantity': 1000.000000000, 
    'Brokerage': 25.75,
  },

]

function UploadPosition() {
  const [selectedFile, setselectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [open ,setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadedFileDate, setUploadedFileDate] = useState(null)

  const handlePopupOpen = () => {
    setOpen(true);
  };

  const handlePopupClose = () => {
    setOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileNameParts = file.name.split('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase(); 

    if (fileExtension === 'csv') {
      setselectedFile(file);
      setUploadedFileName(file.name);
      setErrorMessage(null);

      const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()} ${currentDate.getMonth() + 1} ${currentDate.getDate()}`;
     
      setUploadedFileDate(formattedDate);
  } else {
    setErrorMessage('Invalid file type. Please upload a .csv file.');
    setselectedFile(null);
    setUploadedFileName(null);
    setUploadedFileDate(null);
  }
  };

  const gridRef = useRef(null);
  const [rowData, setRowData] = useState([])

  useEffect(() => {
    setRowData(Data);
  }, []);


  const [colDefs] = useState([
    { headerName: 'Row No', field: 'Row No',cellClass: 'red-text' },
    { headerName: 'Trade Date', field: 'Trade Date' },
    { headerName: 'Settlement Date', field: 'Settlement Date' },
    { headerName: 'Broker Reference', field: 'Broker Reference' },
    { headerName: 'Transaction Description', field: 'Transaction Description' },
    { headerName: 'Unit Cost Local Ccy', field: 'Unit Cost Local Ccy' },
    { headerName: 'Quantity', field: 'Quantity' },
    { headerName: 'Brokerage', field: 'Brokerage' },
  ]);

  const autoSizeStrategy = useMemo(() => {
    return {
      type: 'fitGridWidth'
    }
  }, []);


  return (
    <>
    <div className="grid grid-cols-12 h-[720px] items-center justify-center">
      <div className="col-span-12 xl:col-span-6 relative sm:before:absolute before:content-[''] before:bg-[#3E3F53] before:h-full before:w-[2px] before:top-0 before:-right-0   flex justify-center items-center order-2 xl:order-1 sm:pe-8 sm:ps-5 mt-14 sm:mb-0">
      <div>
      <h3 className='sm:text-base text-white mb-[15px] text-sm'>Upload file instructions.</h3>
        <h2 className=' text-[#0083F2] font-medium sm:text-base text-sm'>Download our upload template file <Link className='text-white underline'>click here</Link> and enter your positions. </h2>
        <h2 className=' text-[#0083F2] font-medium sm:text-base text-sm mb-9'>Examples are provided in the download template.</h2>
        <ul>
          <li className='flex text-white sm:text-base text-sm items-start gap-3 mb-[10px] '><span className='w-[25px] px-1 sm:px-0 sm:h-[25px] h-[19px] bg-[#0083F2] flex justify-center items-center rounded-full text-xs font-medium'>1</span>Transaction_type is a mandatory field and must be one of the following:</li>
         <ul className='mb-[30px]'>
          <li className='text-white text-xs flex items-start gap-3 sm:ps-3 ps-2'><span><GoDotFill   className='inline-block text-md text-[#0083F2]' /></span> <span> Accounting Transfer, Buy, Closing Balance, Deposit, Dividend – Equity, Dividend – Fund, Dividend - Loyalty Fund, Dividend – Overseas, Fund Rebate, Interest, LOYALTYU, Management Fees, Sell, Transfer from Income Account, Transfer to Capital Account, Other In, Other Out, Unit Rebate
          </span></li>
         </ul>
          <li className='flex text-white sm:text-base text-sm items-start gap-3 mb-[10px] '><span className='w-[25px] sm:h-[25px] h-[20px] bg-[#0083F2] flex justify-center items-center rounded-full text-xs font-medium '>2</span> For all transaction types the following fields are mandatory;</li>
         <ul className='mb-[30px]'>
          <li className='text-white text-xs flex items-start gap-3 sm:ps-3 ps-2'><span><GoDotFill   className='inline-block text-md text-[#0083F2]' /></span> <span> trade_date, total_consideration_local_ccy
          </span></li>
         </ul>
          <li className='flex text-white sm:text-base text-sm items-start gap-3 mb-[10px] '><span className='w-[25px] px-1 sm:px-0 sm:h-[25px] h-[19px] bg-[#0083F2] flex justify-center items-center rounded-full text-xs font-medium'>3</span> If transaction type is any of the following, then security_ticker and unit_cost_local_ccy are mandatory;</li>
         <ul className='mb-[30px]'>
          <li className='text-white text-xs flex items-start gap-3 sm:ps-3 ps-2'><span><GoDotFill   className='inline-block text-md text-[#0083F2]' /></span> <span>Buy, Sell, Dividend (Any), Fund Rebate, LOYALTU, Unit Rebate
          </span></li>
         </ul>
          <li className='flex text-white sm:text-base text-sm items-start gap-3 mb-[10px] '><span className='w-[25px] px-1 sm:px-0 sm:h-[25px] h-[19px] bg-[#0083F2] flex justify-center items-center rounded-full text-xs font-medium'>4</span> If transaction type is buy or sell then the following fields are mandatory;</li>
         <ul className='mb-[30px]'>
          <li className='text-white text-xs flex items-start gap-3 sm:ps-3 ps-2'><span><GoDotFill   className='inline-block text-md text-[#0083F2]' /></span> <span>Transaction_quanitiy
          </span></li>
         </ul>
        </ul>
      </div>
      </div>
      <div className="col-span-12 xl:col-span-6 flex justify-center items-center order-1 xl:order-2 sm:ps-9">
      <div className='flex flex-col items-center justify-center gap-6 pt-10'>
    <div className='w-[367px] sm:w-[600px] h-[320px] bg-[#161D27] rounded-2xl flex justify-center items-center'>
       <div className="w-[300px] sm:w-[560px] h-[269px] sm:h-[280px] border-dashed border-2 rounded-2xl border-[rgba(0,131,242,0.5)] flex justify-end items-center flex-col">
            <div className="bg-[#131720] p-3 rounded-lg mb-8">
              {selectedFile ? (
               <img src="images/csv.png" alt="" />
              ) : (
                <img src="images/upload.png" alt="" />
              )}
            </div>
           <h5 className='text-white text-lg mb-5'>{selectedFile ? `${uploadedFileDate}   ${uploadedFileName}` :"Upload or drop a file here"}</h5> 
           {
            errorMessage ? "" : ""
           }
            {
              selectedFile ? <h3 className='flex items-center gap-2 text-[#0083F2] mb-5'><img src="images/success.png" alt="" />Verification success</h3> :  <span className='text-[#3E3F53] text-sm mb-5'>.csv</span> 
            }
            {errorMessage && (
          <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
            )}
       </div>
    </div>
    <label className='cursor-pointer relative'>

  {
    selectedFile ? (
      <button className='px-[40px] py-[14px] bg-[#0083F2] rounded-md text-white leading-4' onClick={handlePopupOpen}>
        Upload file
      </button>
    ) : (
      <>    
      <input
      type="file"
      className='absolute top-0 left-0 opacity-0 h-full w-full cursor-pointer'
      onChange={handleFileChange}
    />
      <button className='px-[40px] py-[14px] bg-[#3E3F53] rounded-md text-white leading-4 text-base'>
        Upload file for verification
      </button>
      </>
    )
  }
</label>
    </div>
      </div>
    </div>
      {open && (
        <div className="fixed bg-slate-800 inset-0 bg-opacity-70 z-50 flex items-center justify-center p-5 pt-32">
          <div className="border border-[#DD2929] rounded-md w-full h-full bg-[#132332]">
          <div className='bg-red-600 bg-opacity-10 p-[20px] flex justify-between items-center'>
         <img src="images/alert.png" alt="" />
            <h3 className='text-[#DD2929] text-[22px] font-medium'>Error</h3>
          <span className='p-[8px] rounded-lg bg-[#132332] flex justify-center items-center cursor-pointer' onClick={handlePopupClose}><IoClose   className='text-lg text-[#0083f2]'/>  </span>
          </div>
          <div className="uploadposition">
          <div className="ag-theme-alpine" style={{ height: '75vh', width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          autoSizeColumns={true} 
          autoSizeStrategy={autoSizeStrategy}
          ref={gridRef}
        />
      </div>
          </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UploadPosition
