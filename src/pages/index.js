import React,{ useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from '../../public/logoskilswop.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Home = () => {

const [checked,setChecked] = useState(false)
const [autorizar,setAutorizar] = useState(false)
const router = useRouter();


const aceptarPoliticas = () => {
setAutorizar(true)
console.log(checked)
}

const handlerChecked = (e)=>{

   const value = e.target.value
   setChecked(true)
   console.log(value)
}

const handlerAccept = ()=>{
  if(checked){
    router.push('/Home')
  }else 
  {
    toast('❌ You must first accept the privacy policy!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
}




  return (
    <div className='w-full h-400 relative'>
      

     
     <video 
     className='w-full absolute -mt-32'
     autoPlay muted loop id="bg-video">
      <source src="/backgroundVideo.webm" type="video/mp4" />
    </video>
  <div className='absolute w-full h-400 bg-secondary opacity-60 z-10 '>
       
  </div>
  <div className='w-400 h-auto z-30 absolute flex flex-col ml-96 mt-20'>
       <Image className='ml-44' src={logo} alt="logo" width={300} height={300}/>
       <button
       onClick={aceptarPoliticas}
       className='bg-secondary p-4 text-white font-bold uppercase'
       >Enter</button>
   </div>
   {autorizar && 
   <div className='w-300 h-auto bg-white absolute z-50 ml-300 mt-20 p-2 flex flex-col modal rounded-md transition-all duration-300'>
       <p className='font-monserratR '>Please confirm your age and accept our terms of use and privacy policy before proceeding.</p>

      <p className='font-monserratR '> - You must be at least 18 years old to use our service..</p>
<p className='font-monserratR '> - By using our service, you agree to our terms of use and privacy policy..</p>

<p className='font-monserratR '> - Complete the form below to confirm your age and accept our terms of use and privacy policy..</p>
<div className='w-full h-auto flex mt-2'>
<input
onChange={handlerChecked}
checked={checked}
className="mt-5 mr-2" type="checkbox" id='mi-checkbox'/>
<label className='font-monserratR ' htmlFor="mi-checkbox">I confirm that I am at least 18 years old and accept the terms of use and privacy policy..
</label>
</div>
<button
onClick={handlerAccept}
className='bg-secondary p-4 text-white font-bold uppercase mt-3'>accept terms and conditions</button>

    </div> }
<ToastContainer/>

    </div>
  )
}

export default Home
