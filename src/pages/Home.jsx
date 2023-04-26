import React, { useState } from 'react'
import logo from '../../public/logoskilswop.png'
import Image from 'next/image'

const Home = () => {

const [ load,setLoad] = useState(true)



setTimeout(()=>{
    setLoad(false)
},4000)


if(load){
    return(
        <div className='w-full h-auto flex justify-center'>
     <Image className='mt-24 animationLogo' src={logo} alt="logo" width={200} height={150} />
     </div>
    )
}else{


  return (

    <div>
      <h2>Essta en home</h2>
    </div>
  )}
}

export default Home
