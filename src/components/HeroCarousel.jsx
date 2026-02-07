import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const slides = [
    {
        id: 1,
        image: '/images/hero_youth.png',
        title: 'Empowering Youth for a Brighter Future',
        description: 'Providing skills, guidance, and opportunities to help young people realize their full potential and become leaders of tomorrow.',
        ctaText: 'Explore Programs',
        ctaLink: '/programs/youth-development'
    },
    {
        id: 2,
        image: '/images/hero_women.png',
        title: 'Strengthening Women, Transforming Communities',
        description: 'Creating pathways for economic independence and social empowerment through vocational training and self-help groups.',
        ctaText: 'Learn More',
        ctaLink: '/programs/women-empowerment'
    },
    {
        id: 3,
        image: '/images/hero_health.png',
        title: 'Accessible Healthcare for All',
        description: 'Bringing medical camps, health awareness, and essential care to underserved rural communities.',
        ctaText: 'Our Impact',
        ctaLink: '/programs/health-medical-camps'
    }
];

function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000); // Change slide every 5 seconds
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentSlide(index);
    };

    return (
        <div className="hero-carousel" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="slide-content">
                            <h1 className="slide-title">{slide.title}</h1>
                            <p className="slide-description">{slide.description}</p>
                            <Link to={slide.ctaLink} className="btn-hero">
                                {slide.ctaText} <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeft size={32} />
            </button>
            <button className="carousel-control next" onClick={nextSlide} aria-label="Next Slide">
                <ChevronRight size={32} />
            </button>

            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroCarousel;
