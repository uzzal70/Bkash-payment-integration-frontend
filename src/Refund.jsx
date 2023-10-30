/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Refund = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [transactionData, setTransactionData] = useState({
    amount: '',
    trxID: '',
    paymentID: '',
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

    const url = 'http://142.132.249.197/api/payment/refund';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionData),
      });

      if (!response.ok) {
        alert('Failed to make the Refund amount');
      }

      const responseData = await response.json();
      console.log(responseData);
      alert(responseData?.statusMessage);
    } catch (error) {
      alert('Error making payment: ' + error); // Concatenate the error message
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
              <h3>Payment Refund</h3>
            </div>
          </div>
          <div>
            <label
              htmlFor="trxID"
              style={{
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Transection ID
            </label>
            <input
              required
              type="text"
              id="trxID"
              name="trxID"
              value={transactionData?.trxID}
              placeholder="Transection ID"
              onChange={handleOnChange}
              style={{
                marginBottom: '20px',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="payment"
              style={{
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Payment ID
            </label>
            <input
              required
              type="text"
              id="payment"
              name="paymentID"
              value={transactionData?.paymentID}
              placeholder="Payment Id"
              onChange={handleOnChange}
              style={{
                marginBottom: '20px',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              style={{
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Amount
            </label>
            <input
              required
              type="number"
              id="amount"
              name="amount"
              value={transactionData?.amount}
              placeholder="Refundable Amount"
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
            {isLoading ? 'Processing...' : 'Refund'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Refund;
