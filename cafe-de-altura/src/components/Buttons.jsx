import React from 'react'

const Buttons = ({typeButton, textButton}) => {


    const getStyleButton = () => {
        switch (typeButton) {
           case 'blackButton':
              return 'flex items-center justify-center w-[168px] h-[40px] text-white font-[14px] leading-[16px] rounded-[4px] bg-black';
           case 'greenButton':
              return 'flex items-center justify-center text-white text-[] leading-[16px] rounded-[4px] w-[168px] h-[40px] bg-[#2A5B45] px-[48px] py-[40px]';
           case 'addButton':
              return 'flex items-center justify-center text-white leading-[16px] rounded-[4px] p-[8px] bg-[#2A5B45B2] w-[60px] h-[32px] bg-opacity-70 hover:bg-[#2A5B45]';
           default:
              return 'flex items-center justify-center  text-white rounded-[4px] w-[130px] h-[40px]  bg-[#515051] text-[14px] leading-[16px] font-semibold';
        }
     };

  return (
    <div className={`${getStyleButton()}`}>{textButton}
    </div>
  )
}

export default Buttons