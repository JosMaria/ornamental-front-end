import '../stylesheets/ProductInformation.css'

const ProductInformation = ({ nameCommon, nameScientist, family }) => {
  return (
    <div className='information-container'>
      <p className='name-common'>{nameCommon}</p>
      <p className='name-scientist'><i>{nameScientist}</i></p>
      <p className='family'>{family}</p>
    </div>
  );
};

export default ProductInformation;