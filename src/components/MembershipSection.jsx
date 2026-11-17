import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { PR_DATA } from '../data/gymData';

function AnimatedPrice({ amount, reducedMotion }) {
  const [val, setVal] = useState(amount);

  useEffect(() => {
    if (reducedMotion) {
      setVal(amount);
      return;
    }
    const obj = { v: val };
    const tween = gsap.to(obj, {
      v: amount,
      duration: 0.35,
      ease: 'power2.out',
      onUpdate: () => setVal(Math.round(obj.v))
    });
    return () => tween.kill();
  }, [amount, reducedMotion]);

  return <>{val.toLocaleString('en-IN')}</>;
}

export default function MembershipSection({ onSelectPlan, reducedMotion }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="section section--charcoal membership" id="membership" data-nav-section>
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow eyebrow--on-dark">Membership Plans</span>
          <h2 className="section-headline section-headline--light">Simple, Flexible Memberships.</h2>
          <p className="section-lead section-lead--on-dark section-lead--center">
            Choose the training tier that fits your goals. Sample INR demonstration pricing shown below.
          </p>

          <div className="billing-toggle-bar" role="group" aria-label="Billing interval toggle">
            <span className={!yearly ? 'is-active' : ''}>Monthly</span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle annual pricing"
              className="billing-switch"
              onClick={() => setYearly((p) => !p)}
            >
              <span className="billing-switch__thumb" />
            </button>
            <span className={yearly ? 'is-active' : ''}>
              Yearly <span className="billing-save">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {PR_DATA.pricing.map((tier) => (
            <article className={`tier-card ${tier.popular ? 'tier-card--popular' : ''}`} key={tier.id}>
              {tier.popular && <span className="tier-card__badge">MOST POPULAR</span>}

              <div>
                <span className="tier-card__sub">{tier.subtitle}</span>
                <h3 className="tier-card__name">{tier.id}</h3>
              </div>

              <div className="tier-card__price-row">
                <span className="tier-card__currency">₹</span>
                <span className="tier-card__amount">
                  <AnimatedPrice amount={yearly ? tier.yearly : tier.monthly} reducedMotion={reducedMotion} />
                </span>
                <span className="tier-card__period">/ month</span>
              </div>

              <ul className="tier-card__features">
                {tier.features.map((feat) => (
                  <li key={feat}>
                    <Check size={16} className="tier-card__check" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn ${tier.popular ? 'btn--primary' : 'btn--outline-dark'} btn--lg btn--full`}
                onClick={() => onSelectPlan?.(`${tier.id} (${yearly ? 'Yearly' : 'Monthly'})`)}
              >
                JOIN NOW
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
