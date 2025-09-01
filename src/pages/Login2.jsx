// import React from 'react'
// import Hero from '../components/Hero'
// import CarouselCard from '../components/CarouselCard'
   import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { Eye, EyeOff } from 'lucide-react';
import {useNavigate} from "react-router-dom"
// import * as Yup from 'yup'; // if using Yup for validation
const Login2 = () => {
const [showPassword, setShowPassword] = useState(false);

  // Validation Schema
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required'),
      email:Yup.string()
      .min(3,"must be an email")
      .required("sahi se likho")
  });
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
        console.log(values);
    
       const response = await axios.post("http://localhost:4000/api/v1/user/login",values,
        {withCredentials: true}
       )
       console.log(response.data);
       
      console.log('Login submitted:', values);
    //   alert('Login successful!');
      navigate("/home")
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    <>
      <main className="min-h-screen relative overflow-hidden login-bg font-sans">
        
        {/* Top Container with Clouds, Logo Header */}
        <div className="flex justify-between p-3 absolute w-full z-20 pointer-events-none">
          {/* Left Box - Clouds + Logo */}
          <div className="left-box relative p-4 sm:p-8">
               {/* Left side clouds */}
            <div className="relative w-48 sm:w-80 h-32 sm:h-48">
              <img 
                src="src/assets/Vector1.png" 
                alt=""
                className="absolute top-0 left-0 w-48 sm:w-80 h-auto cloud-animate"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="src/assets/Vector2.png" 
                alt=""
                className="absolute bottom-0 w-32 sm:w-60 h-auto cloud-animate-delayed"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Header Logo inside left box */}
            <header className="pointer-events-auto top-0 absolute ">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img 
                  src="src/assets/0c4eaee38c02a966c9095a3b31f5bd83f0e86497.gif" 
                  alt="Ballistic Learning - Educational Platform Logo"
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </header>
          </div>

          {/* Right Box - Clouds */}
          <div className="right-box relative p-3 sm:p-7">
            <div className="relative w-32 sm:w-48 h-32 sm:h-48">
              <img 
                src="src/assets/Vector3.png" 
                alt=""
                className="absolute  right-0 w-20 sm:w-24 h-auto cloud-animate"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="src/assets/Vector4.png" 
                alt=""
                className="absolute bottom-2 sm:bottom-5 right-0 w-16 sm:w-20 h-auto cloud-animate-delayed"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Centered Form Section */}
        <section className="relative z-30 flex items-center justify-center min-h-screen px-4 py-8">
          <div className="w-full max-w-md form-animate">
            {/* Login Card with Character */}
            <div className="relative">
              {/* Main Form Card */}
              <div className="bg-white/20 backdrop-blur-md  p-4 sm:p-7 shadow-2xl border border-white/30 relative">
                {/* Form Header */}
                <header className="text-center mb-5 sm:mb-6">
                  <h1 className="text-4xl sm:text-3xl font-medium text-gray-800 mb-2 leading-tight">
                    Great to See You Again
                  </h1>
                  <p className="text-gray-600  text-2xl sm:text-lg">
                    Let's get you set up for a great day
                  </p>
                </header>

                {/* Login Form */}
              <Formik
  initialValues={{ username: '', email: '', password: '' }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({ isSubmitting, errors, touched }) => (
    <Form className="space-y-4 sm:space-y-6 pb-6">
      {/* Username Field */}
      <div className="form-group">
        <Field
          id="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          autoComplete="username"
          className={`w-full px-3 py-3 text-gray-700 text-sm sm:text-base 
            border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 
            focus:ring-blue-400 transition-all duration-200 ease-in-out
            ${
              errors.username && touched.username
                ? 'border-red-400 focus:border-red-500'
                : 'border-white/30 focus:border-blue-400'
            }`}
        />
        <ErrorMessage
          name="username"
          component="div"
          className="text-red-600 text-sm mt-2 ml-2 font-medium"
        />
      </div>

      {/* Email Field */}
      <div className="form-group">
        <Field
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          autoComplete="email"
          className={`w-full px-3 py-3 text-gray-700 text-sm sm:text-base 
            border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 
            focus:ring-blue-400 transition-all duration-200 ease-in-out
            ${
              errors.email && touched.email
                ? 'border-red-400 focus:border-red-500'
                : 'border-white/30 focus:border-blue-400'
            }`}
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-600 text-sm mt-2 ml-2 font-medium"
        />
      </div>

      {/* Password Field */}
      <div className="form-group relative">
        <Field
          id="password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter Password"
          autoComplete="current-password"
          className={`w-full px-3 py-3 text-gray-700 text-sm sm:text-base 
            border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 
            focus:ring-blue-400 transition-all duration-200 ease-in-out
            ${
              errors.password && touched.password
                ? 'border-red-400 focus:border-red-500'
                : 'border-white/30 focus:border-blue-400'
            }`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-600 text-sm mt-2 ml-2 font-medium"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 sm:py-4 bg-blue-600 text-white 
          rounded-xl shadow-md hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-blue-400 
          transition-all duration-200 ease-in-out text-sm sm:text-base"
      >
        {isSubmitting ? "Signing In..." : "Login"}
      </button>
    </Form>
  )}
</Formik>


              </div>

              {/* Character Image - Sticking to bottom center of form */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative">
                  {/* Replace this with your actual character image */}
                  <img 
                    src="src/assets/sunblue.png" 
                    alt=""
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    loading="lazy"
                    decoding="async"
                    role="presentation"
                  />
                  {/* Fallback character if image doesn't load */}
                  {/* <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white text-xl sm:text-2xl" role="img" aria-label="Character illustration">
                      😊
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bottom-4 left-1/2 transform -translate-x-1/2 z-30 px-4">
          <p className="text-[#E2E2E2] text-xs sm:text-sm text-center">
            © 2023 copyright ballistic learning Pvt Ltd. all Rights Reserved
          </p>
        </footer>
      </main>
    </>
  );
};

export default Login2
