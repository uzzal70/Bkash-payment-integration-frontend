/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PayWithBkash = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [transactionData, setTransactionData] = useState({
    amount: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTransactionData({
      ...transactionData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const url = `http://142.132.249.197/api/payment/pay?amount=${transactionData?.amount}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to make the payment');
      }

      const responseData = await response.json();
      console.log(responseData);
      if (responseData) {
        e.preventDefault();
        setIsLoading(true);
        window.location.href = responseData?.bkashURL;
        setTimeout(() => setIsLoading(false), 10000);
        //todo: reset the value of transaction
        setTransactionData({
          ...transactionData,
          amount: 0,
        });
        e.target.reset();
      }
    } catch (error) {
      console.error('Error making payment:', error);
    } finally {
      e.target.reset();
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            padding: '100px',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              width: '300px',
              padding: '10px 20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            <div>
              <h3>{location?.state?.name}</h3>
              <p>{location?.state?.description}</p>
            </div>
          </div>
          <div>
            <label
              htmlFor="amount"
              style={{
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Amount{' '}
            </label>
            <input
              required
              type="number"
              id="amount"
              name="amount"
              value={transactionData?.amount}
              placeholder="Payable Amount"
              onChange={handleOnChange}
              style={{
                marginBottom: '20px',
              }}
            />
          </div>

          <button
            style={{ width: '100%', padding: '8px' }}
            type="submit"
            disabled={isLoading ? true : false}
          >
            {isLoading ? 'Processing...' : 'Pay With Bkash'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayWithBkash;
