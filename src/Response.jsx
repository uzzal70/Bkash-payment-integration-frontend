import { useNavigate, useParams } from 'react-router-dom';

const Response = () => {
  const { message } = useParams();
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {message?.toLowerCase() === 'success' ? (
        <div
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            width: '300px',
            padding: '10px 20px',
            borderRadius: '10px',
            marginBottom: '20px',
            color: 'green',
          }}
        >
          <div>
            {/* <h3>Success</h3> */}
            <h3>Payment {message}</h3>
            <div style={{ textAlign: 'end' }}>
              <button
                style={{ padding: '8px 20px' }}
                onClick={() => navigate('/')}
              >
                Payment Complete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            width: '300px',
            padding: '100px',
            borderRadius: '10px',
            marginBottom: '20px',
            color: 'red',
          }}
        >
          <div>
            <h3>{message}</h3>
            <div style={{ textAlign: 'end' }}>
              <button
                style={{ padding: '8px 20px' }}
                onClick={() => navigate('/')}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Response;
