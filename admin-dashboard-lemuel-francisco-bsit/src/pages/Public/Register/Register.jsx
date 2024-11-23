import { useState, useRef, useCallback } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const contactNoRef = useRef();
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();

  const handleOnChange = (event, type) => {
    setIsFieldsDirty(true);
    switch (type) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'middleName':
        setMiddleName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'contactNo':
        setContactNo(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleRegister = async () => {
    const data = { firstName, middleName, lastName, email, password, contactNo };
    setStatus('loading');

    try {
      const res = await axios.post('/admin/register', data);
      console.log(res);
      // Redirect or perform other actions upon successful registration
      navigate('/');
    } catch (e) {
      setError(e.response?.data?.message || 'Registration failed');
      console.error(e);
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className='Register'>
      <div className='main-container'>
        <form>
          <div className='form-container'>
            <h3>Register</h3>
            {error && <span className='register errors'>{error}</span>}
            <div>
              <div className='form-group'>
                <label>First Name:</label>
                <input
                  type='text'
                  name='firstName'
                  onChange={(e) => handleOnChange(e, 'firstName')}
                />
              </div>
              <div className='form-group'>
                <label>Middle Name:</label>
                <input
                  type='text'
                  name='middleName'
                  onChange={(e) => handleOnChange(e, 'middleName')}
                />
              </div>
              <div className='form-group'>
                <label>Last Name:</label>
                <input
                  type='text'
                  name='lastName'
                  onChange={(e) => handleOnChange(e, 'lastName')}
                />
              </div>
              <div className='form-group'>
                <label>E-mail:</label>
                <input
                  type='text'
                  name='email'
                  ref={emailRef}
                  onChange={(e) => handleOnChange(e, 'email')}
                />
              </div>
              <div className='form-group'>
                <label>Password:</label>
                <input
                  type='password'
                  name='password'
                  ref={passwordRef}
                  onChange={(e) => handleOnChange(e, 'password')}
                />
              </div>
              <div className='form-group'>
                <label>Contact Number:</label>
                <input
                  type='text'
                  name='contactNo'
                  ref={contactNoRef}
                  onChange={(e) => handleOnChange(e, 'contactNo')}
                />
              </div>
            </div>
            <div className='submit-container'>
              <button
                type='button'
                disabled={status === 'loading'}
                onClick={() => {
                  if (status === 'loading') return;
                  if (firstName && lastName && email && password && contactNo) {
                    handleRegister();
                  } else {
                    setIsFieldsDirty(true);
                    if (!firstName) {
                      // focus logic
                    }
                    if (!lastName) {
                      // focus logic
                    }
                    if (!email) {
                      emailRef.current.focus();
                    }
                    if (!password) {
                      passwordRef.current.focus();
                    }
                    if (!contactNo) {
                      contactNoRef.current.focus();
                    }
                  }
                }}
              >
                {status === 'idle' ? 'Register' : 'Loading'}
              </button>
            </div>
            <div className='login-container'>
              <a href='/login'>
                <small>Already have an account? Login</small>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
