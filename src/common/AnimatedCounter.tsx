"use client"

import {motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  start: boolean;
}

export default function AnimatedConter({
    value,
    duration = 1.5,
    start
}: AnimatedCounterProps){
    const count = useMotionValue(0);

    const rounded = useTransform(count, (latest)=>
      Math.floor(latest).toLocaleString()
    );

    useEffect(() => {
        if (start) {
          count.set(0); 
          animate(count, value, {
            duration,
            ease: "easeOut",
          });
        }
      }, [start, value, duration, count]);

    return (
        <motion.span className='text-5xl font-bold text-white'>
            {start ? rounded : value}
        </motion.span>
    );
}