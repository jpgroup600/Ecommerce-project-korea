import React from 'react';
import Review from "../assets/images/Review.svg";
import Merchant from "../assets/images/Merchant.svg";
import NewverLogin from "../assets/images/NeverLogin.svg";
import Kakao from "../assets/images/Kakao.svg";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Navgation = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result)
        
        alert('user login successful')
        Navgation('/')
        console.log('Signup successful:', result);
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

 

  return (
    <>
      <div className="container mx-auto">
        <div className="login-form mx-auto">
          <div className="login-log">
            <h3>Logo</h3>
          </div>
          <div className="form-outline">
            <div className="review-section flex justify-between">
              <h2 className="flex items-center gap-2 review">
                <span><img src={Review} alt="" /></span>
                Reviewers
              </h2>

              <div className="Merchant">
                <h2 className="flex items-center gap-2">
                  <span><img src={Merchant} alt="" /></span>
                  Merchant
                </h2>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input {...register('email', { required: true })} type="email" placeholder="UserName" />
                {errors.name && <p className="error-text">Name is required</p>}
              </div>
             
             <div className="form-group mt-2">
                <input {...register('password', { required: true })} type="password" placeholder="Password" />
                {errors.password && <p className="error-text">Password is required</p>}
              </div>
              <button className="login-btn" type="submit">Login</button>
            </form>

            <div className="find-passowrd flex items-center justify-between px-3 mt-4">
              <div className="checkbox-password flex items-center gap-5">
                <input type="checkbox" />
                <p>Auto Login</p>
              </div>
              <div className="find-passowrd">
                <p>Find Id | Password find</p>
              </div>
            </div>

            {/* Login with  */}
            <div className="login-with flex items-center">
              <img src={NewverLogin} alt="" className="px-5" />
              <p>Naver Login</p>
            </div>

            <div className="login-with flex items-center">
              <p className="fb">Facebook Login</p>
            </div>

            <div className="login-with flex items-center">
              <img src={Kakao} alt="" className="px-5" />
              <p>Kakao Login</p>
            </div>

            {/* Reviewers Register */}
            <div className="review-bottom flex gap-3">
              <div className="review-section-one gap-4 flex items-center justify-center">
                <img src={Review} alt="" />
                <p>Reviewers <br /> Register</p>
              </div>

              <div className="review-section-one gap-4 flex items-center justify-center">
                <img src={Merchant} alt="" />
                <p>Merchant <br /> Register</p>
              </div>
            </div>

            <div className="how-to-use mx-auto">
              <ul className="flex gap-6 mt-4">
                <li>About us</li>
                <li>Become Merchant</li>
                <li>How to use</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
