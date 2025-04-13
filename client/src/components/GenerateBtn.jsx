import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'

const GenerateBtn = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler=()=>{
    if(user){ //user is logged in
      navigate('/result')
    }else{//user is not logged in it will open login form
      setShowLogin(true)
    }
  }


  return (
    <motion.div className='pb-16 text-center'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6'>
            See the magic. Try now!</h1>

        <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-3 
        rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'>
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </button>
    </motion.div>
  )
}

export default GenerateBtn