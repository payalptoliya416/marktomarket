import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const BtnCellRenderer = ({ value }) => {
  return (
    <button className='text-white bg-[#0083F2] rounded-lg p-[10px] leading-[12px]  me-10'>{value}</button>
  );
};

const Data = [
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },
    {
      'Transaction type': 'Buy',
      'Amount': '-AED 4,675,880.64',
      'Menu': 'Show All', 
    },

]

function Transaction() {
    const gridRef = useRef(null);
    const [rowData, setRowData] = useState([])
  
    useEffect(() => {
      setRowData(Data);
    }, []);
  
    const [colDefs] = useState([
      { headerName: 'Transaction type', field: 'Transaction type',filter: 'agTextColumnFilter'},
      { headerName: 'Amount', field: 'Amount', unSortIcon: true,
      cellStyle: { display: 'flex', justifyContent:"center" }, 
      headerClass:"header-third",filter: 'agTextColumnFilter'
      },
      {
        headerName: 'Menu',
        field: 'Menu',
        unSortIcon: true,
        cellRenderer: BtnCellRenderer,
        cellStyle: { display: 'flex', justifyContent:"flex-end" },
        headerClass: 'header-last' ,filter: 'agTextColumnFilter'
      }
    ]);
    
  
    const autoSizeStrategy = useMemo(() => {
      return {
        type: 'fitGridWidth'
      }
    }, []);
    const defaultColDef = useMemo(() => {
      return {
        editable: false,
        filter: 'agTextColumnFilter', 
        menuTabs: ['filterMenuTab'],
      };
    }, []);
    const getRowHeight = () => {
      return 50; 
    };
    
  return (
    <>
       <div className="bg-[#161D27] rounded-lg flex justify-between p-[15px] items-center mb-5">
        <h3 className='text-white text-xs leading-[18px]'>Total Profit & Loss (AED)</h3>
        <h2 className='text-[28px] text-green-500 font-semibold leading-[28px]'>108,452.98</h2>
        </div>

        <div className="flatposition transition-tab">
        <div className="ag-theme-alpine ag-theme-quartz" style={{ height: '75vh', width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          autoSizeColumns={true} 
          autoSizeStrategy={autoSizeStrategy}
          ref={gridRef}
          defaultColDef={defaultColDef}
          getRowHeight={getRowHeight}
        />
      </div>
      </div>
    </>
  )
}

export default Transaction
