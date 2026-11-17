import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { PR_DATA } from '../data/gymData';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onNavigate, reducedMotion }) {
  const heroRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero__reveal', {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.09,
        ease: 'power3.out'
      });

      gsap.to(photoRef.current, {
        scale: 1.06,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section className="hero" id="hero" data-nav-section ref={heroRef}>
      <div className="container hero__grid">
        {/* Left Editorial Column */}
        <div className="hero__content">
          <span className="eyebrow hero__reveal">{PR_DATA.hero.eyebrow}</span>
          <h1 className="hero__headline hero__reveal">{PR_DATA.hero.headline}</h1>
          <p className="hero__desc hero__reveal">{PR_DATA.hero.description}</p>

          <div className="hero__ctas hero__reveal">
            <a
              href="#contact"
              className="btn btn--primary btn--lg"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('#contact');
              }}
            >
              <span>{PR_DATA.hero.primaryCta}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href="#programs"
              className="btn btn--outline-dark btn--lg"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('#programs');
              }}
            >
              <span>{PR_DATA.hero.secondaryCta}</span>
            </a>
          </div>

          <div className="hero__highlights hero__reveal">
            {PR_DATA.hero.highlights.map((item) => (
              <div className="hero-stat" key={item.label}>
                <strong className="hero-stat__val">{item.value}</strong>
                <span className="hero-stat__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Athletic Photography Column */}
        <div className="hero__visual">
          <div className="hero__photo-frame">
            <img
              ref={photoRef}
              src={PR_DATA.hero.image}
              alt={PR_DATA.hero.imageAlt}
              className="hero__photo"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
