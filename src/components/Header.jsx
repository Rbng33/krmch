import { useState } from 'react'
import logo from "../../public/nobglogo.png"

const links = [
  { label: 'ACCUEIL', href: '#', active: true },
  { label: 'MENU', href: '#menu' },
  { label: 'GALERIE', href: '#galerie' },
  { label: 'AVIS', href: '#avis' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-purple-deep/85 backdrop-blur-md">
      <nav className="max-w-[1450px] mx-auto flex items-center justify-between px-16 py-6">
        

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

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-gold text-purple-deep px-8 py-3 rounded-full font-extrabold tracking-wide text-sm flex-shrink-0"
        >
          COMMANDER
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 list-none">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-semibold ${link.active ? 'text-gold' : 'text-muted'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="inline-block bg-gold text-purple-deep px-5 py-2.5 rounded-full font-extrabold text-sm">
              COMMANDER
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}