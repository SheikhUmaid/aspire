import { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/hero_youth.png',
    title: 'Empowering Youth for a Brighter Future',
    desc: 'Providing skills, guidance, and opportunities to help young people realize their full potential.',
    link: '/programs/youth-development',
  },
  {
    image: '/images/hero_women.png',
    title: 'Strengthening Women, Transforming Communities',
    desc: 'Creating pathways for economic independence and social empowerment.',
    link: '/programs/women-empowerment',
  },
  {
    image: '/images/hero_health.png',
    title: 'Accessible Healthcare for All',
    desc: 'Medical camps and health awareness for underserved communities.',
    link: '/programs/health-medical-camps',
  },
]

export default function HeroCarousel() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => (p + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === idx ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* 🔥 STRONG GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl px-6 text-center">
              <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-6">
                {s.title}
              </h1>

              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                {s.desc}
              </p>

              <Link
                to={s.link}
                className="
                  inline-flex items-center gap-3
                  bg-[var(--green-primary)]
                  text-white
                  px-8 py-4
                  rounded-full
                  font-medium
                  text-base
                  hover:bg-[var(--green-dark)]
                  transition
                "
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* LEFT CHEVRON */}
      <button
        onClick={() => setI((i - 1 + slides.length) % slides.length)}
        className="
          absolute left-6 top-1/2 -translate-y-1/2
          z-20
          w-12 h-12
          rounded-full
          bg-black/40
          text-white
          hover:bg-black/60
          transition
          flex items-center justify-center
        "
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      {/* RIGHT CHEVRON */}
      <button
        onClick={() => setI((i + 1) % slides.length)}
        className="
          absolute right-6 top-1/2 -translate-y-1/2
          z-20
          w-12 h-12
          rounded-full
          bg-black/40
          text-white
          hover:bg-black/60
          transition
          flex items-center justify-center
        "
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  )
}
