import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';

function HomeMenu() {
  const navigate = useNavigate();
  const plans = [
    { name: 'Basic', duration: '1 Month', price: '₹99.99' },
    { name: 'Standard', duration: '3 Months', price: '₹249.99' },
    { name: 'Advanced', duration: '6 Months', price: '₹499.99' },
  ];



  const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    color: 'black',
  };

  const cardStyle = {
    backgroundColor: '#f0f0f0',
    border: '1px solid black',
    padding: '20px',
  };

  const planCardStyle = {
    backgroundColor: '#d9534f',
    color: 'white',
    marginBottom: '10px',
  };

  return (
    <Container className="text-center mt-5" style={containerStyle}>
      <h1>Subscription App</h1>
      <Button variant="primary" className="m-3" onClick={() => navigate('/select-plan')}>
        Subscribe
      </Button>
      <Button variant="danger" className="m-3" onClick={() => navigate('/delete-subscription')}>
        Delete Subscription
      </Button>
      <Card className="mt-5" style={cardStyle}>
        <h2 style={{ color: 'black' }}>Subscription Plans</h2>
        {plans.map(plan => (
          <Card className="mt-3" key={plan.name} style={planCardStyle}>
            <Card.Body>
              <Card.Title>{plan.name} Plan</Card.Title>
              <Card.Text>Duration: {plan.duration}</Card.Text>
              <Card.Text>Price: {plan.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Card>
    </Container>
  );
}

export default HomeMenu;
