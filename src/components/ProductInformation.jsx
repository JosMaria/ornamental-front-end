import '../stylesheets/ProductInformation.css'
import { RiPlantFill } from "react-icons/ri";

const ProductInformation = ({ commonName, scientistName, family , inConservation}) => {
  return (
    <div className='product-information-container'>
      <div className='information-container'>
        <p className='name-common'>{commonName}</p>
        <p className='name-scientist'><i>{scientistName}</i></p>
        <p className='family'>{family}</p>
      </div>
      {
        inConservation ? (
          <div className='icon-plant-container'>
            <RiPlantFill className='icon-plant'/>
          </div>
        ) : (
          <>
          </>
        )
      }
    </div>
  );
};

export default ProductInformation;