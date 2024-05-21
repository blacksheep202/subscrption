import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import { SubscriptionContext } from '../App';

function PaymentSuccess() {
  const { userId } = useContext(SubscriptionContext);
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <Card className="bg-success text-white p-5">
        <h2>Payment Successful</h2>
        <p>Your subscription is successful.</p>
        <p>Your user ID is: {userId}</p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Card>
    </Container>
  );
}

export default PaymentSuccess;
