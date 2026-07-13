import { useRef } from 'react'
import { bestSellers } from '../data/menu'

export default function BestSellers() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-2.5 text-2xl font-extrabold mb-7">
        NOS MEILLEURES VENTES
      </div>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-16 w-10 h-10 rounded-full bg-purple-card ring-1 ring-white/10 items-center justify-center z-10 text-lg"
          aria-label="Previous"
        >
          ‹
        </button>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto no-scrollbar pb-2 scroll-smooth">
          {bestSellers.map((item, i) => (
            <div
              key={i}
              className="flex-none w-[280px] bg-purple-card rounded-2xl overflow-hidden relative ring-1 ring-white/5 hover:-translate-y-1.5 transition-transform flex flex-col"
            >
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-md z-10 tracking-wide uppercase">
                {item.tag}
              </span>
              <img src={item.img} alt={item.title} className="w-full h-[200px] object-cover" />

              <div className="flex-1 flex flex-col justify-between p-5">
                <h4 className="font-sm text-white leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-white font-extrabold text-2xl ">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-16 w-10 h-10 rounded-full bg-purple-card ring-1 ring-white/10 items-center justify-center z-10 text-lg"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  )
}