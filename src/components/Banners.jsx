const extremeIcons = [
  { icon: '🍔', label: 'طاوزة لا تقاوم' },
  { icon: '🍗', label: 'قرمشة مجنونة' },
  { icon: '🌶️', label: 'نكهات قوية' },
  { icon: '🥤', label: 'كولا باردة' },
]

export default function Banners() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Extreme banner */}
        <div className="rounded-3xl relative min-h-[280px] overflow-hidden">
          <img
            src="../../../public/broastadd.svg"
            alt="Kunafa"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Kunafa banner */}
        <div className="rounded-3xl relative min-h-[280px] overflow-hidden">
          <img
            src="../../../public/kunafadd.svg"
            alt="Kunafa"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
