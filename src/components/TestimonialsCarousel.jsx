import { useState, useEffect, useRef } from 'react'
import bgImage from "../../public/section.svg"
import avatar1 from "../../public/av1.png"
import avatar2 from "../../public/av2.png"
import avatar3 from "../../public/av3.png"
import { testimonials, gallery } from '../data/menu'



export default function TestimonialsCarousel() {
  const scrollRef = useRef(null)
 
  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 16 : 300
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }
  

  return (
    <section
      className="relative mt-4 w-full bg-purple-deep bg-cover bg-center aspect-[16/9]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Scroller dropped into the blank space below the cards, 3 photos visible at a time */}
      <div className="absolute mt-28 left-1/2 -translate-x-1/2 top-[38%] w-[85%] ">
        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-16 w-10 h-10 rounded-full bg-purple-card ring-1 ring-white/10 items-center justify-center z-10 text-lg text-white"
            aria-label="Previous"
          >
            ‹
          </button>
 
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="flex-none w-[calc((100%-2rem)/3)] snap-start rounded-2xl aspect-[4/3] object-cover shadow-xl ring-1 ring-white/10"
              />
            ))}
          </div>
 
          <button
            onClick={() => scroll(1)}
            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-16 w-10 h-10 rounded-full bg-purple-card ring-1 ring-white/10 items-center justify-center z-10 text-lg text-white"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
      

    
    </section>
  )
}