import { Tab } from './Tab';
import '../stylesheets/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Tab classification='ORNAMENTAL'/>
      <Tab classification='FORESTAL'/>
      <Tab classification='INDUSTRIAL'/>
      <Tab classification='ALIMENTICIA'/>
      <Tab classification='MEDICINAL'/>
      <Tab classification='EXOTICA'/>
      <Tab classification='CACTU'/>
      <Tab classification='FRUTAL'/>
      <Tab classification='CRASA'/>
      <Tab classification='SUCULENTA'/>
    </div>
  );
};

export default Navbar;
