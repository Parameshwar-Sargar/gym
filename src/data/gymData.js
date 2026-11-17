// Centralized editable configuration for PR VISION GYM
// Note: Sample metrics, pricing (INR), trainer profiles, and address are editable demonstration placeholders.

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82`;

export const PR_DATA = {
  brand: {
    name: 'PR VISION GYM',
    tagline: 'Strength, conditioning, and recovery built for everyday athletes.',
    address: '14th Road, Bandra West, Mumbai 400050',
    email: 'hello@prvisiongym.demo',
    phone: '+91 22 0000 0000',
    hours: 'Mon – Sat: 5:30 AM – 10:30 PM | Sun: 7:00 AM – 8:00 PM'
  },

  hero: {
    eyebrow: 'Strength & Performance Club',
    headline: 'BUILD YOUR STRONGEST SELF.',
    description:
      'Train in an inspiring, well-equipped space designed for real strength, lasting physique transformation, and supportive personal coaching.',
    primaryCta: 'JOIN NOW',
    secondaryCta: 'EXPLORE PROGRAMS',
    image: u('1581009146145-b5ef050c2e1e', 1920),
    imageAlt: 'Muscular athlete performing heavy barbell curls in a well-lit gym',
    highlights: [
      { value: '6', label: 'Specialized Training Zones' },
      { value: '5:30 AM', label: 'Daily Opening Hour' },
      { value: '1-on-1', label: 'Personal Coaching Available' }
    ]
  },

  about: {
    eyebrow: 'About & Benefits',
    headline: 'A Club Built Around Real Progress.',
    description:
      'PR VISION GYM pairs commercial-grade strength equipment with attentive coaching and practical nutrition habits—giving beginners and dedicated lifters everything required to stay consistent.',
    imageMain: u('1540497077202-7c8a3999166f', 1200),
    imageAccent: u('1571019614242-c5c5dee9f50b', 900),
    benefits: [
      {
        title: 'Attentive Coaching',
        desc: 'Hands-on guidance for lifting technique, progressive overload, and injury-smart form.'
      },
      {
        title: 'Commercial Equipment',
        desc: 'Calibrated Olympic barbells, power racks, full dumbbell runs, and smooth cable stations.'
      },
      {
        title: 'Structured Programs',
        desc: 'Clear training tracks tailored to muscle building, fat loss, strength, or mobility.'
      },
      {
        title: 'Nutrition Guidance',
        desc: 'Practical, balanced whole-food habits and hydration strategies that fit busy schedules.'
      },
      {
        title: 'Clean, Spacious Floor',
        desc: 'Sanitized equipment, natural light, and smart spacing so you never feel crowded.'
      },
      {
        title: 'Flexible Memberships',
        desc: 'Transparent monthly and annual options with straightforward access across zones.'
      }
    ]
  },

  programs: [
    {
      id: 'strength',
      category: 'Strength & Bodybuilding',
      title: 'Bodybuilding & Strength',
      desc: 'Compound barbell lifts paired with targeted hypertrophy work for balanced muscle development and measurable strength.',
      image: u('1583454110551-21f2fa2afe61', 1100)
    },
    {
      id: 'muscle',
      category: 'Progressive Overload',
      title: 'Muscle Building',
      desc: 'Structured push-pull-legs and upper-lower splits engineered to add lean muscle steadily week after week.',
      image: u('1517836357463-d25dfeac3438', 1100)
    },
    {
      id: 'fatloss',
      category: 'Metabolic Conditioning',
      title: 'Fat Loss & HIIT',
      desc: 'High-energy resistance circuits and interval conditioning to boost calorie output while preserving hard-earned muscle.',
      image: u('1549060279-7e168fcee0c2', 1100)
    },
    {
      id: 'cardio',
      category: 'Stamina & Heart Health',
      title: 'Cardio & Endurance',
      desc: 'Guided endurance blocks across treadmills, rowers, and air bikes to elevate energy levels and daily stamina.',
      image: u('1538805060514-97d9cc17730c', 1100)
    },
    {
      id: 'mobility',
      category: 'Joint Longevity',
      title: 'Yoga & Mobility',
      desc: 'Controlled stretching, core stability, and breathwork to keep joints healthy and accelerate active recovery.',
      image: u('1518611012118-696072aa579a', 1100)
    },
    {
      id: 'pt',
      category: 'Tailored Coaching',
      title: 'Personal Training',
      desc: 'Dedicated one-on-one coaching, movement assessments, and customized workouts built around your goals.',
      image: u('1571019614242-c5c5dee9f50b', 1100)
    }
  ],

  facility: {
    eyebrow: 'Gym Equipment & Facility',
    headline: 'Engineered Floor. Zero Compromise.',
    description:
      'Every zone is outfitted with reliable commercial hardware—from calibrated free weights and squat racks to cardio decks and functional turf.',
    items: [
      {
        title: 'Squat Racks & Olympic Barbells',
        detail: 'Competition platforms, safety cages, and calibrated weight plates',
        image: u('1534438327276-14e5300c3a48', 1100)
      },
      {
        title: 'Dumbbell & Free Weight Deck',
        detail: 'Full dumbbell runs from 2.5 kg to 60 kg with adjustable benches',
        image: u('1540497077202-7c8a3999166f', 1100)
      },
      {
        title: 'Strength & Cable Machines',
        detail: 'Plate-loaded leg presses, bench stations, and dual-pulley towers',
        image: u('1579758629938-03607ccdbaba', 1100)
      },
      {
        title: 'Cardio & Conditioning Floor',
        detail: 'Modern treadmills, watt bikes, and endurance ergometers',
        image: u('1576678927484-cc907957088c', 1100)
      },
      {
        title: 'Functional Turf & Kettlebells',
        detail: 'Weighted sled lanes, cast kettlebells, ropes, and mobility rigs',
        image: u('1574680096145-d05b474e2155', 1100)
      },
      {
        title: 'Recovery & Stretching Lounge',
        detail: 'Quiet post-session mats, foam rollers, and mobility stations',
        image: u('1518611012118-696072aa579a', 1100)
      }
    ]
  },

  nutrition: {
    eyebrow: 'Nutrition & Fuel',
    headline: 'Fuel Your Training. Support Recovery.',
    description:
      'Training provides the stimulus; balanced nutrition provides the building blocks. Focus on nutrient-dense whole foods, steady hydration, and simple protein support.',
    foods: [
      {
        name: 'High-Protein Whole Meals',
        detail: 'Eggs, grilled chicken, fish, and lean protein staples',
        image: u('1532550907401-a500c9a57435', 900)
      },
      {
        name: 'Complex Carbs & Oats',
        detail: 'Rice, oats, and whole grains for sustained workout energy',
        image: u('1511690743698-d9d85f2fbf38', 900)
      },
      {
        name: 'Balanced Meal Prep',
        detail: 'Portioned meals combining protein, greens, fruits, and healthy fats',
        image: u('1546069901-ba9599a7e63c', 900)
      },
      {
        name: 'Whey & Recovery Essentials',
        detail: 'Convenient protein shakes, creatine, and daily hydration support',
        image: u('1593095948071-474c5cc2989d', 900)
      }
    ],
    pillars: [
      {
        title: 'Protein & Repair',
        text: 'Include quality protein sources across daily meals to support muscle recovery after resistance training.'
      },
      {
        title: 'Daily Hydration',
        text: 'Maintain steady water and electrolyte intake before, during, and after intense sessions.'
      },
      {
        title: 'Sustainable Consistency',
        text: 'Simple, enjoyable meal preparation outperforms extreme short-term dieting.'
      }
    ]
  },

  trainers: [
    {
      name: 'Arjun Mehta',
      specialty: 'Strength & Bodybuilding',
      experience: '9 Years Coaching',
      bio: 'Specializes in barbell mechanics, balanced hypertrophy splits, and sustainable strength gains.',
      image: u('1567013127542-490d757e51fc', 900)
    },
    {
      name: 'Ananya Rao',
      specialty: 'HIIT & Conditioning',
      experience: '7 Years Coaching',
      bio: 'Crafts energetic fat-loss and metabolic conditioning sessions tailored for busy schedules.',
      image: u('1594381898411-846e7d193883', 900)
    },
    {
      name: 'Kabir Sen',
      specialty: 'Functional Power & Boxing',
      experience: '11 Years Coaching',
      bio: 'Combines functional strength, footwork drills, and athletic core conditioning.',
      image: u('1583454110551-21f2fa2afe61', 900)
    },
    {
      name: 'Meera Kapoor',
      specialty: 'Yoga & Mobility',
      experience: '8 Years Coaching',
      bio: 'Guides posture alignment, joint flexibility, and active recovery for lifters of all levels.',
      image: u('1518310383802-640c2de311b2', 900)
    }
  ],

  pricing: [
    {
      id: 'STARTER',
      subtitle: 'Essential Gym Access',
      monthly: 2999,
      yearly: 2399,
      popular: false,
      features: [
        'Full access to free weights & strength machines',
        'Cardio deck & functional turf zone',
        'Locker rooms, showers & hydration station',
        '1 complimentary floor orientation'
      ]
    },
    {
      id: 'PRO',
      subtitle: 'Full Floor + Group Classes',
      monthly: 5499,
      yearly: 4399,
      popular: true,
      features: [
        'Everything in STARTER membership',
        'Unlimited Strength, HIIT, Cardio & Mobility classes',
        'Monthly fitness & movement check-in',
        'Priority class & recovery lounge booking'
      ]
    },
    {
      id: 'ELITE',
      subtitle: 'Personal Coaching Experience',
      monthly: 9999,
      yearly: 7999,
      popular: false,
      features: [
        'Everything in PRO membership',
        'Dedicated 1-on-1 personal training sessions',
        'Customized workout split & nutrition habit guide',
        'Priority coach support & progress reviews'
      ]
    }
  ]
};
