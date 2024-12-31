import React, { useEffect, useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
import { useSelector } from 'react-redux';

function Navbar({handleProfile,handleProfileFalse}) {
  const [open,setOpen]= useState(false);
  const [notification,setNotification] = useState(false);  
  const activeTab = useSelector(state => state.position.activeTab); 

  const handleDataDelete = ()=>{
    setNotification(!notification);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  }

  const handleOpen = ()=>{
    setOpen(!open);
  }

  const [hasDelete,setHasDelete] = useState(false);
  const handleDeleteOpen = ()=>{
    setHasDelete(!hasDelete);
  }
  const handleCloseDelete = ()=>{
    setHasDelete(false)
  }

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <div>
       <img src="images/logo.png" alt="" className='cursor-pointer w-[167px] sm:w-full' onClick={handleProfileFalse} />
        </div>
       <div className='flex gap-3'>
        <span className='border-2 border-[#3E3F53] border-solid text-white rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer' id="download">
       <img src="images/download.png" alt=""  />
        </span>
            <Tooltip anchorSelect="#download"  place="bottom" className='tooltip' >
              <button>{activeTab === 'webLinks' ? 'Download web links' : 'Download all your positions as a csv file'}</button>
            </Tooltip>
        <span className='border-2 border-[#3E3F53] border-solid text-white rounded-lg  w-10 h-10  flex items-center justify-center cursor-pointer' onClick={handleDeleteOpen} id="delete">
       <img src="images/delete.png" alt="" />
        </span>
        <Tooltip anchorSelect="#delete"  place="bottom" className='tooltip'>
                <button>{activeTab === 'webLinks' ? 'Delete all Weblinks from our database' : ' Delete all your positions from our database'}</button>
        </Tooltip>
        <span className=' rounded-lg relative cursor-pointer' onClick={handleOpen} >
       <img src="images/user.png" alt="" />
       {
        open && (
          <>
       <div className="-bottom-28 -left-24 absolute border-[#3E3F53] border-2  p-2 w-[130px] h-[100px] rounded-lg rounded-tr-none bg-[#18202A] z-10">
        <div className='flex gap-2 border-b-2 border-[#3E3F53] pb-3 pt-2 ps-2' onClick={handleProfile}><img src="images/brokerref.png" alt="" /><span className='text-xs text-white'>Profile</span></div>
        <div className='flex gap-2 pb-2 pt-3 ps-2'><img src="images/logOut.png" alt="" /><span className='text-xs text-white'>Log Out</span></div>
       </div>
          </>
        )
       }
        </span>
       </div>
      </div>
      
      {
        hasDelete && (
          <>
          
           <div className="fixed bg-[#131720] bg-opacity-[55%] inset-0 z-50 flex items-center justify-center flex-col gap-5">
            <div>
           <div className="flex justify-center items-center flex-col gap-3 border-2 bg-[#18202A] border-[#3E3F53] py-[10px] px-[20px] rounded-lg text-white  w-[360px] h-[228px]">
            <img src="images/alert.png" className='w-[65px] h-[65px]' alt="" />
            <h3 className='text-white  text-xl font-medium leading-5 '>Are you sure?</h3>
            <p className='text-white text-xs '>you want to delete all your data from our database?</p>
            <div className="flex items-center gap-5">
              <button className='text-white bg-[#131720] py-[14px] px-[40px] rounded-lg' onClick={handleCloseDelete} >Cancel</button>            
              <button className='text-white py-[14px] px-[40px] bg-[#0083F2] rounded-lg' onClick={handleDataDelete} >Delete</button>
            </div>
            </div>
            </div>
           {
        notification && (
          <>
          <div id="toast-danger" class="absolute bottom-5 right-8 flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">

    <img src="images/success.png" alt="" />
        <span class="sr-only">Error icon</span>
    <div class="ms-3 text-sm font-normal text-[#0083F2]">Item has been deleted Succesfuly</div>
     </div>
          </>
        )
      }
           </div>
          </>
        )
      }
    </>
  )
}

export default Navbar
