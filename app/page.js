'use client'
import dynamic from 'next/dynamic';
import { YMaps, Map, Button, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import localFont from 'next/font/local';
import { motion } from 'framer-motion'
import Confetti from "react-confetti";
import Image from 'next/image';


const wg = localFont({
  src: [
    {
      path: '../public/cirpnova-d.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-wg',
})


const wg2 = localFont({
  src: [
    {
      path: '../public/KZ_Andantino_script_kz.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-wg',
})

const CountDown = dynamic(() => import('./components/CountDown'), {
  ssr: false
})

export default function Home() {

  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [confetti, setConfetti] = useState(false)
  const [play, setPlay] = useState(false)

  const playMusic = () => {
    setPlay(!play);
    if (play) {
      document.getElementById('audio').pause();
    } else {
      document.getElementById('audio').play();
    }
  }

  const Vote = async () => {
    try {
      setConfetti(true)

      const response = await fetch('https://sheetdb.io/api/v1/gci84i6xtazwh ', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'ФИО': name,
              'Статус': status,
            }
          ]
        })
      });
      setTimeout(() => setConfetti(false), 5000);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className='font-[wg] text-center overflow-hidden'>
      <audio src="./music.mp3" autoPlay loop id='audio'></audio>
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}   className=' absolute top-[450px] left-[5%] z-10 ml-8'>
      <div className='flex space-x-2 justify-center items-center '>
        <img src="/play.png" alt="play" className={` h-[65px] w-[65px] mix-blend-luminosity absolute left-[10%] bg-white/70 hover:bg-white/90 rounded-full  ${play && 'animate-[spin_30s_linear_infinite]'}`}/>
        { play ? 
        <button onClick={playMusic} className={`p-2`}>
          <img src="/music.png" alt="music" className=' h-[50px] w-[50px] mix-blend-luminosity'/>
        </button>
        :
        <button onClick={playMusic} className={`p-2 `}>
          <img src="/music.png" alt="music" className=' h-[50px] w-[50px] mix-blend-luminosity'/>
        </button>
        }
      </div>
    </motion.div>


      <main className='flex relative flex-col items-center justify-between  overflow-x-hidden overflow-y-visible h-[850px]'>
        <Image src="/flower-1.png" alt="flower-1" width={400} height={400} className=' absolute -top-28 -left-36 z-30 animate-rotateWiggle' />
        <Image src="/flower-2.png" alt="flower-2" width={1100} height={1100} className=' absolute -top-44 -right-32 z-20 scale-[1.7]' />
        <Image src="/flower-3.png" alt="flower-3" width={400} height={400} className=' absolute top-[300px] -right-64  z-20 ' />
        <Image src="/flower-4.png" alt="flower-4" width={400} height={400} className=' absolute top-[400px] left-24  z-10 animate-rotateWiggle' />
        <Image src="/flower-5.png" alt="flower-5" width={400} height={400} className=' absolute top-[500px] -left-52  z-0' />
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200}} transition={{ duration: 1 }} className=" absolute top-60 left-[10%] w-[250px] h-[180px] text-grey-100 p-3 rounded-lg text-center flex flex-col justify-center items-center text-gray-600">
          <i><p className={`${wg2.className} text-[64px]  text-start w-full`}>Ерлан</p>
          <p className={`${wg.className} text-6xl `}>&</p>
          <p className={`${wg2.className} text-[64px]  text-end w-full`}>Нұргүл</p></i> 
        </motion.div>
        <br />
        <br />

      </main>


      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }}  transition={{ duration: 1 }} className='w-[80%] font-bold mx-auto text-center my-[20px] relative'>
      <p className={`${wg.className} font-bold text-8xl`}>22.11.2025</p>
      <p className={`${wg.className} font-bold text-6xl`}> 17:00 | Сенбі</p>
      </motion.div>
      
      <div className=' w-full flex flex-col justify-center items-center '>
        <CountDown />
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className=' text-center z-20 p-3 rounded-lg text-2xl'>
          <i><h1 className='text-4xl'>Құрметті</h1>
          <p className=' text-lg font-light'>
            ағайын-туыс, бауырлар, нағашы-жиен, бөлелер, құда-жекжат, дос-жарандар, көршілер мен әріптестер! <br />
            Сіз(дер)ді балаларымыз</p>
          </i>
        </motion.div>
      </div>


      <div className='flex flex-col font-bold  w-[80%] mx-auto mt-4 justify-between text-black h-[110%]'>


      </div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} className='w-[80%] font-bold mx-auto text-center relative mb-[170px] border-[#96825f] border-[1px] '>
        <i>
          <p className={`text-3xl mt-6 m-0 absolute top-0 right-10`}>Eрлан мен Нұргүл</p>
          <p className=' absolute top-16 text-lg font-light'>Отау құру тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!
          </p>
        </i>
      </motion.div>


      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }}  transition={{ duration: 1 }} className='w-[80%] font-bold mx-auto text-center relative border-[#96825f] border-[1px] '>
      </motion.div>


      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className=' italic font-extrabold flex flex-col w-[80%] mx-auto p-4 rounded-lg relative overflow-hidden right-0'>
        {confetti &&
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className=' absolute top-0'>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          </motion.div>
        }
        <p className=' text-xl py-4'>Тойға қатысуыңызды <br /> растауыңызды сұраймыз!</p>
        <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" placeholder="Аты жөніңізді жазыңыз" required onChange={(e) => setName(e.target.value)} />
        <div className=' flex flex-col gap-6 justify-between'>
          <div className='flex items-center'>
            <input id='default-radio-1' type='radio' value='ИӘ, КЕЛЕМІН' name='default-radio' className='w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300' onChange={(e) => setStatus(e.target.value)} />
            <label for='default-radio-1' className='ms-2 text-xs font-extrabold '>ИӘ, КЕЛЕМІН</label>
          </div>
          <div className='flex items-center'>
            <input id='default-radio-1' type='radio' value='ИӘ, КЕЛЕМІН' name='default-radio' className='w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300' onChange={(e) => setStatus(e.target.value)} />
            <label for='default-radio-1' className='ms-2 text-xs font-extrabold '>ИӘ, ЖОЛДАСЫММЕН КЕЛЕМІН</label>
          </div>
          <div className='flex items-center'>
            <input id='default-radio-2' type='radio' value='ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН' name='default-radio' className='w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300' onChange={(e) => setStatus(e.target.value)} />
            <label for='default-radio-2' className='ms-2 text-xs font-extrabold '>ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН</label>
          </div>
        </div>
        <button type='submit' className=' mt-8 text-white bg-[#96825f] hover:bg-[#79633d] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 my-2 dark:bg-[#96825f] dark:hover:bg-[#96825f] focus:outline-none dark:focus:ring-[#96825f] text-xl' onClick={Vote}>Растау</button>
      </motion.div>


      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className=' flex flex-col w-[80%] mx-auto mb-[100px] ] p-4 rounded-lg relative overflow-hidden right-0 justify-center items-center text-lg gap-3 '>
        <img src="/favicon.png" alt="2gis" className=' h-[100px] w-[100px] mt-12' onClick={(e) => {
          window.location.href = 'https://go.2gis.com/jQ3S9'
        }} />
        <p className=' text-4xl font-extrabold'>Астана қаласы</p>
        <p className=' text-2xl font-extrabold'>"Шығыс жұлдызы" мейрамханасы</p>
        <p className=' text-2xl font-extrabold'>Темирбек Жургенов, 18/2</p>
      </motion.div>

      <YMaps query={{ lang: 'ru_RU', apikey: '536168cc-8dbb-4923-a06f-9a6bd5a9cf15' }}>
        <Map defaultState={{ center: [51.114323, 71.501745], zoom: 19 }} width='100%' height='400px' >
          <Placemark geometry={[51.114323, 71.501745]} options={{ fillColor: '#f00' }} />
          <Button
            options={{ maxWidth: 128 }}
            data={{ content: 'Заказать Такси' }}
            defaultState={{ selected: true }}
            onClick={(e) => {
              window.location.href = 'https://3.redirect.appmetrica.yandex.com/route?utm_source=yamaps&utm_medium=api&appmetrica_tracking_id=241755468559577482&ref=2334695&domain=ru&lang=ru&start-lat=&start-lon=&end-lat=51.114323&end-lon=71.501745'
            }}
          />
          <Button
            options={{ maxWidth: 400, }}
            data={{ content: 'Показать в 2ГИС' }}
            defaultState={{ selected: true }}
            onClick={(e) => {
              window.location.href = 'https://go.2gis.com/jQ3S9'
            }}
          />
        </Map>
      </YMaps>
    </div>

  );
}
