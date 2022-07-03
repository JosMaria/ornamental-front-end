import '../stylesheets/Tab.css'

export const Tab = ({ classification }) => {
  return (
    <a className='tab-container' href='#'>
      {classification}
    </a>
  );
};