import React from 'react';
import FormModal from './FormModal';

const CustomModal = ({ children, open = false, handleClose, modalClassName='', parentContainer = "" }) => {
  return (
    <div>
      <FormModal open={open} handleClose={handleClose}>
        <div className={`flex items-center w-full h-full mt-[6rem] justify-center ${parentContainer}`}>
        <div className={`bg-white dark:bg-A1A w-[30%] sm:w-[90%] py-4 px-9 min-h-[200px] rounded-sm ${modalClassName}`}>
          
        {children}
        </div>
        </div>

      </FormModal>
    </div>
  );
};

export default CustomModal;
