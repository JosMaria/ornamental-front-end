import '../../stylesheets/product/Information.css'

export const Information = ({ commonName, scientistName, family }) => {
  return (
    <div className='information-container'>
      <p className='common-name-text'>{commonName}</p>
      <p className='scientific-name-text'><i>{scientistName}</i></p>
      <p className='family-text'>{family}</p>
    </div>
  );
};