import React, { useState } from 'react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div
            className='main-pageHeadings'
            data-aos='fade-left'
            data-aos-duration='800'
            data-aos-offset='100'
            data-aos-easing='ease-in-sine'
          >
            <h1 className='pageHead'>Contact</h1>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          
          <div className='main-Map-pge-bx'>
              
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3554189874244!2d75.7263142!3d26.8922131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4b9cfecc2ff%3A0xb39122f930d6272d!2s60%2C%20Jagdamba%20Nagar%20Rd%2C%20Dhawas%2C%20Vikash%20Nagar-D%2C%20Heerapura%2C%20Girdharipura%2C%20Jaipur%2C%20Rajasthan%20302034!5e0!3m2!1sen!2sin!4v1689595284202!5m2!1sen!2sin" width="520" height="360"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              
          </div>


        </div>

        <div className='col-6'>
          <div className='contc-frm-main-bg'>
            <h2 className='cntc-frm-hding text-dark'>
              Let's work <span>together.</span>
            </h2>
          

            <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-between nm-ml-grp'>
                  <input
                    type='text'
                    id='name'
                    required
                    value={name}
                    placeholder='Your Name'
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type='email'
                    id='email'
                    required
                    placeholder='Your Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type='text'
                    id='subject'
                    required
                    placeholder='Subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div>
                  <textarea
                    id='message'
                    placeholder='Message'
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type='submit' className='talk-frm-btn mt-4'>Submit</button>
              </form>
            </div>
        </div>
      </div>
    </div>

  );
};

export default Contacts;
