import { PR_DATA } from '../data/gymData';

export default function NutritionSection() {
  const { eyebrow, headline, description, foods, pillars } = PR_DATA.nutrition;

  return (
    <section className="section section--ivory nutrition" id="nutrition" data-nav-section>
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-headline">{headline}</h2>
          </div>
          <p className="section-lead">{description}</p>
        </div>

        <div className="nutrition-grid">
          {foods.map((item) => (
            <article className="nutrition-card" key={item.name}>
              <div className="nutrition-card__media">
                <img
                  src={item.image}
                  alt={item.name}
                  className="nutrition-card__img"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="nutrition-card__body">
                <h3 className="nutrition-card__title">{item.name}</h3>
                <p className="nutrition-card__detail">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="nutrition-pillars">
          {pillars.map((p) => (
            <article className="pillar-card" key={p.title}>
              <h3 className="pillar-card__title">{p.title}</h3>
              <p className="pillar-card__text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
