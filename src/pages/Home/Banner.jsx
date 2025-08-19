import React from 'react'
// import { motion } from 'motion/react'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-5xl font-bold">
              Latest Jobs update!
            </div>
            {/* <motion.h1
              animate={{ y: -50, color: ['red'] }}
              className="text-5xl font-bold">
              Latest Jobs update!
            </motion.h1> */}
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
