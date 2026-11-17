import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { PR_DATA } from '../data/gymData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutBenefitsSection({ reducedMotion }) {
  const secRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from('.about-photo-box', {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: '.about-section__media',
          start: 'top 82%',
          once: true
        }
      });
    }, secRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  const { eyebrow, headline, description, imageMain, imageAccent, benefits } = PR_DATA.about;

  return (
    <section className="section section--ivory about-section" id="about" data-nav-section ref={secRef}>
      <div className="container about-section__grid">
        <div className="about-section__media">
          <div className="about-photo-box about-photo-box--main">
            <img
              src={imageMain}
              alt="Clean commercial gym interior with free weights and strength equipment"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="about-photo-box about-photo-box--inset">
            <img
              src={imageAccent}
              alt="Coach supporting athlete form during training"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        <div className="about-section__content">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-headline">{headline}</h2>
          <p className="section-lead">{description}</p>

          <div className="benefits-grid">
            {benefits.map((b) => (
              <article className="benefit-card" key={b.title}>
                <span className="benefit-card__check" aria-hidden="true">
                  <Check size={15} />
                </span>
                <div>
                  <h3 className="benefit-card__title">{b.title}</h3>
                  <p className="benefit-card__desc">{b.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
