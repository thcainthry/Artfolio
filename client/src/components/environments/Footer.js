
import React from 'react';
import "../style/Footer.css";
import { MDBFooter,  MDBIcon } from 'mdb-react-ui-kit';
//MDBContainer, MDBRow, MDBCol,
export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted publicfooter'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-footer'>Get connected with us on social networks:</span>
        </div>
        <div className='elements-footer2'>
        <div className='elements-footer'>
          <a href='https://www.facebook.com/albiona.berisha.13' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://www.instagram.com/albioonaberisha/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
        </div>
        
      </section>
    
      </MDBFooter>
  )
}