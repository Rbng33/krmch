import { categories } from '../data/menu'

export default function Categories() {
  return (
    <section className="-mt-10 relative z-20 max-w-7xl mx-auto px-6">
      <div className="rounded-[30px] bg-[#2E0B53]/95 backdrop-blur-md p-5  border border-white/10">

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.en}
              className="group rounded-3xl bg-[#2E0B53] hover:bg-[#6A2EA1] transition-all shadow-[0_20px_60px_rgba(0,0,0,.35)] duration-300 p-5 flex flex-col items-center"
            >
              <img
                src={cat.img}
                alt={cat.en}
                className="h-50 object-contain group-hover:scale-110 transition"
              />

              <h3 className=" mt-2 text-white font-bold tracking-wide">
                {cat.en}
              </h3>

              <p
                dir="rtl"
                className="text-white/90 font-semibold "
              >
                {cat.ar}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}