import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import userData from '../data/users'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    pass: '',
    mail: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      window.location.href = '/';
    }
  }, [])


  const handleSubmit = () => {
    if (formData.username && formData.mail && formData.pass) {
      const existUsername = userData.find(item => item.username === formData.username)
      const existEmail = userData.find(item => item.email === formData.mail)
      const existPassword = userData.find(item => item.pass === formData.pass,
      )
      if (existUsername && existEmail && existPassword) {
        localStorage.setItem('user', JSON.stringify(formData))
        window.location.href = "/"
      } else {
        alert('Email or Password wrong')
      }
    } else {
      alert('Fill the required areas')
    }
  }






  return (
    <Container className="pt-5 " style={{ padding: "20%" }}>
      <Row className="justify-content-center">
        <Col md={6} >
          <Form>
            <Form.Group onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="mb-3" controlId="username" value={formData.username} >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group onChange={(e) => setFormData({ ...formData, mail: e.target.value })} className="mb-3" controlId="username" value={formData.mail} >
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="text" placeholder="Email Adress" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setFormData({ ...formData, pass: e.target.value })} type="password" placeholder="Password" value={formData.pass} />
            </Form.Group>

            <Button className='pt-1' variant="primary" type="submit" onClick={handleSubmit}>
             Login
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>

  );
}

export default LoginForm;
