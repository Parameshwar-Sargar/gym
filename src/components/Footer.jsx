import { Dumbbell, Instagram, Linkedin, Youtube } from 'lucide-react';
import { PR_DATA } from '../data/gymData';

export default function Footer({ onNavigate, onOpenLegal }) {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a
              href="#hero"
              className="brand-lockup brand-lockup--footer"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('#hero');
              }}
            >
              <span className="brand-lockup__icon" aria-hidden="true">
                <Dumbbell size={18} />
              </span>
              <span className="brand-lockup__text">{PR_DATA.brand.name}</span>
            </a>
            <p className="footer__tagline">{PR_DATA.brand.tagline}</p>
            <div className="footer__socials">
              <a href="#footer" className="footer__social-link" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#footer" className="footer__social-link" aria-label="YouTube">
                <Youtube size={16} />
              </a>
              <a href="#footer" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer__heading">Club</h3>
            <ul className="footer__links">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate?.('#about'); }}>About &amp; Benefits</a></li>
              <li><a href="#programs" onClick={(e) => { e.preventDefault(); onNavigate?.('#programs'); }}>Fitness Programs</a></li>
              <li><a href="#facility" onClick={(e) => { e.preventDefault(); onNavigate?.('#facility'); }}>Equipment &amp; Facility</a></li>
              <li><a href="#nutrition" onClick={(e) => { e.preventDefault(); onNavigate?.('#nutrition'); }}>Nutrition</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Membership</h3>
            <ul className="footer__links">
              <li><a href="#trainers" onClick={(e) => { e.preventDefault(); onNavigate?.('#trainers'); }}>Trainers</a></li>
              <li><a href="#membership" onClick={(e) => { e.preventDefault(); onNavigate?.('#membership'); }}>Pricing Plans</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate?.('#contact'); }}>Free Trial</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Visit Us</h3>
            <div className="footer__contact">
              <p>{PR_DATA.brand.address}</p>
              <p>{PR_DATA.brand.hours}</p>
              <p><a href={`mailto:${PR_DATA.brand.email}`}>{PR_DATA.brand.email}</a></p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 {PR_DATA.brand.name}. Demo Showcase.</span>
          <div className="footer__legal">
            <button type="button" onClick={() => onOpenLegal?.('privacy')}>Privacy Policy</button>
            <button type="button" onClick={() => onOpenLegal?.('terms')}>Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
