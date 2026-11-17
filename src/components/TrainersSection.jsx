import { ArrowRight } from 'lucide-react';
import { PR_DATA } from '../data/gymData';

export default function TrainersSection({ onEnquireTrainer }) {
  return (
    <section className="section section--white trainers" id="trainers" data-nav-section>
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">Coaching Team</span>
            <h2 className="section-headline">Guided by Dedicated Trainers.</h2>
          </div>
          <p className="section-lead">
            Supportive, attentive coaches focused on safe form, structured progression, and lasting consistency.
          </p>
        </div>

        <div className="trainers-grid">
          {PR_DATA.trainers.map((tr) => (
            <article className="trainer-card" key={tr.name}>
              <div className="trainer-card__media">
                <img
                  src={tr.image}
                  alt={`Portrait of Coach ${tr.name}`}
                  className="trainer-card__img"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="trainer-card__body">
                <span className="trainer-card__spec">{tr.specialty}</span>
                <h3 className="trainer-card__name">{tr.name}</h3>
                <span className="trainer-card__exp">{tr.experience}</span>
                <p className="trainer-card__bio">{tr.bio}</p>
                <button
                  type="button"
                  className="trainer-card__btn"
                  onClick={() => onEnquireTrainer?.(tr)}
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
