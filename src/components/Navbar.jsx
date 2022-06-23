import '../stylesheets/Navbar.css'

const Navbar = ({ title }) => {
  return (
    <div className='navbar-container'>
      {title}
    </div>
  );
};

export default Navbar;
