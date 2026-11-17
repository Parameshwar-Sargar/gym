import { PR_DATA } from '../data/gymData';

export default function EquipmentSection() {
  const { eyebrow, headline, description, items } = PR_DATA.facility;

  return (
    <section className="section section--charcoal facility" id="facility" data-nav-section>
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-headline section-headline--light">{headline}</h2>
          </div>
          <p className="section-lead section-lead--on-dark">{description}</p>
        </div>

        <div className="facility-grid">
          {items.map((item) => (
            <article className="facility-card" key={item.title}>
              <div className="facility-card__media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="facility-card__img"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="facility-card__scrim" />
              </div>
              <div className="facility-card__body">
                <h3 className="facility-card__title">{item.title}</h3>
                <p className="facility-card__detail">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
