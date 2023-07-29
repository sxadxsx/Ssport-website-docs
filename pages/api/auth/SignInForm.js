import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Card, Placeholder, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useSession, signIn, signOut } from "next-auth/react"
import useSWR from 'swr'

export default function SignInForm({...props}) {
  const { data: session, status } = useSession()

  const [showPassword, setShowPassword] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter()
  const { query } = useRouter();

  function togglePassword() {
    setPassword(document.querySelector("[name='password']").value);
    setConfirmPassword(document.querySelector("[name='confirmPassword']")?.value);

    setShowPassword(!showPassword);
  }

  function hidePasswordOnSubmit() {
    if (showPassword)
      togglePassword();
  }

  const validationSchema = props.signup ? Yup.object().shape({
      firstName: Yup.string()
          .required('First Name is required'),
      lastName: Yup.string()
          .required('Last name is required'),
      email: Yup.string()
          .test(
              'is-available',
              'Email already exists',
              async (value, testContext) => {
                console.log(testContext);

                if (value === '') {
                  return true;
                }
                const fetcher = await fetch(`https://dev-api/api/users/email_available?email=${encodeURIComponent(value)}`);
                const result = await fetcher.json();
                return result.available === true
          })
          .required('Email is required')
          .email('Email is invalid'),
          // .test({
          //       name: 'unique-email',
          //       exclusive: true,
          //       message: 'already taken',  // expect an i18n message to be passed in
          //       test: async function (value) {
          //         const response = await fetch(
          //           `https://dev-api/api/users/email_available?email=${value}`, 
          //           GET_JSON)
          //         const result = await response.json()
          //         return result === true
          //       }
          //     }),
          // .test(
          //   'unique-email2',
          //   'Email already exists',
          //   (value, context) => {
          //     const fetcher = (url) => fetch(url).then((res) => res.json());
          //     const { data, error } = useSWR(
          //       "/api/users/email_available?email=" + value,
          //       fetcher
          //     );
          //     console.log(data);
          //   },
          // ),
      password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Please confirm your required'),
  }) : Yup.object().shape({
      email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
      password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
  });

  const formOptions = { 
    mode: 'onBlur', 
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema)
  };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { dirtyFields, errors, touchedFields } = formState;

  const onSubmit = (data, e) => {
      setDisabledSubmit(true);
      hidePasswordOnSubmit();
      e.target.submit();
    };

  const onBlur = (data, e) => {
    if (!props.signup && data.target.value !== '') {
      (async (value, testContext) => {
        const fetcher = await fetch(`https://dev-api/api/users/email_available?email=${encodeURIComponent(data.target.value)}`);
        const result = await fetcher.json();
        if (result.available === true)
          router.push(`/auth/signup?email=${encodeURIComponent(data.target.value)}`);
      })()
    }
  };

  var emailInputProps = {
    onBlur: onBlur,
  };

  if (props.signup)
    delete emailInputProps.onBlur;

  return (
    <>
    { status === 'loading' && (
      <>
        <div className="display-4 text-center mb-3">
            <Placeholder animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> 
              <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
        </div>
      </>
    )}
    { (props.providers && props.csrfToken !== null && props.providers['credentials'] && status !== "loading") && (
      <>

        <h1 className="display-4 text-center mb-3">
        <div className="mb-3">
          <Link href="/" passHref>
            <img className="navbar-brand-img" src="/img/logo-red.svg" height="70rem" alt="..." />
          </Link>

        </div>
          {props.signup ? "Create account"  : "Sign in" }
        </h1>
        <p className="text-muted text-center mb-3">Stop checking OpenTable.</p>
        <form action={props.providers['credentials'].callbackUrl} method="post" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="csrfToken" value={props.csrfToken} />

          <div className="form-group" style={{"display":"none"}}>
            {/* antibot input field */}
            <Form.Label>Phone</Form.Label>
            <Form.Control type="input" name="phone" placeholder="Phone" />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </div>

          {props.signup && (
            <>
            <div className="form-group">
              <Form.Label>First Name</Form.Label>
              <Form.Control tabIndex="1" type="input" name="firstName" {...register('firstName')} isValid={touchedFields.firstName && !errors.lastName} isInvalid={errors.firstName} placeholder="First Name" />
              <Form.Control.Feedback type="invalid">{errors.firstName?.message}</Form.Control.Feedback>
            </div>
            <div className="form-group">
              <Form.Label>Last Name</Form.Label>
              <Form.Control tabIndex="2" type="input" name="lastName" {...register('lastName')}  isValid={touchedFields.lastName && !errors.lastName} isInvalid={errors.lastName} placeholder="Last Name" />
              <Form.Control.Feedback type="invalid">{errors.lastName?.message}</Form.Control.Feedback>
            </div>
            </>
          )}
          <div className="form-group">
            <Form.Label>Email Address</Form.Label>
            <Form.Control tabIndex="3" type="email" name="email" {...register('email', {...emailInputProps})} isValid={touchedFields.email && !errors.email} isInvalid={errors.email} defaultValue={query.email} placeholder="name@address.com" />
            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">{props.signup && "Email is not taken"}</Form.Control.Feedback>
          </div>
          <div className="form-group">
            <Row>
              <Col>
                <Form.Label>Password</Form.Label>
              </Col>
              <Col xs="auto">
              {! props.signup && (
                <Link href="/password-reset" tabIndex="8" passHref>
                  <Form.Text as="a" className="small text-muted">
                    Forgot password?
                  </Form.Text>
                </Link>
              )}
              </Col>
            </Row>
            {/* Have to use 2 input groups because it messes with Chome password mgr */}
            { showPassword && !props.signup && (
              <InputGroup className="input-group-merge">
                <Form.Control tabIndex="4" name="password"  {...register('password')} type="input" defaultValue={password} isValid={touchedFields.password && !errors.password} isInvalid={errors.password} placeholder="Enter your password" />
                <InputGroup.Text onClick={() => togglePassword()}>
                  <FeatherIcon icon="eye" size="1em" />
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
              </InputGroup>
            )}
            { !showPassword && !props.signup &&  (
              <InputGroup className="input-group-merge">
                <Form.Control tabIndex="4" name="password" {...register('password')} type="password" defaultValue={password} isValid={touchedFields.password && !errors.password} isInvalid={errors.password} placeholder="Enter your password" />
                <InputGroup.Text onClick={() => togglePassword()}>
                  <FeatherIcon icon="eye" size="1em" />
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
              </InputGroup>
            )}
            { props.signup &&  (
              <InputGroup className="input-group-merge">
                <Form.Control tabIndex="5" name="password" {...register('password')} type={showPassword ? "input" : "password"} defaultValue={password} isValid={touchedFields.password && !errors.password} isInvalid={errors.password} placeholder="Enter your password" />
                <InputGroup.Text onClick={() => togglePassword()}>
                  <FeatherIcon icon="eye" size="1em" />
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
              </InputGroup>
            )}
          </div>
          {props.signup && (
            <div className="form-group">
              <Row>
                <Col>
                  <Form.Label>Confirm Password</Form.Label>
                </Col>
                <Col xs="auto">
                  {/* empty field */}
                </Col>
              </Row>
              {/* Have to use 2 input groups because it messes with Chome password mgr */}
              { props.signup &&  (
                <InputGroup className="input-group-merge">
                  <Form.Control tabIndex="6" name="password" {...register('confirmPassword')} type={showPassword ? "input" : "password"} defaultValue={confirmPassword} isValid={touchedFields.confirmPassword && !errors.confirmPassword} isInvalid={errors.confirmPassword} placeholder="Enter your password" />
                  <InputGroup.Text onClick={() => togglePassword()}>
                    <FeatherIcon icon="eye" size="1em" />
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">{errors.confirmPassword?.message}</Form.Control.Feedback>
                </InputGroup>
              )}
            </div>
          )}
          <Button tabIndex="7" disabled={disabledSubmit ? true : false }type="submit" size="lg" className="w-100 mb-3">
            { props.signup ? "Create account" : "Sign in" }
          </Button>

        </form>
        {!props.signup && Object.keys(props.providers).map((providerKey, i) => (
          <>
            {
              props.providers[providerKey].type !== "credentials" && (
                <form action={props.providers[providerKey].signinUrl} method="POST">
                  <input type="hidden" name="csrfToken" value={props.csrfToken} />
                  {props.providers[providerKey].callbackUrl && (
                    <input type="hidden" name="callbackUrl" value={props.query.callbackUrl} />
                  )}

                  <Button variant="outline-secondary" type="submit" className="w-100 mb-3" size="lg">
                    Sign in with {props.providers[providerKey].name} <i className={"bi-" + props.providers[providerKey].id } role="img" aria-label="Facebook" style={ {"marginLeft": "0.5em"} }></i> 
                  </Button>
                </form>
                )
            }
          </>
        ))}
        {! props.signup && (
          <p className="text-center">
            <small className="text-muted text-center">
              Don't have an account yet?{' '}
              <Link href="/auth/signup">
                <a>Sign up</a>
              </Link>
              .
            </small>
          </p>
        )}
      </>
    )}
    </>
  );
}

export {SignInForm};
