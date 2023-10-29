/* eslint-disable react/prop-types */

const VisaServiceCard = ({ visaService, onAddToCart }) => {
  return (
    <div
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        // width: '200px',
        padding: '10px 20px',
        borderRadius: '10px',
      }}
    >
      <div>
        <h3>{visaService.name}</h3>
        <p>{visaService.description}</p>
        <div className="button">
          <div></div>
          <button onClick={() => onAddToCart(visaService)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default VisaServiceCard;
