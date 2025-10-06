"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import localFont from 'next/font/local';

const wg2 = localFont({
    src: [
    {
        path: '../../public/KZ_Andantino_script_kz.ttf',
        weight: '400',
        style: 'normal',
    },
    ],
    variable: '--font-wg',
})

function CountDown() {

    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : number;
    };

    const calculateTimeLeft = () => {
        const difference = + new Date('2025-11-22T17:00:00') - + new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            weeks: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24 * 7))),
            days: formatNumber(Math.floor((difference / (1000 * 60 * 60 * 24)) % 7)),
            hours:  formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes:  formatNumber(Math.floor((difference / 1000 / 60) % 60)),
            seconds:  formatNumber(Math.floor((difference / 1000) % 60)),
          };
        }
    
        return timeLeft;
    };


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      
        return () => clearTimeout(timer);
    }, [timeLeft]);
      
    
    const { weeks, days, hours, minutes, seconds } = timeLeft;
    
    
    return (
        <motion.div whileInView={{ opacity: 1, x: 0, }} initial={{ opacity: 0, x: -200 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="grid grid-cols-5 gap-x-4 font-extrabold sm:text-lg font-['wg'] p-3 rounded-lg  bottom-40 text-gray-800">
            <div className={`${wg2.className} col-span-1 text-center text-4xl`}>
                {weeks}
            </div>
            <div className={`${wg2.className} col-span-1 text-center text-4xl`}>
                {days}
            </div>
            <div className={`${wg2.className} col-span-1 text-center text-4xl`}>
                {hours}
            </div>
            <div className={`${wg2.className} col-span-1 text-center text-4xl`}>
                {minutes}
            </div>
            <div className={`${wg2.className} col-span-1 text-center text-4xl`}>
                {seconds}
            </div>
            <div className={`${wg2.className} text-3xl col-span-1 text-center`}>
                {weeks === 1 ? 'aпта' : 'aпта'}
            </div>
            <div className={`${wg2.className} text-3xl col-span-1 text-center`}>
                {days === 1 ? 'күн' : 'күн'}
            </div>
            <div className={`${wg2.className} text-3xl col-span-1 text-center`}>
                {hours === 1 ? 'сағат' : 'сағат'}
            </div>
            <div className={`${wg2.className} text-3xl col-span-1 text-center`}>
                {minutes === 1 ? 'минута' : 'минут'}
            </div>
            <div className={`${wg2.className} text-3xl col-span-1 text-center`}>
                {seconds === 1 ? 'секунда' : 'секунд'}
            </div>
        </motion.div>
    );
}

export default CountDown;
