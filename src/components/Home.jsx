import { Catalog } from './Catalog';
import '../stylesheets/Home.css'
import Navbar from './Navbar';

export const Home = () => {
  return (
    <>
      <Navbar title={'This is a title'}/>
      <Catalog />
    </>
  );
};
