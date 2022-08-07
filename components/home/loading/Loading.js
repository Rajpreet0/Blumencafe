import React from 'react'
import Lottie from 'react-lottie';
import Sunflower from '../../../assets/sunflower.json';

function Loading() {
 
    //Lottie Animation Logic

    const defaultLottieOptions = {
        loop: false,
        autoplay: true,
        animationData: Sunflower,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen' style={{backgroundColor: '#FFDF9BFF'}}>
      <Lottie options={defaultLottieOptions} height={450} width={450}/>

    </div>
  )
}

export default Loading