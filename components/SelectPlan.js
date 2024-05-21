import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';


function SelectPlan() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan === selectedPlan ? null : plan);
  };

  const handleNext = () => {
    if (selectedPlan) {
      navigate('/make-payment', { state: { selectedPlan, planDescription: selectedPlan.description } });
    } else {
      alert('Please select a plan.');
    }
  };

  const plans = [
    { name: 'Basic', description: '1 Month - ₹99.99' },
    { name: 'Standard', description: '3 Months - ₹249.99' },
    { name: 'Advanced', description: '6 Months - ₹499.99' },
  ];

  return (
    <Container className="text-center mt-5">
      <Card className="p-5">
        <h2>Select a Plan</h2>
        <Row className="justify-content-center">
          {plans.map(plan => (
            <Col xs="auto" className="mb-3" key={plan.name}>
              <Button
                variant={selectedPlan === plan ? 'danger' : 'outline-danger'}
                className={`m-1 plan-button ${selectedPlan === plan ? 'selected' : ''}`}
                onClick={() => handlePlanClick(plan)}
              >
                {plan.name}
              </Button>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mt-3">
          {selectedPlan && (
            <Col xs="auto">
              <Card className="text-center p-3">
                <p>{selectedPlan.description}</p>
                <Button variant="success" onClick={handleNext}>
                  Next
                </Button>
              </Card>
            </Col>
          )}
        </Row>
      </Card>
    </Container>
  );
}

export default SelectPlan;
