import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-screen w-full'>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline // Ensures that the video plays inline on mobile without showing controls
        className='absolute top-0 left-0 z-0 w-full h-full object-cover'
      >
        <source src='/images/blackhole.webm' type='video/webm' />
        <source src='/images/blackhole.mp4' type='video/mp4' />
        <p>Your browser does not support the video format.</p>
      </video>

      {/* Hero Content */}
      <HeroContent />
    </div>
  );
};

export default Hero;
