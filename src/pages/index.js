import Head from 'next/head';
import { Inter } from 'next/font/google';
import Landing from '../components/Home';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [cond, setCond] = useState(false); //todo

  useEffect(() => {
  setTimeout(() => {
    setCond(true);
  }, 50)

  return () => {
    
  }
}, [])
  return (
    <>
      <Head>
        <title>R2T</title>
      </Head>
      <div className='h-screen bg-white dark:bg-black overflow-y-scroll flex flex-col snap-y snap-mandatory relative'>
        {cond && <Header />}
        
        <Landing />
        <div className='h-screen flex snap-start'>
          <div className='h-screen w-[50%] bg-red-100'></div>
          <div className='h-screen w-[50%] bg-red-500'></div>
        </div>
      </div>
      
      
    </>
  )
}
