import React, { useState, useEffect } from 'react'
import { getCsrfToken, getProviders, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { SignInForm } from './SignInForm';

export default function signin({...props}) {
  const [providers, setProviders] = useState(null);
  const [csrfToken, setCsrfToken] = useState(null);
  const router = useRouter()
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    router.push('/');
  }

  useEffect(async() => {
    if (status !== 'loading') {
      if (await providers === null) {
        setProviders(await getProviders());
        if (await csrfToken === null) {
          setCsrfToken(await getCsrfToken());
        }
      }
    }
    
    return () => {
      // cleanup
    }
  });

  const { query } = useRouter();

  return (
    <>                
      <div className="d-flex align-items-center min-vh-100 bg-auth border-top border-top-2 border-primary">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={5} xl={4} className="my-5">
              {query.error && (
                <>
                  <Alert  variant="danger">
                      Could not login. Please check your e-mail or password or third-party application.
                    </Alert>
                </>
              )}

              <SignInForm providers={providers} csrfToken={csrfToken} query={query} signup={props.signup ? true : false} />
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
