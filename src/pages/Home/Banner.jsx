import { motion } from 'framer-motion'
import BlurText from './BlurText'
import team1 from './../../assets/images/o3.jpg'
import team2 from './../../assets/images/o4.jpg'
import { SmoothScrollHero } from './SmoothScrollHero'

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }
  return (
    <div className=" md:h-[500px] lg:h-[550px]">
      <div className=" ">
        <div className="flex flex-col md:flex-row lg:flex-row-reverse  items-center justify-center md:gap-10 lg:gap-24  ">
          <div className="flex-1 md:pl-6 lg:pl-2 ">
            <div className="">
              <motion.img
                src={team1}
                animate={{ y: [20, 60, 20] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="max-w-sm w-48 md:w-64 border-[#123458]  border-l-6 border-b-6  rounded-br-[40px] rounded-t-[40px] shadow-2xl"
              />
              <motion.img
                src={team2}
                animate={{ x: ['10%', '60%', '10%'] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="max-w-sm h-20 md:h-32 w-32 md:w-50 border-[#123458]  border-l-6 border-b-6 rounded-br-[20px]  md:rounded-br-[30px] rounded-t-[20px] md:rounded-t-[30px] shadow-2xl"
              />
            </div>
          </div>
          <div className="flex-1 py-10  px-4 md:px-10  md:py-30">
            <BlurText
              text="Latest jobs for you!"
              delay={160}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
            />
            <p className="py-4 md:py-6 text-xs md:text-sm lg:text-base">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn hover:border-[#123458] hover:bg-white hover:text-[#123458] bg-[#123458] text-base-200 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
