import React, { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { IoMdClose } from "react-icons/io";

const Data = [
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
  {
    "Transaction type": "GB0001452795",
    "Security in account": "Northern Rock Ordinary 25p",
    "Ticker Name": "",
    ISIN: "",
    Edit: "Edit",
  },
];

function WebLinks() {
  const gridRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [open, setOpen] = useState(false);
  const securityNameRef = useRef(null);
  const securityTickerRef = useRef(null);
  const securityISINRef = useRef(null);

  const handleCopyClick = (ref) => {
    const textToCopy = ref.current.innerText;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((err) => {
        console.error('Unable to copy text to clipboard', err);
      });
  };


  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () =>{
    setOpen(false);
  }
  const BtnCellRenderer = ({ value }) => {
    return (
        <button
          className="text-white bg-[#0083F2] rounded-lg px-[17px] py-[3px] leading-7"
          onClick={handleOpen}
        >
          {value}
        </button>
    );
  };
  
  useEffect(() => {
    setRowData(Data);
  }, []);

  const [colDefs] = useState([
    { headerName: "Ticker in Account", field: "Transaction type",filter: 'agTextColumnFilter',},
    {
      headerName: "Security in account",
      field: "Security in account",
      unSortIcon: true,filter: 'agTextColumnFilter',
    },
    { headerName: "Ticker Name", field: "Ticker Name", unSortIcon: true ,filter: 'agTextColumnFilter',},
    { headerName: "ISIN", field: "ISIN", unSortIcon: true ,filter: 'agTextColumnFilter',},
    {
      headerName: "Edit",
      field: "Edit",
      unSortIcon: true,
      cellRenderer: BtnCellRenderer,
      cellStyle: { display: 'flex', justifyContent:"center" },
      headerClass: 'header-weblink-last' ,filter: 'agTextColumnFilter',
    },
  ]);

  const autoSizeStrategy = useMemo(() => {
    return {
      type: "fitGridWidth",
    };
  }, []);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      filter: 'agTextColumnFilter', 
      menuTabs: ['filterMenuTab'],
    };
  }, []);
  const getRowHeight = () => {
    return 50;
  };

  return (
    <>
      <div className="bg-[#161D27] rounded-lg flex justify-between p-2 items-center mb-5">
        <h3 className="text-white text-xs">Total Profit & Loss (AED)</h3>
        <h2 className="text-[28px] text-green-500 font-semibold">108,452.98</h2>
      </div>

      <div className="flatposition">
        <div
          className="ag-theme-alpine ag-theme-quartz"
          style={{ height: "75vh", width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            autoSizeColumns={true}
            autoSizeStrategy={autoSizeStrategy}
            ref={gridRef}
            defaultColDef={defaultColDef}
            getRowHeight={getRowHeight}
            autoSizeColumnsParams={{ domLayout: "autoHeight" }}
          />
        </div>
      </div>
      {open && (
        <div className="fixed bg-[#131720] bg-opacity-[55%] inset-0 z-50 flex items-center justify-center m-3 sm:m-0">
          <div className="border-2 bg-[#18202A] border-[#3E3F53] py-[10px] px-[20px] rounded-lg text-white  w-[565px] h-[484px]">
            <div className="flex justify-between items-center  border-[#3E3F53] border-b-2 pb-2">
              <h3 className="text-lg">Edit Web Links</h3>
              <IoMdClose className="text-[#0083F2] text-xl font-bold cursor-pointer" onClick={handleClose}/>
            </div>
            <div className="py-[15px] border-[#3E3F53] border-b-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs">
                  Security Name:{" "}
                  <span className="ps-4" ref={securityNameRef}>Northern Rock Ordinary 25p</span>{" "}
                </h3>
                <img src="images/copy.png" alt="copy"    onClick={() => handleCopyClick(securityNameRef)} className="cursor-pointer" />
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs">
                  Security Ticker: <span className="ps-4" ref={securityTickerRef} >GB0001452795</span>{" "}
                </h3>
                <img src="images/copy.png" alt="" onClick={() => handleCopyClick(securityTickerRef)} className="cursor-pointer"   />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xs">
                  Security ISIN: <span className="ps-4" ref={securityISINRef}>GB0001452795</span>{" "}
                </h3>
                <img src="images/copy.png" alt="copy"  onClick={() => handleCopyClick(securityISINRef)} className="cursor-pointer" />
              </div>
            </div>
            <div className="py-[15px]">
              <div className="mb-4">
                <div className="pb-2">
                  <h3 className="text-xs text-white">
                    Security Name Link
                  </h3>
                </div>
                <input
                  type="text"
                  className="bg-[#131720] rounded-lg w-full py-2 outline-none  px-4 placeholder:text-xs placeholder:text-[#3E3F53] text-white"
                  placeholder="Enter security name link"
                />
              </div>
              <div className="mb-4">
                <div className="pb-2">
                  <h3 className="text-xs text-white">
                  Security Ticker Link
                  </h3>
                </div>
                <input
                  type="text"
                  className="bg-[#131720] rounded-lg w-full py-2 outline-none  px-4 placeholder:text-xs placeholder:text-[#3E3F53] text-white"
                  placeholder="Enter security name link"
                />
              </div>
              <div className="mb-4">
                <div className="pb-2">
                  <h3 className="text-xs text-white">
                  Security Isin Link
                  </h3>
                </div>
                <input
                  type="text"
                  className="bg-[#131720] rounded-lg w-full py-2 outline-none  px-4 placeholder:text-xs placeholder:text-[#3E3F53] text-white"
                  placeholder="Enter security name link"
                />
              </div>
              <div className="text-center">
                <button className="bg-[#0083F2] text-white py-[14px] px-[40px] rounded-md leading-4">
                  Add Links
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WebLinks;
