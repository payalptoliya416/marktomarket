import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { FaCircleCheck } from "react-icons/fa6";

const Data = [
    {
      'Security Name': 'Shell plc',
      'Security Ticker': 'SHEL.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
     'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'SSE PLC',
      'Security Ticker': 'SHEL.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'Centrica PLC',
      'Security Ticker': 'CNA.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'ETFS Commodity Securities 2X Daily Long WTI Crude Oil',
      'Security Ticker': 'JE00B2NFTJ73',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': '', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'BP PLC',
      'Security Ticker': 'BP.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'National Grid PLC',
      'Security Ticker': 'NG.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'KAZ Minerals plc Ordinary',
      'Security Ticker': 'GB00B0HZPV38',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': '', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'iShares BRIC 50 UCITS ETF USD (Dist) GBP',
      'Security Ticker': 'BRIC.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'iShares UK Dividend UCITS',
      'Security Ticker': 'IUKD.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'Aviva PLC',
      'Security Ticker': 'AV.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'iShares UK Dividend UCITS',
      'Security Ticker': 'IUKD.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'iShares BRIC 50 UCITS ETF USD (Dist) GBP',
      'Security Ticker': 'BRIC.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'iShares UK Dividend UCITS',
      'Security Ticker': 'IUKD.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
    {
      'Security Name': 'Aviva PLC',
      'Security Ticker': 'AV.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Holding':  'Holding',
     'M2M Price Last Upated':  'M2M Price Last Upated',
     'M2M Price*':  'M2M Price*',
     'Current Valuation':  'Current Valuation',
     'Realized P & L': 'AED 25,200.85',
    },
  ]

function MarkToMarket() {
    const gridRef = useRef(null);
    const [rowData, setRowData] = useState([])
    const [open ,setOpen] = useState(false);
    const [notification,setNotification] = useState(false);  
  
    const handleOpen = () =>{
        setOpen(!open);
    }
  
    useEffect(() => {
      setRowData(Data);
    }, []);
  
  
    const [colDefs] = useState([
      { headerName: 'Security Name', field: 'Security Name', unSortIcon: true,filter: 'agTextColumnFilter',},
      { headerName: 'Security Ticker', field: 'Security Ticker',unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Security ISIN', field: 'Security ISIN',unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Security Currency', field: 'Security Currency',unSortIcon: true ,filter: 'agTextColumnFilter',},
      { headerName: 'Holding', field: 'Holding',unSortIcon: true,tooltipValueGetter:
         (params) => (params.value ? `Holding: ${params.value}` : null),filter: 'agTextColumnFilter', },
      { headerName: 'M2M Price Last Upated', field: 'M2M Price Last Upated',unSortIcon: true ,filter: 'agTextColumnFilter',},
      {
        headerName: 'M2M Price*',
        field: 'M2M Price*',
        unSortIcon: true,filter: 'agTextColumnFilter',
        tooltipValueGetter:
         (params) => (params.value ? `Holding: ${params.value}` : null),editable: true
      },      
      { headerName: 'Current Valuation', field: 'Current Valuation',unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Realized P & L', field: 'Realized P & L',unSortIcon: true,filter: 'agTextColumnFilter', },
    ]);
    colDefs[0].minWidth = 500;
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
    const [progress, setProgress] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);
    const handleButtonClick = () => {
      if (!buttonClicked) {
        setOpen(false);
        setButtonClicked(true);
        setNotification(!notification);
        setTimeout(() => {
          setNotification(false);
        }, 5000);
  
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            const newProgress = prevProgress + 10;
  
            if (newProgress >= 100) {
              clearInterval(interval);
              setButtonClicked(false);
              setProgress(0); 
            }
  
            return newProgress;
          });
        }, 500);
    };
  }
  const heightStyle = open ? '70ch' : '68vh';
  return (
    <>
      <div className="flex sm:justify-end justify-center items-center gap-4 mb-5">
      <button className={`border-2  ${open ? "border-[#0083F2]":"border-[#3E3F53]" } text-white text-xs px-[22px] py-[11px] rounded-md leading-3`} onClick={handleOpen}>View Exchange Rates</button>
      <button className={`border-2 leading-3 ${buttonClicked ? "border-[#0083F2]":"border-[#3E3F53]" } text-white text-xs px-[22px] py-[11px] rounded-md`} disabled={buttonClicked}  onClick={handleButtonClick}>
      {buttonClicked ? (
          <div className=" bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-2 w-[100px]" >
            <div
              className="bg-blue-600 h-1 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
        ) : (
          'Get Latest Price '
        )}
      </button>
    </div>
    
    <div className="bg-[#161D27] rounded-lg flex justify-between p-[15px] items-center mb-5">
        <h3 className='text-white text-xs leading-[18px]'>Total Profit & Loss (AED)</h3>
        <h2 className='text-[28px] text-green-500 font-semibold leading-[28px]'>108,452.98</h2>
        </div>
        {
        open && (
            <>
         <div className='bg-[#161D27] sm:p-[19px] mb-5 rounded-lg '>
            <div className="rounded-lg grid grid-cols-12 sm:gap-9 gap-1">
                   <div className="col-span-12 sm:col-span-6 justify-between flex items-center relative after:absolute after:top-0 after:-right-5 after:w-[2px] after:h-5 after:content-[''] after:bg-[#3E3F53] after:rounded-lg before:absolute before:content-[''] before:bg-[#3E3F53] before:w-full before:h-[2px] before:bottom-0 before:left-0 p-3 sm:p-0 sm:pb-4">
                      <h3 className='uppercase text-xs leading-5 text-white'>GBPAED</h3>
                      <h3 className='text-white text-md leading-5 font-medium'>4.674500000</h3>
                   </div>
                   <div className="col-span-12 sm:col-span-6 justify-between flex items-center relative before:absolute before:content-[''] before:bg-[#3E3F53] before:w-full before:h-[2px] before:bottom-0 before:left-0 p-3 sm:p-0 sm:pb-4">
                      <h3 className='uppercase text-xs leading-5 text-white'>USDAED</h3>
                      <h3 className='text-white text-md leading-5 font-medium'>3.672300000</h3>
                   </div>
            </div>
            <div className="rounded-lg grid grid-cols-12 sm:gap-9 gap-1 sm:pt-4">
                   <div className="col-span-12 sm:col-span-6 justify-between flex items-center relative after:absolute after:top-0 after:-right-5 after:w-[2px] after:h-5 after:content-[''] after:bg-[#3E3F53] after:rounded-lg p-3 sm:p-0 pb-4 before:absolute before:content-[''] before:bg-[#3E3F53] before:w-full before:h-[2px] before:bottom-0 before:left-0 sm:before:hidden">
                      <h3 className='uppercase text-xs leading-5 text-white'>USDINR</h3>
                      <h3 className='text-white text-md leading-5 font-medium'>8.674000</h3>
                   </div>
                   <div className="col-span-12 sm:col-span-6 justify-between flex items-center p-3 sm:p-0 pb-4 ">
                      <h3 className='uppercase text-xs leading-5 text-white'>INRAED</h3>
                      <h3 className='text-white text-md leading-5 font-medium'>4.3023000</h3>
                   </div>
            </div>
            </div>
            </>
        )
    }
        <div className="flatposition">
        <div className="ag-theme-alpine" style={{ height: heightStyle, width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs} 
          autoSizeStrategy={autoSizeStrategy}
          ref={gridRef}
          tooltipShowDelay={0}
          tooltipHideDelay={2000}
          defaultColDef={defaultColDef}
        />
      </div>
        </div>
        {
        notification && (
          <>
          <div id="toast-danger" class="absolute bottom-5 right-8 flex items-center w-full max-w-xs p-[20px] mb-4 text-white bg-[#131720] rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 border-[#3E3F53] border-2" role="alert">

          <FaCircleCheck className='text-[#0083F2]' />
        <span class="sr-only">Error icon</span>
    <div class="ms-3 text-sm font-normal text-white">Prices Updated Successfully</div>
     </div>
          </>
        )
      }
    </>
  )
}

export default MarkToMarket
