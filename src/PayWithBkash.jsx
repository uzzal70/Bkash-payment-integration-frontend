/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PayWithBkash = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [transactionData, setTransactionData] = useState({
    amount: '',
    serviceFee: 1.5,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTransactionData({
      ...transactionData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    window.location.href = `https://sandbox.payment.bkash.com/?paymentId=TR0011XXMKKnJ1698561600276&hash=QI_tltcs6gzYhMGl_uGvkBY8900QsSXpd5ULMoVpwX3orPVsWDQD7xbkwypDqtUcNO.m8dwwO)aqv.d0I2rwWlO.8-*IG3xe-xO-1698561600276&mode=0011&apiVersion=v1.2.0-beta`;
    setTimeout(() => setIsLoading(false), 10000);
    //todo: reset the value of transaction
    setTransactionData({
      ...transactionData,
      amount: 0,
    });
    e.target.reset();
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
