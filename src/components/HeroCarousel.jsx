import { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    image: '/images/hero_youth.png',
    title: 'Youth Development & Empowerment',
    description: '"The youth of today are the leaders of tomorrow."',
    ctaText: 'Empower Youth',
    ctaLink: '/programs/youth-development'
  },
  {
    id: 2,
    image: '/images/hero_women.png',
    title: 'Women Empowerment & Livelihood',
    description: '"There is no tool for development more effective than the empowerment of women."',
    ctaText: 'Support Women',
    ctaLink: '/programs/women-empowerment'
  },
  {
    id: 3,
    image: '/images/hero_youth.png', // Reusing youth image
    title: 'Sports Promotion & Youth Fitness',
    description: '"Sports do not build character, they reveal it."',
    ctaText: 'Join the Game',
    ctaLink: '/programs/sports-promotion'
  },
  {
    id: 4,
    image: '/images/hero_women.png', // Reusing women image (learning context)
    title: 'Digital Technologies & Skill Development',
    description: '"Technology is best when it brings people together."',
    ctaText: 'Get Digital',
    ctaLink: '/programs/digital-skills'
  },
  {
    id: 5,
    image: '/images/hero_health.png', // Reusing health image
    title: 'Mental Health Awareness',
    description: '"Mental health is not a destination, but a process. It\'s about how you drive, not where you\'re going."',
    ctaText: 'Break the Stigma',
    ctaLink: '/programs/mental-health'
  },
  {
    id: 6,
    image: '/images/hero_health.png',
    title: 'Health Awareness & Medical Camps',
    description: '"He who has health has hope; and he who has hope has everything."',
    ctaText: 'Health for All',
    ctaLink: '/programs/health-medical-camps'
  },
  {
    id: 7,
    image: '/images/hero_health.png', // Reusing health image
    title: 'Vaccination Awareness Programs',
    description: '"Vaccines bring us closer. Prevention is better than cure."',
    ctaText: 'Stay Safe',
    ctaLink: '/programs/vaccination-programs'
  },
  {
    id: 8,
    image: '/images/hero_youth.png', // Reusing youth image (compassion context)
    title: 'Animal Welfare Programs',
    description: '"The greatness of a nation can be judged by the way its animals are treated."',
    ctaText: 'Protect Animals',
    ctaLink: '/programs/animal-welfare'
  }
];

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
          className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'
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

              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 italic font-light">
                {s.description}
              </p>

              <Link
                to={s.ctaLink}
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
                {s.ctaText} <ArrowRight size={18} />
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
