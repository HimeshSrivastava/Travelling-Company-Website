"use client"

// import { useState } from 'react'
import AnimatedConter from '@/src/components/common/AnimatedCounter'

export default function StatItem({ item, hovered }: any) {
    const Icon = item.icon;

    return (
        <div
         className='flex flex-col items-center cursor-pointer'
         >
        {/* Icon     */}
        <div className='w-20 h-20 rounded-full border border-white/40 flex items-center justify-center mb-6'>
        <Icon className="w-8 h-8 text-white" />
        </div>

        {/* animated number */}
        <h3 className="text-2xl font-bold mb-2">
         <AnimatedConter
          value={Number(item.value)}
          start={hovered}
          />
        </h3>

        {/* label */}
        <p className='text-sm tracking-wide text-white/80'>
         {item.label}
        </p>
        </div>
    );
}