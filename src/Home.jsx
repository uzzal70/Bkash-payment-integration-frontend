import VisaServiceCard from './Visa/VisaServiceCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAddToCart = (visaService) => {
    navigate('/paywithbkash', {
      state: visaService,
    });
  };

  const visaServices = [
    { id: 1, name: 'Tourist Visa', description: 'Visit beautiful places!' },
    { id: 2, name: 'Work Visa', description: 'Work legally abroad.' },
    {
      id: 3,
      name: 'Student Visa',
      description: 'Pursue education in a foreign country.',
    },
    {
      id: 4,
      name: 'Business Visa',
      description: 'Travel for business purposes.',
    },
    {
      id: 5,
      name: 'Family Reunion Visa',
      description: 'Reunite with family members.',
    },
    {
      id: 6,
      name: 'Diplomatic Visa',
      description: 'For diplomatic missions and official representatives.',
    },
    {
      id: 7,
      name: 'Transit Visa',
      description:
        'For passing through a country en route to another destination.',
    },
    {
      id: 8,
      name: 'Medical Visa',
      description: 'For medical treatment in a foreign country.',
    },
    {
      id: 9,
      name: 'Retirement Visa',
      description: 'For retirees looking to live in another country.',
    },
    {
      id: 10,
      name: 'Cultural Exchange Visa',
      description: 'Participate in cultural exchange programs.',
    },
  ];
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
          Visa Services
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {visaServices.map((visaService) => (
            <VisaServiceCard
              key={visaService.id}
              visaService={visaService}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        {/* <Cart cartItems={cartItems} /> */}
      </div>
    </div>
  );
};

export default Home;
