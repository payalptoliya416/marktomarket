import React from 'react'
import AddPosition from '../position/AddPosition';
import UploadPosition from '../position/UploadPosition';
import FlatPosition from '../position/FlatPosition';
import LivePosition from '../position/LivePosition';
import MarkToMarket from '../position/MarkToMarket';
import Transaction from '../position/Transaction';
import MyData from '../position/MyData';
import Splits from '../position/Splits';
import Dividends from '../position/Dividends';
import WebLinks from '../position/WebLinks';
import { useDispatch, useSelector } from 'react-redux';
import {setTab } from '../redux/slice/PositionSlice';

function HomePage() {
  const activeTab = useSelector(state => state.position.activeTab); 
  const dispatch = useDispatch();

  const handleTabChange = (tabName) => {
    dispatch(setTab(tabName));
  }
  return (
    <>
      <div className="bg-[#0083F2] pt-2">
            <div className="container mx-auto flex justify-center items-center">
               <ul className='flex xl:gap-4 lg:gap-6 gap-3 flex-wrap lg:flex-nowrap items-center justify-center'>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "AddPosition" ? '  border-b-2 opacity-100' : 'opacity-50'}`}  onClick={() => handleTabChange("AddPosition")}>Add Position</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "uploadPosition" ? ' opacity-100 border-b-2 ' : 'opacity-50'}`}  onClick={() => handleTabChange("uploadPosition")} >Upload Position</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "flatPosition" ? ' opacity-100 border-b-2' : 'opacity-50'}`} onClick={() => handleTabChange("flatPosition")}>Flat Position</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "livePosition" ? ' opacity-100 border-b-2' : 'opacity-50'}`} onClick={() => handleTabChange("livePosition")}>Live Position</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "marktomarketPosition" ? ' opacity-100 border-b-2' : 'opacity-50'}`} onClick={() => handleTabChange("marktomarketPosition")}>Mark to Market</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "transaction" ? ' opacity-100 border-b-2' : 'opacity-50'}`} onClick={() => handleTabChange("transaction")}>Transactions Summary</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "myData" ? ' opacity-100 border-b-2' : 'opacity-50'}`} onClick={() => handleTabChange("myData")}>My Data</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "splits" ? ' opacity-100 border-b-2' : 'opacity-50'}`} onClick={() => handleTabChange("splits")}>Splits</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "dividends" ? ' opacity-100 border-b-2' : 'opacity-50'}`} onClick={() => handleTabChange("dividends")}>Dividends</li>
                <li className={`text-white xl:text-sm lg:text-xs text-sm pb-2 leading-[18px] xl:px-3 cursor-pointer  ${activeTab === "webLinks" ? ' opacity-100 border-b-2' : 'opacity-50'}`} onClick={() => handleTabChange("webLinks")}>Web Links</li>
               </ul>
            </div>
      </div>

<div className="px-[20px] py-[15px] h-full">
          {activeTab  === "AddPosition" ? (
          <AddPosition />
          ) : activeTab  === "uploadPosition" ? (
            <UploadPosition/>
          ) : activeTab  === "flatPosition" ? (
            <FlatPosition/>
          ) : activeTab  === "livePosition" ? (
            <LivePosition/>
          ) : activeTab  === "marktomarketPosition" ? (
            <MarkToMarket/>
          ) : activeTab  === "transaction" ? (
            <Transaction/>
          ) : activeTab  === "myData" ? (
            <MyData/>
          ) : activeTab  === "splits" ? (
            <Splits/>
          ) : activeTab  === "dividends" ? (
            <Dividends/>
          ) : activeTab  === "webLinks" ? (
            <WebLinks/>
            ) : (
          ""
        )}
</div>
    </>
  )
}

export default HomePage
