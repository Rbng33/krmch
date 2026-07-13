import footerBg from "../../public/footer.svg"

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/krmch.d/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61574725937527',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C15.9 3.1 14.9 3 13.7 3c-2.6 0-4.2 1.5-4.2 4.4v2.4H6.7v3.2h2.8V21h4z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@krmch.dz',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16.5 3c.4 2.2 1.8 3.7 4 3.9v2.7c-1.4.1-2.7-.3-4-1.1v6.2c0 3.3-2.4 5.8-5.7 5.8-3.2 0-5.7-2.5-5.7-5.7S7.6 9.1 10.9 9.1c.3 0 .6 0 .9.1v2.8c-.3-.1-.6-.2-.9-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9c1.6 0 3-1.2 3-2.9V3h2.6z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/213777204007',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.4A10 10 0 1012 2zm0 1.8a8.2 8.2 0 11-4.5 15.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0112 3.8zm-3.3 4.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.1 1.8 2.8 4.3 3.8 2.1.9 2.5.7 3 .6.4 0 1.4-.6 1.6-1.1.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3-.3-.2-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-purple bg-cover bg-center min-h-[280px] md:aspect-[1280/217] mt-4"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Real social links, placed under the logo/tagline baked into the background */}
      <div className="absolute mt-4 left-[7%] bottom-[10%] md:bottom-[9%] flex gap-3">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="w-8 h-8 rounded-full bg-purple-card text-white flex items-center justify-center hover:bg-gold hover:text-purple-deep transition-colors"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Google Maps embed, pinned to the full right of the strip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-[260px] h-[160px] md:w-[300px] md:h-[180px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10">
        <iframe
          title="KRMCH location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.152532312143!2d3.0893309756412637!3d36.71889777227035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad005e8b04a7%3A0x1bdb6a1bf1dd07d9!2zS1JNQ0gg2YPYsdmF2LQ!5e0!3m2!1sfr!2sus!4v1783969071368!5m2!1sfr!2sus"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </footer>
  )
}

export function FooterCopyright() {
  return (
    <div className="bg-purple text-center py-4 text-muted text-xs border-t border-white/5">
      © 2026 KRMCH. Tous droits réservés.
    </div>
  )
}