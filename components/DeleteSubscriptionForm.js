// src/components/DeleteSubscriptionForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

// const DeleteSubscriptionForm = () => {
//     const [userId, setUserId] = useState('');
//     const [message, setMessage] = useState('');

//     const handleChange = (e) => {
//         setUserId(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.delete(`http://localhost:8000/subscription/${userId}`);
//             setMessage(response.data.message);
//         } catch (error) {
//             setMessage('Error deleting subscription');
//             console.error(error);
//         }
//     };

//     return (
//         <Container>
//             <Row className="justify-content-md-center">
//                 <Col md="6">
//                     <h2 className="mt-4">Delete Subscription</h2>
//                     {message && <Alert variant="danger">{message}</Alert>}
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="userId">
//                             <Form.Label>User ID:</Form.Label>
//                             <Form.Control type="text" value={userId} onChange={handleChange} />
//                         </Form.Group>
//                         <Button variant="danger" type="submit" className="mt-2">
//                             Delete Subscription
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default DeleteSubscriptionForm;
