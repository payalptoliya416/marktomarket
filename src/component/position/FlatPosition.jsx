import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const Data = [
    {
      'Security Name': 'Shell plc',
      'Security Ticker': 'SHEL.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'SSE PLC',
      'Security Ticker': 'SHEL.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'Centrica PLC',
      'Security Ticker': 'CNA.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'ETFS Commodity Securities 2X Daily Long WTI Crude Oil',
      'Security Ticker': 'JE00B2NFTJ73',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': '', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'BP PLC',
      'Security Ticker': 'BP.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'National Grid PLC',
      'Security Ticker': 'NG.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'KAZ Minerals plc Ordinary',
      'Security Ticker': 'GB00B0HZPV38',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': '', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'iShares BRIC 50 UCITS ETF USD (Dist) GBP',
      'Security Ticker': 'BRIC.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'iShares UK Dividend UCITS',
      'Security Ticker': 'IUKD.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'Aviva PLC',
      'Security Ticker': 'AV.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'iShares UK Dividend UCITS',
      'Security Ticker': 'IUKD.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'iShares BRIC 50 UCITS ETF USD (Dist) GBP',
      'Security Ticker': 'BRIC.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'iShares UK Dividend UCITS',
      'Security Ticker': 'IUKD.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
    {
      'Security Name': 'Aviva PLC',
      'Security Ticker': 'AV.LSE',
      'Security ISIN': 'GB00BP6MXD84', 
      'Security Currency': 'GBX', 
      'Realized P & L': 'AED 25,200.85', 
    },
  ]

function FlatPosition() {
    const gridRef = useRef(null);
  const [rowData, setRowData] = useState([])

  useEffect(() => {
    setRowData(Data);
  }, []);

  const [colDefs] = useState([
    { headerName: 'Security Name', field: 'Security Name', unSortIcon: true,filter: 'agTextColumnFilter'},
    { headerName: 'Security Ticker', field: 'Security Ticker',unSortIcon: true ,filter: 'agTextColumnFilter', },
    { headerName: 'Security ISIN', field: 'Security ISIN',unSortIcon: true,filter: 'agTextColumnFilter'},
    { headerName: 'Security Currency', field: 'Security Currency',unSortIcon: true,filter: 'agTextColumnFilter', },
    { headerName: 'Realized P & L', field: 'Realized P & L',unSortIcon: true ,},
  ]); 

  const autoSizeStrategy = useMemo(() => {
    return {
      type: 'fitGridWidth',
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
           <div className="bg-[#161D27] rounded-lg flex justify-between p-[15px] items-center mb-5">
        <h3 className='text-white text-xs leading-[18px]'>Total Profit & Loss (AED)</h3>
        <h2 className='text-[28px] text-green-500 font-semibold leading-[28px]'>108,452.98</h2>
        </div>
        <div className="flatposition">
        <div className="ag-theme-alpine ag-theme-quartz" style={{ height: '75vh', width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          autoSizeStrategy={autoSizeStrategy}
          defaultColDef={defaultColDef}
          ref={gridRef}
        />
      </div>
        </div>
    </>
  )
}

export default FlatPosition
