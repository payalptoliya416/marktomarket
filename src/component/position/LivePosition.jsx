import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const Data = [
  {
    'Security Name': 'FTF Royce US Smaller Companies Fund Class W Accumulation',
    'Security ticker': 'GB00BDD2DQ09.EUFUND',
    'Security ISIN': 'IE00B4KBBD01', 
    'Security currency': 'GBX', 
    'Holdings': '21,322.41', 
    'Timestamp': 'January 16 at 13:42:00 GMT+5:30', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Invesco Markets II plc - Invesco Global Clean Energy UCITS ETF Acc',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'IE00B4KBBD01', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'January 16 at 13:42:00 GMT+5:30', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'iShares V Public Limited Company - iShares Oil & Gas Exploration & Production UCITS ETF',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'IE00B4KBBD01', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'January 16 at 13:42:00 GMT+5:30', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'T. Rowe Price Funds OEIC US Smaller Companies Equity Fund C GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'IE00B4KBBD01', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'January 16 at 13:42:00 GMT+5:30', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'T. Rowe Price Funds OEIC US Smaller Companies Equity Fund C GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
  {
    'Security Name': 'Artemis US Smaller Companies Fund I Acc GBP',
    'Security ticker': 'GB00BMMV5766.EUFUND',
    'Security ISIN': 'GBX', 
    'Security currency': 'GBX', 
    'Holdings': '3,363.19', 
    'Timestamp': 'GBX', 
    'Cost of holdings': 'GBX', 
    'Open': 'GBX', 
    'High': 'GBX', 
    'Low': 'GBX', 
    'Volume': 'GBX', 
    'Previous close': 'GBX', 
    'Last tick': 'GBX', 
    'Change p': 'GBX', 
    'Current valuation': 'GBX', 
    'P & L': 'GBX', 
  },
]

function LivePosition() {
    const gridRef = useRef(null);
    const [rowData, setRowData] = useState([])
    const [open ,setOpen] = useState(false);
    const [openHide,setOpenHide] = useState(false);
    const handleOpen = () =>{
        setOpen(!open);
    setOpenHide(false);
    }
    const handleHideOpen = ()=>{
      setOpenHide(!openHide);
    setOpen(false);
    }
    useEffect(() => {
      setRowData(Data);
    }, []);
  
    const [columnDefs, setColumnDefs] = useState([
      { headerName: 'Security Name', field: 'Security Name', unSortIcon: true,filter: 'agTextColumnFilter',resizable: true },
      { headerName: 'Security ticker', field: 'Security ticker', unSortIcon: true,filter: 'agTextColumnFilter',},
      { headerName: 'Security ISIN', field: 'Security ISIN', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Security currency', field: 'Security currency', unSortIcon: true, filter: 'agTextColumnFilter',},
      { headerName: 'Holdings', field: 'Holdings', unSortIcon: true, filter: 'agTextColumnFilter',},
      { headerName: 'Timestamp', field: 'Timestamp', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Cost of holdings', field: 'Cost of holdings', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Open', field: 'Open', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'High', field: 'High', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Low', field: 'Low', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Volume', field: 'Volume', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Previous close', field: 'Previous close', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Last tick', field: 'Last tick', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Change p', field: 'Change p', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'Current valuation', field: 'Current valuation', unSortIcon: true,filter: 'agTextColumnFilter', },
      { headerName: 'P & L', field: 'P & L', unSortIcon: true,filter: 'agTextColumnFilter', },
    ]);
    columnDefs[0].minWidth = 560;

    const defaultColDef = useMemo(() => {
        return {
          enableValue: true,
          enableRowGroup: true,
          enablePivot: true,
          filter: 'agTextColumnFilter', 
          menuTabs: ['filterMenuTab'],
          "resizable": true,
        };
      }, []);
     
      const handleColumnToggle = (columnName) => {
        const newColumnDefs = columnDefs.map((column) => {
          if (column.field === columnName) {
            return { ...column, hide: !column.hide };
          }
          return column;
        });
        setColumnDefs(newColumnDefs);
      };
      const heightStyle = open ?'55vh' : openHide ? '53vh' : '70vh';

  return (
    <>
    <div className="flex sm:justify-end justify-center items-center gap-4 mb-5">
      <button className={`border-2 ${open ? "border-[#0083F2]" : "border-[#3E3F53]"} text-white text-xs px-[22px] py-[11px] leading-3 rounded-md`} onClick={handleOpen}>View Exchange Rates</button>
      <button className={`border-2 ${openHide ? "border-[#0083F2]" : "border-[#3E3F53]"} text-white text-xs px-[22px] py-[11px] leading-3 rounded-md`} onClick={handleHideOpen}>Hide / Show Column</button>
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
     {openHide && (
      <>
              <div className="bg-[#161D27] p-[15px] mb-5">
                 <div className="flex flex-wrap items-center gap-4 mt-2">
      {columnDefs.map((column) => (
        <div key={column.field} className="flex items-center bg-[#131720] w-fit py-[9px] px-[12px] rounded-full gap-1">
          <div className={`rounded-full overflow-hidden ${column.hide ? "border border-[#3E3F53]": ""}`}>
            <input
              type="checkbox"
              checked={!column.hide}
              onChange={() => handleColumnToggle(column.field)}
              className="hidden"
              id={`checkbox-${column.field}`}
            />
            <label
              htmlFor={`checkbox-${column.field}`}
              className="rounded-full cursor-pointer w-[22px] h-[22px] flex items-center justify-center bg-transparent"
            >
              {column.hide ? (
                <img src="images/right.png" alt="right" className="hidden w-[22px] h-[22px]"/>
              ) : (
                <img src="images/right.png" alt="right"/>
              )}
            </label>
          </div>
          <label className="text-white text-xs ml-1">{column.headerName}</label>
        </div>
      ))}
    </div>
              </div>
        </>
      )}

      <div id="myGrid" className="ag-theme-alpine ag-theme-quartz" style={{ height: heightStyle, width: '100%' }}>
      <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          ref={gridRef}
          defaultColDef={defaultColDef}
        />
      </div>
    </>
  )
}

export default LivePosition
