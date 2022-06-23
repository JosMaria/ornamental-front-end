import '../stylesheets/Product.css'

const Product = () => {
  return (
    <div className='product-container'>
      <img
        className='image-product'
        src={require(`../images/plant-number-${'one'}.png`)}
        alt='plant number one'
      />
      <div className='information-container'>
        <p className='name-common'>Nombre Común</p>
        <p className='name-scientist'><i>Nombre cientifico</i></p>
        <p className='family'>Familia</p>
      </div>
    </div>
  );
};

export default Product;