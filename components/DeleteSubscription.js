import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';

function DeleteSubscription() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8000/subscription/${userId}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error deleting subscription');
      console.error(error);
    }
  };

  return (
    <Container className="text-center mt-5">
      <Card className="bg-white text-black p-5">
        <h2>Delete Subscription</h2>
        <Form onSubmit={handleDelete}>
          <Form.Group className="mb-3">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Delete Subscription
          </Button>
        </Form>
        {message && <p className="mt-3">{message}</p>}
        <Button variant="primary" className="mt-3" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Card>
    </Container>
  );
}

export default DeleteSubscription;
