import { Product } from './product/Product';
import { useEffect, useState } from 'react';
import { fetchAllPlants } from '../functions/functions';
import '../stylesheets/Catalog.css'

export const Catalog = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllPlants(setProducts);
  }, []);

  return (
    <div className='catalog-container'>
      {
        products.map(product => <Product
          key={product.id}
          id={product.id}
          commonName={product.commonName}
          scientistName={product.scientificName}
          family={product.family}
          urlImage={product.urlImage}
          inConservation={product.inConservation}
        />)
      }
    </div>
  );
}
