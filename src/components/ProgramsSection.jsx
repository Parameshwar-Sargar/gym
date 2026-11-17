import { ArrowRight } from 'lucide-react';
import { PR_DATA } from '../data/gymData';

export default function ProgramsSection({ onExploreProgram, onJoinClick }) {
  return (
    <section className="section section--white programs" id="programs" data-nav-section>
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">Fitness Programs</span>
            <h2 className="section-headline">Training Tracks for Every Goal.</h2>
          </div>
          <a
            href="#contact"
            className="btn btn--primary btn--sm"
            onClick={(e) => {
              e.preventDefault();
              onJoinClick?.();
            }}
          >
            JOIN NOW
          </a>
        </div>

        <div className="programs-grid">
          {PR_DATA.programs.map((prog) => (
            <article className="program-card" key={prog.id}>
              <div className="program-card__media">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="program-card__img"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="program-card__cat">{prog.category}</span>
              </div>

              <div className="program-card__body">
                <h3 className="program-card__title">{prog.title}</h3>
                <p className="program-card__desc">{prog.desc}</p>
                <button
                  type="button"
                  className="program-card__link"
                  onClick={() => onExploreProgram?.(prog)}
                >
                  <span>Explore Program</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
