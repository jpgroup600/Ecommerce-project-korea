import React from 'react';
import Review from "../assets/images/Review.svg";
import Merchant from "../assets/images/Merchant.svg";
import NewverLogin from "../assets/images/NeverLogin.svg";
import Kakao from "../assets/images/Kakao.svg";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Navgation = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        
        alert('user create successful')
        Navgation('/login')
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
          <div className="form-outline" style={{height:'221px'}}>
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
                <input {...register('name', { required: true })} type="text" placeholder="UserName" />
                {errors.name && <p className="error-text">Name is required</p>}
              </div>
              <div className="form-group mt-2">
                <input {...register('email', { required: true })} type="email" placeholder="Email" />
                {errors.email && <p className="error-text">Email is required</p>}
              </div>
              <div className="form-group mt-2">
                <input {...register('password', { required: true })} type="password" placeholder="Password" />
                {errors.password && <p className="error-text">Password is required</p>}
              </div>
              <button className="login-btn" type="submit">Sign Up</button>
            </form>

            <div className="find-passowrd flex items-center justify-between px-3 mt-4">
              <div className="checkbox-password">
                <p >
                  <Link to="/singup" style={{textDecoration:'underline',textAlign:'right'}}>Login</Link>
                </p>
              </div>
              {/* <div className="checkbox-password flex items-center gap-5">
                <input type="checkbox" />
                <p>Auto Login</p>
              </div>
              <div className="find-passowrd">
                <p>Find Id | Password find</p>
              </div> */}
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

export default Signup;
