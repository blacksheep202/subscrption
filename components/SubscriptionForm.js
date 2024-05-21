// // src/components/SubscriptionForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

// const SubscriptionForm = () => {
//     const [planName, setPlanName] = useState('');
//     const [message, setMessage] = useState('');

//     const handlePlanChange = (e) => {
//         setPlanName(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`http://localhost:8000/subscribe/${planName}`);
//             setMessage(`Successfully subscribed. Your user ID is: ${response.data.user_id}`);
//         } catch (error) {
//             setMessage('Error subscribing');
//             console.error(error);
//         }
//     };

//     return (
//         <Container>
//             <Row className="justify-content-md-center">
//                 <Col md="6">
//                     <h2 className="mt-4">Subscribe to a Plan</h2>
//                     {message && <Alert variant="info">{message}</Alert>}
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="planName">
//                             <Form.Label>Plan Name:</Form.Label>
//                             <Form.Control as="select" value={planName} onChange={handlePlanChange}>
//                                 <option value="">Select a plan</option>
//                                 <option value="basic">Basic</option>
//                                 <option value="standard">Standard</option>
//                                 <option value="advanced">Advanced</option>
//                             </Form.Control>
//                         </Form.Group>
//                         <Button variant="primary" type="submit" className="mt-2">
//                             Subscribe
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default SubscriptionForm;
