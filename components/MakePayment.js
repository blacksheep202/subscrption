import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { SubscriptionContext } from '../App';

function MakePayment() {
  const { setUserId } = useContext(SubscriptionContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPlan, planDescription } = location.state;

  const handlePayment = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/subscribe/${selectedPlan.name}`);
      setUserId(response.data.user_id);
      navigate('/payment-success');
    } catch (error) {
      console.error('Error processing payment', error);
    }
  };

  return (
    <Container className="text-center mt-5">
      <Card className="bg-info text-white p-5">
        <h2>Make Payment</h2>
        <p>You have selected the {selectedPlan.name} plan.</p>
        <p>Description: {planDescription}</p>
        <Button variant="success" onClick={handlePayment}>
          Pay Now
        </Button>
      </Card>
    </Container>
  );
}

export default MakePayment;
