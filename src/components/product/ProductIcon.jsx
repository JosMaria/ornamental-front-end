import { RiPlantFill } from "react-icons/ri"
import { IoBag } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5"
import { useState } from "react";
import '../../stylesheets/product/ProductIcon.css'

export const ProductIcon = ({ inConservation }) => {

  const [isReserved, setIsReserved] = useState(true);

  const changeStatusReserve = () => {
    setIsReserved(isReserved ? false : true);
  }

  return (
    <div className='icon-container'>
      {
        inConservation ?
          <RiPlantFill className='icon plant' />
        :
          isReserved ?
            <IoBag className='icon reserve' onClick={changeStatusReserve} />
            :
            <IoBagCheck className='icon reserve' onClick={changeStatusReserve} />
      }
    </div>
  );
};