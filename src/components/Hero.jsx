import { useState } from 'react'
import heroImage from "../../public/hero.svg"

const links = [
  { label: 'ACCUEIL', href: '#', active: true },
  { label: 'MENU', href: '#menu' },
  { label: 'GALERIE', href: '#galerie' },
  { label: 'AVIS', href: '#avis' },
  { label: 'CONTACT', href: '#contact' },
]

const avatars = [
  "../../public/av1.png",
  "../../public/av2.png",
  "../../public/av3.png",
  "../../public/av4.png",
];

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <section
      className="relative w-full bg-purple-deep bg-cover bg-center aspect-[2/1] md:aspect-[2.2/1]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Navbar sits directly on top of the hero image, no background of its own */}
      <header className="flex   items-center top-0 inset-x-0 z-20">
        <nav className="max-w-[1450px]  mx-auto flex items-center justify-between px-16 py-6">
          <ul className="hidden md:flex items-center gap-10 list-none">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-[15px] font-bold tracking-wide pb-1.5 border-b ${
                    link.active
                      ? 'text-gold border-gold'
                      : 'text-white border-transparent hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

       

          <button
            className="md:hidden flex flex-col gap-1.5 ml-auto"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-white rounded"></span>
            <span className="w-6 h-0.5 bg-white rounded"></span>
            <span className="w-6 h-0.5 bg-white rounded"></span>
          </button>
        </nav>

        
      </header>

      
      <div
        dir="rtl"
        className="absolute inset-x-0 bottom-0 max-w-6xl mx-32 px-6 pb-8 md:pb-14 flex flex-col items-center md:items-end gap-6"
      >
        <div className="flex gap-3.5 justify-center md:justify-end">
          <a
            href="#menu"
            className="px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-br from-gold-light to-gold text-purple-deep shadow-lg shadow-gold/25 hover:-translate-y-0.5 transition-transform"
          >
            VOIR LE MENU →
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full font-bold text-sm border bg-violet-900 border-white/50 text-white hover:-translate-y-0.5 transition-transform"
          >
            COMMANDER MAINTENANT
          </a>
        </div>
      </div>

    </section>
  )
}