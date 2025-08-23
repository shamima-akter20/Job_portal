import { motion } from 'framer-motion'
import BlurText from './BlurText'
import team1 from './../../assets/images/o3.jpg'
import team2 from './../../assets/images/o4.jpg'

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }
  return (
    <div>
      <div className="hero  min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={team1}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="max-w-sm w-64 border-[#123458]  border-l-6 border-b-6  rounded-br-[40px] rounded-t-[40px] shadow-2xl"
            />
            <motion.img
              src={team2}
              animate={{ x: [150, 200, 150] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm h-32  w-50 border-[#123458]  border-l-6 border-b-6  rounded-br-[30px] rounded-t-[30px] shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <BlurText
              text="Latest jobs for you!"
              delay={160}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl font-bold"
            />
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
