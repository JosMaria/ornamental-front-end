import '../../stylesheets/product/ProductImage.css'

export const ProductImage = ({ urlImage }) => {
  return (
    <>
      <img
        className='product-image'
        src={require(`../../images/plant-number-${urlImage}.png`)}
        alt={urlImage}
      />
    </>
  );
};