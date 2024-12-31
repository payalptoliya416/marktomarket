import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Data = [
    {
      'Dividend Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Dividend Amount': '0.0424', 
      'Transaction Date': '--', 
      'Transaction': '--', 
      'No. of shares': '--', 
      'NET Position': '2000', 
      'Received Dividend Amount': '3500', 
    },
    {
      'Dividend Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Dividend Amount': '0.0424', 
      'Transaction Date': '--', 
      'Transaction': '--', 
      'No. of shares': '--', 
      'NET Position': '2000', 
      'Received Dividend Amount': '3500', 
    },
    {
      'Dividend Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Dividend Amount': '0.0424', 
      'Transaction Date': '--', 
      'Transaction': '--', 
      'No. of shares': '--', 
      'NET Position': '2000', 
      'Received Dividend Amount': '3500', 
    },
    {
      'Dividend Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Dividend Amount': '0.0424', 
      'Transaction Date': '--', 
      'Transaction': '--', 
      'No. of shares': '--', 
      'NET Position': '2000', 
      'Received Dividend Amount': '3500', 
    },
    {
      'Dividend Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Dividend Amount': '0.0424', 
      'Transaction Date': '--', 
      'Transaction': '--', 
      'No. of shares': '--', 
      'NET Position': '2000', 
      'Received Dividend Amount': '3500', 
    },
    {
      'Dividend Date': '2014-02-24',
      'Stock': 'VOD.LSE',
      'Dividend Amount': '0.0424', 
      'Transaction Date': '--', 
      'Transaction': '--', 
      'No. of shares': '--', 
      'NET Position': '2000', 
      'Received Dividend Amount': '3500', 
    },
  ]

function Dividends() {
  const [selectedTransactionType, setSelectedTransactionType] = useState('VOD.LSE');
  const [selectedSecurity, setSelectedSecurity] = useState('VOD.LSE');
  const [dividend,setDividend] = useState(false);
  
   const handleDividends = ()=>{
    setDividend(!dividend)
   }

  const handleTransactionTypeChange = (event) => {
    setSelectedTransactionType(event.target.value);
  };

  const handleSecurityChange = (event) => {
    setSelectedSecurity(event.target.value);
  };
      const gridRef = useRef(null);
      const [rowData, setRowData] = useState([])
    
      useEffect(() => {
        setRowData(Data);
      }, []);
    
    
      const [colDefs] = useState([
        { headerName: 'Dividend Date', field: 'Dividend Date', unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'Stock', field: 'Stock',unSortIcon: true ,filter: 'agTextColumnFilter',},
        { headerName: 'Dividend Amount', field: 'Dividend Amount',unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'Transaction Date', field: 'Transaction Date',unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'Transaction', field: 'Transaction',unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'No. of shares', field: 'No. of shares',unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'NET Position', field: 'NET Position',unSortIcon: true,filter: 'agTextColumnFilter', },
        { headerName: 'Received Dividend Amount', field: 'Received Dividend Amount',unSortIcon: true,filter: 'agTextColumnFilter', },
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
          dividend ? (
            <>
             <div className="flex justify-between items-center mb-5">
        <h3 className='text-lg leading-4 text-white'>Dividends</h3>
        <select
          className='border border-[#3E3F53] bg-[#131720] p-2 w-60 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
          onChange={handleSecurityChange}
          value={selectedSecurity}
        >
          <option value="VOD.LSE">VOD.LSE</option>
          <option value="ANTO.LSE">ANTO.LSE</option>
          <option value="AV.LSE">AV.LSE</option>
        </select>
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
            <div className='bg-[#161D27] p-4 rounded-bl-lg rounded-br-lg'>
            <h3 className='text-white text-lg mb-3'>Dividends</h3>
              <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-5">
                <div className='pb-3'>
                <h3 className='text-xs text-white'>Select security :</h3>
                </div>
                <select
                  className='w-full border border-[#3E3F53] bg-[#131720] p-3 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
                  onChange={handleTransactionTypeChange}
                  value={selectedTransactionType}
                >
                  <option value="VOD.LSE">Select</option>
                  <option value="Accounting Transfer">Accounting Transfer</option>
                  <option value="Closing Balance">Closing Balance</option>
                </select>
               </div>
              </div>
              </div>
              <div className="text-center mt-5 mb-5">
                    <button className='bg-[#0083F2] text-white py-[14px] px-[40px] rounded-md'onClick={handleDividends}>Get Dividends</button>
                </div>
             </>
          )
        }
       
    </>
  )
}

export default Dividends
