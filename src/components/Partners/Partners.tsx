import { color } from '@mui/system';
import React from 'react';
import { partners, partnersReason } from '../../assets';
import './Partners.css';

const Partners: React.FC = () => {
  return (
    <>
    <section>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 my-auto">
            <div className="partners-heading">
              <h1>
                Partner with us for all your laundry needs.
              </h1>
            </div>
            <div className="partners-text my-3">
              <p>Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum velit rhoncus faucibus dignissim rhoncus sapien. Lorem ipsum dolor sit amet.</p>
            </div>
            <button className='btn my-3' style={{
              background: '#35A7FF',
              borderRadius: '10px',
              color: '#fff',
              fontSize: '20px',
              width: '269px',
              height: '52px',
            }}>
              Get in Touch
            </button>
          </div>
          <div className="col-md-6 my-auto">
            <div className="partners-img">
              <img src={partners} alt="partners" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="">
        <div className="row">
          <div className="col-md-12">
            <div className="partner-container my-4" style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(9, 114, 195, 0.87) 0%, rgba(0, 109, 120, 0.75941) 75.74%, rgba(0, 119, 90, 0.66) 100%), url(${partnersReason})`
              }}>
              <div className="partners-reasons">
                <h1 className='my-4'>Reasons To Partner With Us</h1>
              </div>
              <div className="container">
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur. Dictumst sem at nec viverra .</li>
                <li>Lorem ipsum dolor sit amet consectetur. Dictumst sem at nec viverra .</li>
                <li>Lorem ipsum dolor sit amet consectetur. Dictumst sem at nec viverra .</li>
                <li>Lorem ipsum dolor sit amet consectetur. Dictumst sem at nec viverra .</li>
                <li>Lorem ipsum dolor sit amet consectetur. Dictumst sem at nec viverra .</li>
                <li>Lorem ipsum dolor sit amet consectetur. Dictumst sem at nec viverra .</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>

    </section>

    </>
  );
}

export default Partners;
