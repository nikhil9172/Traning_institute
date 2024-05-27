// src/Footer.js
import React from 'react';
import './Footer.css';

import { CDBBox, CDBBtn, CDBIcon, CDBLink } from 'cdbreact';

const Footer = () => {
  return (
    <footer className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="It_training_logo.png" width="30px" />
              <span className="ms-3 h5 font-weight-bold" style={{color:'white'}}  >Devwares</span>
            </a>
            <p className="my-3" style={{ width: '250px', color:'white'}}>
              We are creating High Quality Resources and tools to aid developers during the
              development of their projects.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Devwares
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Resources</CDBLink>
              <CDBLink href="/">About Us</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Blog</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Support</CDBLink>
              <CDBLink href="/">Sign Up</CDBLink>
              <CDBLink href="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Windframe</CDBLink>
              <CDBLink href="/">Loop</CDBLink>
              <CDBLink href="/">Contrast</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small>
      </CDBBox>
    </footer>
  );
};

export default Footer;
