import React, { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Data = [
  {
    "Trade Date": "2007-04-10",
    "Settlement Date": "2007-04-10",
    "Broker Reference": "B576262801",
    "Transaction Description":
      "iShares V plc Dow Jones Emerging Markets Select Div GBP 337 @  1476.025",
    "Transaction type": "",
    "Quantity": "",
    "Transaction quantity": "",
    "Security ticker": "",
    "Security name": "",
    "Security CCY": "",
    "ISIN": "",
    "Fx rate": "",
    "Local ccy": "",
    "Unit cost local ccyLocal ccy": "",
    "Unit cost local ccy": "",
    "Brokerage local ccy": "",
    "Transaction tax local ccy": "",
    "Fx transaction cost local ccy": "",
    "Total consideration local ccy": "",
    "Foreign ccy": "",
    "Unit cost foreign ccy": "",
    "Brokerage foreign ccy": "",
    "Transaction tax foreign ccy": "",
    "Fx transaction cost foreign ccy": "",
    "Total consideration foreign ccy": "",
  },
  {
    "Trade Date": "2007-04-10",
    "Settlement Date": "2007-04-10",
    "Broker Reference": "B576262801",
    "Transaction Description":
      "iShares V plc Dow Jones Emerging Markets Select Div GBP 337 @  1476.025",
    "Transaction type": "",
    "Quantity": "",
    "Transaction quantity": "",
    "Security ticker": "",
    "Security name": "",
    "Security CCY": "",
    "ISIN": "",
    "Fx rate": "",
    "Local ccy": "",
    "Unit cost local ccyLocal ccy": "",
    "Unit cost local ccy": "",
    "Brokerage local ccy": "",
    "Transaction tax local ccy": "",
    "Fx transaction cost local ccy": "",
    "Total consideration local ccy": "",
    "Foreign ccy": "",
    "Unit cost foreign ccy": "",
    "Brokerage foreign ccy": "",
    "Transaction tax foreign ccy": "",
    "Fx transaction cost foreign ccy": "",
    "Total consideration foreign ccy": "",
  },
  {
    "Trade Date": "2007-04-10",
    "Settlement Date": "2007-04-10",
    "Broker Reference": "B576262801",
    "Transaction Description":
      "iShares V plc Dow Jones Emerging Markets Select Div GBP 337 @  1476.025",
    "Transaction type": "",
    "Quantity": "",
    "Transaction quantity": "",
    "Security ticker": "",
    "Security name": "",
    "Security CCY": "",
    "ISIN": "",
    "Fx rate": "",
    "Local ccy": "",
    "Unit cost local ccyLocal ccy": "",
    "Unit cost local ccy": "",
    "Brokerage local ccy": "",
    "Transaction tax local ccy": "",
    "Fx transaction cost local ccy": "",
    "Total consideration local ccy": "",
    "Foreign ccy": "",
    "Unit cost foreign ccy": "",
    "Brokerage foreign ccy": "",
    "Transaction tax foreign ccy": "",
    "Fx transaction cost foreign ccy": "",
    "Total consideration foreign ccy": "",
  },
];

function MyData() {
  const [selectedTransactionType1, setSelectedTransactionType1] = useState(
    "Transfer from income account"
  );
  const [selectedTransactionType2, setSelectedTransactionType2] =
    useState("All");

  const handleTransactionTypeChange1 = (event) => {
    setSelectedTransactionType1(event.target.value);
  };

  const handleTransactionTypeChange2 = (event) => {
    setSelectedTransactionType2(event.target.value);
  };
  const [selectedTransactionType3, setSelectedTransactionType3] = useState('Select Transaction Type');
  const [selectedTransactionType4, setSelectedTransactionType4] = useState('All');

  const handleTransactionTypeChange3 = (event) => {
    setSelectedTransactionType3(event.target.value);
  };

  const handleTransactionTypeChange4 = (event) => {
    setSelectedTransactionType4(event.target.value);
  };

  const gridRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [openHide, setOpenHide] = useState(false);
  const [myData, setMyData] = useState(false);
  const [filter ,setFilter] = useState(false);
  const [selectedTransactionType, setSelectedTransactionType] = useState('VOD.LSE');

  const handleTransactionTypeChange = (event) => {
    setSelectedTransactionType(event.target.value);
  };

  const handlFilter = ()=>{
    setFilter(!filter);
  }

  const handleMyData = () => {
    setMyData(!myData);
  };
  const handleHideOpen = () => {
    setOpenHide(!openHide);
  };

  useEffect(() => {
    setRowData(Data);
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    { headerName: "Trade Date", field: "Trade Date", unSortIcon: true,filter: 'agTextColumnFilter' },
    {
      headerName: "Settlement Date",
      field: "Settlement Date",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Broker Reference",
      field: "Broker Reference",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Transaction Description",
      field: "Transaction Description",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Transaction type",
      field: "Transaction type",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    { headerName: "Quantity", field: "Quantity", unSortIcon: true,filter: 'agTextColumnFilter' },
    {
      headerName: "Transaction quantity",
      field: "Transaction quantity",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Security ticker",
      field: "Security ticker",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    { headerName: "Security name", field: "Security name", unSortIcon: true,filter: 'agTextColumnFilter' },
    { headerName: "Security CCY", field: "Security CCY", unSortIcon: true,filter: 'agTextColumnFilter' },
    { headerName: "ISIN", field: "ISIN", unSortIcon: true,filter: 'agTextColumnFilter' },
    { headerName: "Fx rate", field: "Fx rate", unSortIcon: true,filter: 'agTextColumnFilter' },
    { headerName: "Local ccy", field: "Fx rate", unSortIcon: true ,filter: 'agTextColumnFilter'},
    {
      headerName: "Unit cost local ccy",
      field: "Unit cost local ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Brokerage local ccy",
      field: "Brokerage local ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Transaction tax local ccy",
      field: "Transaction tax local ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Fx transaction cost local ccy",
      field: "Fx transaction cost local ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Total consideration local ccy",
      field: "Total consideration local ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    { headerName: "Foreign ccy", field: "Foreign ccy", unSortIcon: true ,filter: 'agTextColumnFilter'},
    {
      headerName: "Unit cost foreign ccy",
      field: "Unit cost foreign ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Brokerage foreign ccy",
      field: "Brokerage foreign ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Transaction tax foreign ccy",
      field: "Transaction tax foreign ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Fx transaction cost foreign ccy",
      field: "Fx transaction cost foreign ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
    {
      headerName: "Total consideration foreign ccy",
      field: "Total consideration foreign ccy",
      unSortIcon: true,filter: 'agTextColumnFilter'
    },
  ]);

  const autoSizeStrategy = useMemo(() => {
    return {
      type: "fitGridWidth",
    };
  }, []);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 350,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      filter: 'agTextColumnFilter', 
      menuTabs: ['filterMenuTab'],
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
  const heightStyle =
  filter && openHide ? "42vh" :
  filter ? "64vh" :
  openHide ? "55vh" :
  "77vh";

  return (
    <>
      {myData ? (
        <>
          <div className="flex lg:justify-end justify-center items-center gap-4 mb-5 flex-wrap lg:flex-nowrap">
            <select
              className=" bg-[#131720]  placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0 border-2 border-[#3E3F53] text-xs py-[11px] ps-[11px] pe-[74px] leading-[12px] rounded-md"
              onChange={handleTransactionTypeChange1}
              value={selectedTransactionType1}
            >
              <option value="Select Transaction Type">Transfer from income account</option>
              <option value="Closing Balance">Closing Balance</option>
              <option value="Deposite">Deposite</option>
            </select>
            <select
              className=" bg-[#131720]  placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0 border-2 border-[#3E3F53] text-xs py-[11px] ps-[11px] pe-[74px] leading-[12px] rounded-md"
              onChange={handleTransactionTypeChange2}
              value={selectedTransactionType2}
            >
              <option value="All">All</option>
              <option value="Last Week">Last Week</option>
              <option value="Last Month">Last Month</option>
              <option value="Last Year">Last Year</option>
            </select>
            <button className={`border-2  ${filter ? "border-[#0083F2]":"border-[#3E3F53]" } text-white text-xs px-[22px] py-[11px] rounded-md leading-[12px]`} onClick={handlFilter}>
              Filter by security
            </button>
            <button className={`border-2  ${openHide ? "border-[#0083F2]":"border-[#3E3F53]" } text-white text-xs px-[22px] py-[11px] rounded-md leading-[12px]`}  onClick={handleHideOpen}>
              Hide/Show Column
            </button>
         {
          (selectedTransactionType2 !== "All"  &&  selectedTransactionType1 !== "Select Transaction Type") ? (
            <button
              className="border-2 border-[#0083F2] text-white text-xs px-[22px] py-[11px] rounded-md bg-[#0083F2] leading-[12px]"
            >
              Apply changes
            </button>
          ) : (
            null
          )
        }
        </div>
          {
            filter && (
              <>
      <div className="bg-[#161D27] p-[15px] mb-[15px]">
                <h3 className="text-xs text-[#3E3F53] mb-3">
                  Status: Type to load suggestions
                </h3>
                <div className='pb-3'>
                <h3 className='text-xs text-white'>Select security :</h3>
                </div>
                <div className="relative flex gap-5">
                <select
                  className='w-full border border-[#3E3F53] bg-[#131720] p-3 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
                  onChange={handleTransactionTypeChange}
                  value={selectedTransactionType}
                >
                  <option value="VOD.LSE">Select</option>
                  <option value="Accounting Transfer">Accounting Transfer</option>
                  <option value="Closing Balance">Closing Balance</option>
                </select>
                  {/* <input
                    type="search"
                    className="bg-[#131720] rounded-lg w-full py-[11px] outline-none px-14 placeholder:text-sm placeholder:text-[#3E3F53] text-white"
                    placeholder="Filter by security (optional)"
                  />
                  <IoSearch className="absolute text-white top-3 left-4 text-xl" /> */}
                  <button className="py-[13px] px-[15px] bg-[#0083F2] text-white text-sm rounded-lg">
                    Apply
                  </button>
                </div>
              </div>
              </>
            )
          }
          {openHide && (
            <>
              <div className="bg-[#161D27] p-[15px] mb-[15px]">
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
          
            <div className="bg-[#161D27]">
            <div className="flatposition mydata">
              <div
               className="ag-theme-alpine"
               style={{ height:heightStyle, width: "100%" }}
              >
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                  autoSizeColumns={true}
                  autoSizeStrategy={autoSizeStrategy}
                  ref={gridRef}
                  pagination={true}
                  paginationAutoPageSize={true}
                  paginateChildRows={true}
                  defaultColDef={defaultColDef}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        
          <div className="border-b border-[#3E3F53] p-4 bg-[#161D27] rounded-tl-lg rounded-tr-lg">
            <h2 className="text-white text-lg leading-4">
              Filter below to search your date
            </h2>
          </div>
         <div className="bg-[#161D27] p-[15px] rounded-bl-lg rounded-br-lg">
            <div className="mb-5">
            <div className="pb-3">
                  <h3 className="text-xs text-white">Select security</h3>
                </div>
                <select
                  className='w-full border border-[#3E3F53] bg-[#131720] p-3 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0'
                  onChange={handleTransactionTypeChange}
                  value={selectedTransactionType}
                >
                  <option value="VOD.LSE">Select</option>
                  <option value="Accounting Transfer">Accounting Transfer</option>
                  <option value="Closing Balance">Closing Balance</option>
                  <option value="Closing Balance">Buy</option>
                  <option value="Accounting Transfer">Accounting Transfer</option>
                  <option value="Closing Balance">Closing Balance</option>
                  <option value="Closing Balance">Buy</option>
                  <option value="Accounting Transfer">Accounting Transfer</option>
                  <option value="Closing Balance">Closing Balance</option>
                  <option value="Closing Balance">Buy</option>
                  <option value="Accounting Transfer">Accounting Transfer</option>
                  <option value="Closing Balance">Closing Balance</option>
                  <option value="Closing Balance">Buy</option>
                </select>
                </div>
            
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 sm:col-span-6">
                <div className="pb-3">
                  <h3 className="text-xs text-white">Transaction type</h3>
                </div>
                <select
                  className="w-full border border-[#3E3F53] bg-[#131720] p-3 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0"
                  onChange={handleTransactionTypeChange3}
                  value={selectedTransactionType3}
                >
                  <option value="Select Transaction Type
                  ">Select Transaction Type</option>
                  <option value="Accounting Transfer">
                    Accounting Transfer
                  </option>
                  <option value="Closing Balance">Closing Balance</option>
                </select>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <div className="pb-3">
                  <h3 className="text-xs text-white">Select trade date</h3>
                </div>
                <select
                  className="w-full border border-[#3E3F53] bg-[#131720] p-3 rounded-lg text-xs placeholder:text-xs placeholder:text-[#3E3F53] text-white outline-0"
                  onChange={handleTransactionTypeChange4}
                  value={selectedTransactionType4}
                >
                  <option value="Select trade date">Select trade date</option>
                  <option value="Last Week">
                  Last Week
                  </option>
                  <option value="Last Month">Last Month</option>
                  <option value="Last Year">Last Year</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5 mb-[15px]">
            <button
              className="bg-[#0083F2] text-white py-[14px] px-[40px] rounded-md"
              onClick={handleMyData}
            >
              Apply
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default MyData;
