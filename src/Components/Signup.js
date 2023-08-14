import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

const Signup = () => {
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>

          <MDBCol sm='6'>

            <div className='d-flex flex-row ps-5 pt-5'>
              <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Sign Up</h3>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='First Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Last Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <div className="d-grid gap-2">
                <MDBBtn className="mb-4 px-5 mx-5" color='info' size='lg'>Sign Up</MDBBtn>
              </div>
              <p className='ms-5'>Already have an account? <a href="/login" className="link-info">Log in here</a></p>

            </div>

          </MDBCol>

          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Signup image"
              className="w-100"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
  );
}

export default Signup;
