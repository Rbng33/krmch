import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import BestSellers from './components/BestSellers'
import Banners from './components/Banners'
import Testimonials from './components/TestimonialsCarousel'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#1C0736] text-white min-h-screen overflow-x-hidden">
      
      <Hero />
      <Categories />
      <BestSellers />
      <Banners />
      <Testimonials />
      <Footer />
    </div>
  )
}
