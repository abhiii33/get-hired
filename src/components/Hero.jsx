import React from 'react'

const Hero = () => {
  return (
     <section className="relative flex items-center justify-center py-10 min-h-full text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-9xl md:text-8xl font-bold leading-tight">
          Work at the heart of change
        </h1>
        <p className="mt-8 italic text-lg md:text-xl">
          This is a place to grow, learn and connect. Everything that makes you 
          who you are is welcome here.
        </p>
        <div className="mt-8">
          <button className="px-8 py-3 bg-purple-600 text-white font-semibold text-lg shadow-lg hover:bg-purple-700 transition">
           Search Open Roles
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
