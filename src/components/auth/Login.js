import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    
    <Card>
        <Card.Body>
        <h2 className="text-left mb-4">Login</h2>
      <div className= "text-left">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group fluid icon='user' iconPosition='left' placeholder='E-mail address' id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='E-mail address' type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group textAlign='center' id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder='Password'type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          </div>
          
     
          <Message>
          <div className="text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link> - Forget your password?<Link to="/forgot-password">Click here</Link>
          
      
    </div>
      </Message>


  </Card.Body>
      </Card>
    
  )
}