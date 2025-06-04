import { 
  HeartIcon, 
  ChartBarIcon, 
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { 
  HeartIcon as HeartSolid,
  UserIcon as UserSolid,
  ChartBarIcon as ChartSolid,
  AcademicCapIcon as BrainSolid
} from '@heroicons/react/24/solid'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const features = [
    {
      name: 'Smart Pain Tracking',
      description: 'Log your daily pain levels, symptoms, and triggers with our intuitive 30-second check-in system',
      icon: HeartSolid,
      color: 'bg-red-500'
    },
    {
      name: '50+ Targeted Exercises',
      description: 'Evidence-based exercises targeting deep cervical flexors, posture muscles, and tension release',
      icon: UserSolid,
      color: 'bg-primary'
    },
    {
      name: 'Personalized Analytics',
      description: 'Advanced insights reveal patterns, track improvement, and predict flare-ups before they happen',
      icon: ChartSolid,
      color: 'bg-purple-500'
    },
    {
      name: 'Medical-Grade Education',
      description: 'Learn from peer-reviewed research and understand the "why" behind your recovery',
      icon: BrainSolid,
      color: 'bg-blue-500'
    }
  ]

  const subscriptionTiers = [
    {
      name: 'Free Tier',
      subtitle: 'Start Your Journey',
      price: 'Free Forever',
      features: [
        '5 foundational exercises',
        '90-day pain tracking',
        'Basic educational content',
        'Simple analytics'
      ],
      perfectFor: 'Testing the waters',
      featured: false
    },
    {
      name: 'Starter',
      subtitle: 'Accelerate Your Progress',
      price: '$4.99/month',
      features: [
        '15 targeted exercises',
        'Unlimited pain tracking',
        'Posture check reminders',
        'Exercise progress tracking'
      ],
      perfectFor: 'Consistent daily users',
      featured: false
    },
    {
      name: 'Professional',
      subtitle: 'Complete Recovery Suite',
      price: '$12.99/month',
      features: [
        '50+ complete exercises',
        'Advanced analytics & trend prediction',
        'Detailed progress charts',
        'All difficulty levels',
        'Premium educational content'
      ],
      perfectFor: 'Serious about long-term health',
      featured: true
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      age: 42,
      profession: 'Software Developer',
      beforePain: 8,
      afterPain: 2,
      timeToImprovement: '3 weeks',
      quote: 'After years of neck pain from desk work, NeckCare Pro finally gave me the relief I needed. The exercises are simple but incredibly effective.',
      improvements: ['Better sleep quality', 'Increased work productivity', 'Returned to yoga practice']
    },
    {
      name: 'Michael R.',
      age: 55,
      profession: 'Accountant',
      beforePain: 7,
      afterPain: 1,
      timeToImprovement: '4 weeks',
      quote: 'The personalized analytics helped me understand my pain patterns. I can now prevent flare-ups before they happen.',
      improvements: ['Pain-free workdays', 'Better posture habits', 'Reduced medication need']
    },
    {
      name: 'Jennifer L.',
      age: 38,
      profession: 'Teacher',
      beforePain: 9,
      afterPain: 3,
      timeToImprovement: '2 weeks',
      quote: 'The educational content helped me understand why I was experiencing pain. Knowledge truly is power in recovery.',
      improvements: ['Improved sleep quality', 'Better classroom energy', 'Confidence in movement']
    }
  ]

  const researchSources = [
    'Cochrane Database of Systematic Reviews (2015)',
    'British Journal of Sports Medicine (2021)',
    'Journal of Clinical Medicine (2023)',
    'BMJ Open Sport & Exercise Medicine (2024)'
  ]

  const faqItems = [
    {
      question: 'How quickly will I see results?',
      answer: '2-4 weeks for most users who follow the recommended exercise program consistently.'
    },
    {
      question: 'Is this safe for herniated discs?',
      answer: 'Gentle options are available for various conditions. Please consult your physician before starting any exercise program.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription immediately at any time with no questions asked.'
    },
    {
      question: 'What if I\'m not tech-savvy?',
      answer: 'NeckCare Pro is designed for simplicity. The interface is intuitive and user-friendly for all ages.'
    },
    {
      question: 'Does this replace physical therapy?',
      answer: 'This app complements professional treatment but is not a replacement for physical therapy or medical care.'
    }
  ]

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Finally, Relief That Works:
                  <span className="block text-primary mt-2">Your Personal Neck Pain Solution</span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Evidence-based exercises, smart tracking, and personalized insights to eliminate chronic neck pain - backed by medical research
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    Start Your Journey to Pain-Free Living
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500 font-medium">
                  ✓ Based on 8+ peer-reviewed medical studies
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                  <img 
                    src="/Users/nick/Desktop/neck/necklandingpage/hero.png" 
                    alt="Professional person at desk with perfect posture, looking comfortable and pain-free"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                You're Not Alone in Your Neck Pain Struggle
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">80%</div>
                  <p className="text-gray-600">of desk workers experience chronic neck pain</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">×</div>
                  <p className="text-gray-600">Traditional solutions often fail because they're generic</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">✓</div>
                  <p className="text-gray-600">You need a personalized approach based on YOUR specific symptoms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet NeckCare Pro: Your Science-Backed Recovery Companion
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Exercise Library */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Every Exercise Backed by Medical Research</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Deep Cervical Flexor Strengthening (Jull et al., 2008)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Tech Neck Posture Correction (Shariat et al., 2018)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Sleep Position Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Workplace Ergonomic Routines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Progressive difficulty levels: Gentle → Moderate → Advanced</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-primary/20 rounded mb-2"></div>
                    <p className="text-sm text-gray-600">Gentle Stretches</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-accent/20 rounded mb-2"></div>
                    <p className="text-sm text-gray-600">Strengthening</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-purple-100 rounded mb-2"></div>
                    <p className="text-sm text-gray-600">Posture Training</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-green-100 rounded mb-2"></div>
                    <p className="text-sm text-gray-600">Ergonomics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Pain Level Trend</span>
                      <span className="text-sm text-green-600">↓ 65% improvement</span>
                    </div>
                    <div className="h-32 bg-white rounded-lg flex items-end justify-center p-4">
                      <div className="flex items-end space-x-2">
                        <div className="w-4 bg-red-400 h-20 rounded-t"></div>
                        <div className="w-4 bg-orange-400 h-16 rounded-t"></div>
                        <div className="w-4 bg-yellow-400 h-12 rounded-t"></div>
                        <div className="w-4 bg-green-400 h-8 rounded-t"></div>
                        <div className="w-4 bg-green-500 h-6 rounded-t"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Your 4-week journey</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">See Your Progress Like Never Before</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Pain trend analysis with predictive insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Symptom pattern recognition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Exercise effectiveness tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Posture check reminders and streaks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Tiers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Path to Recovery
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subscriptionTiers.map((tier, index) => (
                <div key={index} className={`card relative ${tier.featured ? 'ring-2 ring-primary' : ''}`}>
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{tier.subtitle}</p>
                    <div className="mt-4 mb-6">
                      <span className="text-3xl font-bold text-primary">{tier.price}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 mb-4">
                      Perfect for: <span className="font-medium">{tier.perfectFor}</span>
                    </p>
                    <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                      tier.featured 
                        ? 'bg-primary text-white hover:bg-teal-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Credibility */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Healthcare Professionals
              </h2>
              <blockquote className="text-xl text-gray-600 italic max-w-4xl mx-auto">
                "Evidence-based approach combining the latest research in cervical spine rehabilitation with intuitive technology"
              </blockquote>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchSources.map((source, index) => (
                <div key={index} className="card text-center">
                  <AcademicCapIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-sm text-gray-600 font-medium">{source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Real People, Real Results
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <UserGroupIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.profession}, {testimonial.age}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Before</span>
                      <span>After</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className={`w-3 h-3 rounded-full mr-1 ${
                            i < testimonial.beforePain ? 'bg-red-400' : 'bg-gray-200'
                          }`}></div>
                        ))}
                      </div>
                      <div className="flex">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className={`w-3 h-3 rounded-full mr-1 ${
                            i < testimonial.afterPain ? 'bg-green-400' : 'bg-gray-200'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-2">
                      Improvement in {testimonial.timeToImprovement}
                    </p>
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="space-y-1">
                    {testimonial.improvements.map((improvement, improvementIndex) => (
                      <div key={improvementIndex} className="flex items-center text-sm text-gray-600">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {improvement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                How It Works - 4 Simple Steps
              </h2>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: 1,
                    title: 'Quick Assessment',
                    description: 'Tell us about your pain patterns and symptoms in under 2 minutes',
                    icon: ClockIcon
                  },
                  {
                    step: 2,
                    title: 'Personalized Plan',
                    description: 'Get exercises tailored to your specific neck region and pain triggers',
                    icon: UserGroupIcon
                  },
                  {
                    step: 3,
                    title: 'Track & Improve',
                    description: 'Log daily progress and watch your pain levels decrease over time',
                    icon: ChartBarIcon
                  },
                  {
                    step: 4,
                    title: 'Stay Pain-Free',
                    description: 'Maintain your progress with smart reminders and ongoing insights',
                    icon: ShieldCheckIcon
                  }
                ].map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Privacy & Safety
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <ShieldCheckIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Privacy Protected</h3>
                <p className="text-sm text-gray-600">Your health data is encrypted and never shared</p>
              </div>
              <div className="text-center">
                <AcademicCapIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Medical Reviewed</h3>
                <p className="text-sm text-gray-600">Exercise protocols reviewed by licensed physical therapists</p>
              </div>
              <div className="text-center">
                <ClockIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-sm text-gray-600">Regular content updates based on latest research</p>
              </div>
              <div className="text-center">
                <HeartIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Medical Disclaimer</h3>
                <p className="text-sm text-gray-600">Clear, professional medical disclaimer provided</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Start Your Recovery Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands who have found relief with NeckCare Pro
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="btn-primary text-xl py-6 px-12">
                Download for iPhone
              </button>
              <button className="btn-secondary">
                View on App Store
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>4.8/5 stars from users</span>
              </div>
              <div>Featured by Apple Health</div>
              <div>30-day satisfaction guarantee</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
