import React from 'react'
import {data} from "../utils/carouseldata"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const CarouselCard = () => {
   const items = data.map((item) => (
    <div key={item.id} className="w-full flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        <div className="flex justify-center">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-64 max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <p className="text-lg text-gray-600">{item.description}</p>
        </div>
      </div>
    </div>
  ))

  return (
<AliceCarousel mouseTracking items={items}  infinite
/>
  )
}
export default CarouselCard
