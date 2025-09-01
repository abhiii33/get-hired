import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login submitted:', values);
      alert('Login successful!');
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
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .cloud-animate {
          animation: float 6s ease-in-out infinite;
        }
        
        .cloud-animate-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .form-animate {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .login-bg {
          background: linear-gradient(180deg, #5EA5CA 0%, #EEFFFC 100%);
        }
        
        .login-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('src/assets/BACKGROUND.png');
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
          z-index: 1;
        }
        
        /* Responsive Cloud Positioning */
        .left-box {
          position: relative;
          width: 100px;
          height: 100vh;
        }
        
        .right-box {
          position: relative;
          width: 80px;
          height: 100vh;
        }
        
        /* Extra Small Mobile: 320px-374px */
        @media (min-width: 320px) and (max-width: 374px) {
          .left-box {
            width: 120px;
          }
          .right-box {
            width: 90px;
          }
        }
        
        /* Small Mobile: 375px-424px */
        @media (min-width: 375px) and (max-width: 424px) {
          .left-box {
            width: 140px;
          }
          .right-box {
            width: 100px;
          }
        }
        
        /* Large Mobile: 425px-639px */
        @media (min-width: 425px) and (max-width: 639px) {
          .left-box {
            width: 160px;
          }
          .right-box {
            width: 120px;
          }
        }
        
        /* Small Tablet: 640px-767px */
        @media (min-width: 640px) and (max-width: 767px) {
          .left-box {
            width: 200px;
          }
          .right-box {
            width: 140px;
          }
        }
        
        /* Medium Tablet: 768px-1023px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .left-box {
            width: 280px;
          }
          .right-box {
            width: 180px;
          }
        }
        
        /* Small Desktop: 1024px-1279px */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .left-box {
            width: 320px;
          }
          .right-box {
            width: 200px;
          }
        }
        
        /* Medium Desktop: 1280px-1535px */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .left-box {
            width: 380px;
          }
          .right-box {
            width: 240px;
          }
        }
        
        /* Large Desktop: 1536px+ */
        @media (min-width: 1536px) {
          .left-box {
            width: 440px;
          }
          .right-box {
            width: 280px;
          }
        }
        
        /* Hide clouds on very small screens */
        @media (max-width: 374px) {
          .cloud-hide-xs {
            display: none;
          }
        }
      `}</style>

      <main className="min-h-screen relative overflow-hidden login-bg font-sans">
        
        {/* Cloud and Header Layout */}
        <div className="absolute inset-0 z-10 flex justify-between pointer-events-none">
          
          {/* Left Box - Background Cloud + Logo on Top */}
          <div className="left-box p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
            {/* Cloud 1 - Behind Logo (Lower z-index) */}
            <img 
              src="src/assets/Vector1.png" 
              alt=""
              className="absolute top-4 xs:top-6 sm:top-8 md:top-12 lg:top-16 left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 
                         w-24 xs:w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto cloud-animate opacity-80 cloud-hide-xs"
              style={{ zIndex: 5 }}
              loading="lazy"
              decoding="async"
            />
            
            {/* Logo Header - On Top of Cloud (Higher z-index) */}
            <header className="relative pointer-events-auto" style={{ zIndex: 15 }}>
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 
                              flex items-center justify-center">
                <img 
                  src="src/assets/0c4eaee38c02a966c9095a3b31f5bd83f0e86497.gif" 
                  alt="Ballistic Learning - Educational Platform Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </header>
            
            {/* Cloud 2 - Bottom of Left Box */}
            <img 
              src="src/assets/Vector2.png" 
              alt=""
              className="absolute bottom-8 xs:bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 xl:bottom-28 
                         left-4 xs:left-6 sm:left-8 md:left-12 lg:left-16 xl:left-20 
                         w-20 xs:w-24 sm:w-32 md:w-48 lg:w-60 xl:w-72 h-auto cloud-animate-delayed opacity-90"
              style={{ zIndex: 8 }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right Box - Clouds */}
          <div className="right-box p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
            {/* Cloud 3 - Top Right */}
            <img 
              src="src/assets/Vector3.png" 
              alt=""
              className="absolute top-4 xs:top-6 sm:top-8 md:top-12 lg:top-16 xl:top-20 
                         right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10 
                         w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-auto cloud-animate opacity-85"
              style={{ zIndex: 8 }}
              loading="lazy"
              decoding="async"
            />
            
            {/* Cloud 4 - Bottom Right */}
            <img 
              src="src/assets/Vector4.png" 
              alt=""
              className="absolute bottom-8 xs:bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 xl:bottom-28 
                         right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10 
                         w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-auto cloud-animate-delayed opacity-80"
              style={{ zIndex: 8 }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Centered Form Section */}
        <section className="relative z-30 flex items-center justify-center min-h-screen px-3 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-6 sm:py-8">
          <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl form-animate">
            <div className="relative">
              {/* Main Form Card - Fully Responsive Padding */}
              <div className="bg-white/20 backdrop-blur-md rounded-xl xs:rounded-2xl sm:rounded-2xl 
                              p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 
                              shadow-xl xs:shadow-2xl border border-white/30 relative">
                
                {/* Form Header - Responsive Typography */}
                <header className="text-center mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                  <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl 
                                 font-bold text-gray-800 mb-1 xs:mb-1 sm:mb-2 leading-tight">
                    Great to See You Again
                  </h1>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-gray-600">
                    Let's get you set up for a great day
                  </p>
                </header>

                {/* Login Form - Fully Responsive */}
                <Formik
                  initialValues={{ username: '', password: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, errors, touched }) => (
                    <div className="space-y-2 xs:space-y-3 sm:space-y-3 md:space-y-4 pb-3 xs:pb-4 sm:pb-4 md:pb-5">
                      
                      {/* Username Field - Responsive Sizing */}
                      <div className="form-group">
                        <label htmlFor="username" className="sr-only">Username</label>
                        <div className="relative">
                          <Field
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            autoComplete="username"
                            className={`w-full px-2 xs:px-3 sm:px-3 md:px-4 lg:px-4 
                                       py-2 xs:py-2.5 sm:py-2.5 md:py-3 lg:py-3 
                                       rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl 
                                       border-2 transition-all duration-200 bg-white/50 backdrop-blur-sm 
                                       placeholder-gray-500 text-gray-800 
                                       text-sm xs:text-base sm:text-base md:text-lg lg:text-xl ${
                              errors.username && touched.username
                                ? 'border-red-400 focus:border-red-500'
                                : 'border-white/30 focus:border-blue-400'
                            } focus:outline-none focus:ring-2 focus:ring-blue-300/20`}
                          />
                        </div>
                        <ErrorMessage 
                          name="username" 
                          component="div" 
                          className="text-red-600 text-xs xs:text-sm mt-1 ml-1 font-medium" 
                          role="alert"
                          aria-live="polite"
                        />
                      </div>

                      {/* Password Field - Responsive Sizing */}
                      <div className="form-group">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                          <Field
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter Password"
                            autoComplete="current-password"
                            className={`w-full px-2 xs:px-3 sm:px-3 md:px-4 lg:px-4 
                                       py-2 xs:py-2.5 sm:py-2.5 md:py-3 lg:py-3 
                                       pr-8 xs:pr-10 sm:pr-10 md:pr-12 lg:pr-12 
                                       rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl 
                                       border-2 transition-all duration-200 bg-white/50 backdrop-blur-sm 
                                       placeholder-gray-500 text-gray-800 
                                       text-sm xs:text-base sm:text-base md:text-lg lg:text-xl ${
                              errors.password && touched.password
                                ? 'border-red-400 focus:border-red-500'
                                : 'border-white/30 focus:border-blue-400'
                            } focus:outline-none focus:ring-2 focus:ring-blue-300/20`}
                          />
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 xs:right-3 sm:right-3 md:right-4 lg:right-4 
                                     top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 
                                     focus:text-gray-700 transition-colors p-0.5 xs:p-1"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? 
                              <EyeOff size={14} className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" /> : 
                              <Eye size={14} className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
                            }
                          </button>
                        </div>
                        <ErrorMessage 
                          name="password" 
                          component="div" 
                          className="text-red-600 text-xs xs:text-sm mt-1 ml-1 font-medium" 
                          role="alert"
                          aria-live="polite"
                        />
                      </div>

                      {/* Submit Button - Responsive Sizing */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2 xs:py-2.5 sm:py-2.5 md:py-3 lg:py-3 xl:py-4 
                                   mt-2 xs:mt-3 sm:mt-4 md:mt-4 
                                   bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 disabled:bg-blue-400 
                                   text-white font-semibold 
                                   text-sm xs:text-base sm:text-base md:text-lg lg:text-xl 
                                   rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl 
                                   transition-all duration-200 transform hover:scale-[1.02] focus:scale-[1.02] active:scale-[0.98] 
                                   shadow-lg disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center" role="status" aria-label="Signing in">
                            <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 
                                          border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            <span className="text-xs xs:text-sm sm:text-base md:text-lg">Signing In...</span>
                          </div>
                        ) : (
                          'Login'
                        )}
                      </button>

                      {/* Forgot Password Link - Responsive Sizing */}
                      <div className="text-center mt-2 xs:mt-3 sm:mt-3 md:mt-4">
                        <button
                          type="button"
                          className="text-gray-600 hover:text-gray-800 focus:text-gray-800 transition-colors 
                                   text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg 
                                   underline focus:outline-none focus:ring-2 focus:ring-gray-300 rounded 
                                   px-1 xs:px-2 py-0.5 xs:py-1"
                          onClick={() => alert('Forgot password functionality would be implemented here')}
                        >
                          Forgot Your Password?
                        </button>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>

              {/* Character Image - Responsive Bottom Center */}
              <div className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-5 md:-bottom-6 lg:-bottom-7 
                            left-1/2 transform -translate-x-1/2 z-10">
                <img 
                  src="src/assets/sunblue.png" 
                  alt=""
                  className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 
                           object-contain drop-shadow-lg"
                  loading="lazy"
                  decoding="async"
                  role="presentation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Responsive */}
        <footer className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-4 lg:bottom-6 
                         left-1/2 transform -translate-x-1/2 z-30 px-2 xs:px-3 sm:px-4">
          <p className="text-gray-600 text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base text-center">
            © 2023 copyright ballistic learning Pvt Ltd. all Rights Reserved
          </p>
        </footer>
      </main>
    </>
  );
};

export default LoginScreen;