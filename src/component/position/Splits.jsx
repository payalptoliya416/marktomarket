import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const Data = [
    {
      'Split Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Split Ratio': '6.000000/11.000000', 
      'Transaction Date': '2011-10-21', 
      'Transaction': 'Sell', 
      'No. of shares': '-3500', 
    },
    {
      'Split Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Split Ratio': '6.000000/11.000000', 
      'Transaction Date': '2011-10-21', 
      'Transaction': 'Sell', 
      'No. of shares': '-3500', 
    },
    {
      'Split Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Split Ratio': '6.000000/11.000000', 
      'Transaction Date': '2011-10-21', 
      'Transaction': 'Sell', 
      'No. of shares': '-3500', 
    },
  ]

function Splits() {
    const [selectedTransactionType1, setSelectedTransactionType1] = useState('VOD.LSE');
    const [selectedTransactionType2, setSelectedTransactionType2] = useState('Open This Select menu');
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>{
      setOpen(!open);
    }
    const handleTransactionTypeChange1 = (event) => {
        setSelectedTransactionType1(event.target.value);
      };
    const handleTransactionTypeChange2 = (event) => {
        setSelectedTransactionType2(event.target.value);
      };
      const gridRef = useRef(null);
      const [rowData, setRowData] = useState([])
    
      useEffect(() => {
        setRowData(Data);
      }, []);
    
      const [colDefs] = useState([
        { headerName: 'Split Date', field: 'Split Date', unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'Stock', field: 'Stock',unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'Split Ratio', field: 'Split Ratio',unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'Transaction Date', field: 'Transaction Date',unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'Transaction', field: 'Transaction',unSortIcon: true ,filter: 'agTextColumnFilter',},
        { headerName: 'No. of shares', field: 'No. of shares',unSortIcon: true,filter: 'agTextColumnFilter', },
      ]);
    
      const autoSizeStrategy = useMemo(() => {
        return {
          type: 'fitGridWidth'
        }
      }, []);
      const defaultColDef = useMemo(() => {
        return {
          filter: 'agTextColumnFilter', 
          menuTabs: ['filterMenuTab'],
        };
      }, []);
  return (
    <>
        {
          open ? (
            <>
<div className="flex justify-between items-center flex-wrap lg:flex-nowrap mb-5">
        <h3 className='text-lg leading-4 text-white xl:w-72'>Splits</h3>
        <button className='py-[10px] px-[15px] bg-red-600 bg-opacity-10 rounded-lg text-[#DD2929] text-xs order-3 lg:order-2 mt-4 lg:mt-0'> You may need to update your holidings to account for the splits below</button>
        {/* <button className='py-[10px] px-[15px] bg-red-600 bg-opacity-10 rounded-lg text-[#DD2929] text-xs'> There is no splits data for this security</button> */}
        <div className='order-2 lg:order-3'>
        <select
          className='border border-[#3E3F53] bg-[#131720] p-2 w-60 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
          onChange={handleTransactionTypeChange1}
          value={selectedTransactionType1}
        >
          <option value="VOD.LSE">VOD.LSE</option>
          <option value="AV.LSE">AV.LSE</option>
          <option value="BSC.US">BSC.US</option>
        </select>
        </div>
        </div>
        <div className="flatposition">
        <div className="ag-theme-alpine" style={{ height: '75vh', width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          autoSizeColumns={true} 
          autoSizeStrategy={autoSizeStrategy}
          ref={gridRef}
          defaultColDef={defaultColDef}
        />
      </div>
        </div>
            </>
          ) : (
            <>
    <div className='bg-[#161D27] p-[15px] rounded-bl-lg rounded-br-lg'>
    <h3 className='text-white text-lg mb-3'>Splits</h3>
      <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-5">
        <div className='pb-3'>
   <h3 className='text-xs text-white'>Select security :</h3>
        </div>
        <select
          className='w-full border border-[#3E3F53] bg-[#131720] p-3 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
          onChange={handleTransactionTypeChange2}
          value={selectedTransactionType2}
        >
          <option value="Open This Select menu">Open This Select menu</option>
          <option value="3BRS.MI">3BRS.MI</option>
          <option value="ANTO.LSE">ANTO.LSE</option>
        </select>
       </div>
      </div>
      </div>
      <div className="text-center mt-5 mb-5">
            <button className='bg-[#0083F2] text-white py-[14px] px-[40px] rounded-md' onClick={handleOpen}>Get Splits</button>
        </div>
            </>
          )
        }
        
    </>
  )
}

export default Splits
