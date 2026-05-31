import { useState } from 'react'
import { MapPin, Phone, Mail, CheckCircle2, Send, Clock, ShieldAlert } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true)
      // Simulate API lag
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitSuccess(false), 5000)
      }, 1500)
    }
  }

  const offices = [
    {
      city: 'Qatar Head Office',
      name: 'Alif Info Tech Services WLL',
      address: 'Office 12, Floor 4, B-Ring Road, Doha, Qatar',
      phone: '+974 6682 3215',
      email: 'info@alifinfotech.net',
      hours: 'Sunday – Thursday: 8:00 AM – 5:00 PM (AST)'
    },
    {
      city: 'India Development Hub',
      name: 'Alif Info Tech Lab Pvt Ltd',
      address: 'Phase II, Hitech City, Madhapur, Hyderabad, TS, 500081, India',
      phone: '+91 40 0000 0000',
      email: 'india@alifinfotech.net',
      hours: 'Monday – Friday: 9:00 AM – 6:00 PM (IST)'
    }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background spotlights */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] right-[15%] w-[300px] h-[300px] bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Partner With Us
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-offwhite">
            Connect With Our Architects
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            Have a project in mind, need local developer support in Doha, or want to audit a partner ERP database configuration? Fill out our form and we will respond shortly.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Form */}
          <div className="p-8 md:p-12 rounded bg-brand-charcoal-light border border-brand-offwhite/5 glow-gold space-y-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-gold/2 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-serif text-brand-offwhite">Submit an RFP / Inquiry</h2>
              <p className="text-xs text-brand-gray">Our solution architects review all forms and dispatch estimates under 12 hours.</p>
            </div>

            {submitSuccess ? (
              <div className="p-8 bg-brand-charcoal border border-brand-gold/20 text-brand-gold rounded flex flex-col items-center text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-brand-gold animate-bounce" />
                <h3 className="text-lg font-serif text-brand-offwhite">Message Transmitted</h3>
                <p className="text-xs text-brand-gray max-w-sm">
                  Thank you! Your information has been securely dispatched. A senior system engineer from our team will contact you in under 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+974 6682 3215"
                      className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Project Requirements *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, tech stack, third-party ERP integration requirements, or support needs..."
                    className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-bold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-charcoal-dark border-t-transparent rounded-full animate-spin"></div>
                      Transmitting Data...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Submit Project Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Details */}
          <div className="space-y-8">
            {/* Quick Contact cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="tel:+97466823215" className="p-5 rounded bg-brand-charcoal-light border border-brand-offwhite/5 hover:border-brand-gold/20 transition-all flex items-center gap-4 cursor-pointer glow-gold">
                <div className="p-3 rounded bg-brand-charcoal text-brand-gold border border-brand-gold/10">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-brand-gray uppercase tracking-wider">Qatar Support</span>
                  <span className="text-sm font-bold text-brand-offwhite font-mono">+974 6682 3215</span>
                </div>
              </a>

              <a href="mailto:info@alifinfotech.net" className="p-5 rounded bg-brand-charcoal-light border border-brand-offwhite/5 hover:border-brand-gold/20 transition-all flex items-center gap-4 cursor-pointer glow-gold">
                <div className="p-3 rounded bg-brand-charcoal text-brand-sand border border-brand-sand/10">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-brand-gray uppercase tracking-wider">Email Inquiry</span>
                  <span className="text-sm font-bold text-brand-offwhite font-mono">info@alifinfotech.net</span>
                </div>
              </a>
            </div>

            {/* Offices List */}
            <div className="space-y-6">
              {offices.map((off, idx) => (
                <div key={idx} className="p-6 rounded bg-brand-charcoal-light border border-brand-offwhite/5 space-y-4 glow-gold">
                  <div className="border-b border-brand-offwhite/5 pb-3">
                    <h3 className="text-lg font-serif text-brand-offwhite">{off.city}</h3>
                    <span className="text-[10px] text-brand-gold font-mono uppercase tracking-wider">{off.name}</span>
                  </div>

                  <div className="space-y-2.5 text-xs text-brand-gray">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-gray/60 shrink-0 mt-0.5" />
                      <span>{off.address}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-brand-gray/60 shrink-0 mt-0.5" />
                      <span>{off.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Alert banner */}
            <div className="p-5 rounded bg-brand-charcoal-light border border-brand-gold/15 flex gap-4 glow-gold">
              <ShieldAlert className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-brand-offwhite">SLA Support Agreements</h4>
                <p className="text-[10px] text-brand-gray leading-relaxed">
                  Registered enterprise partners utilizing Alif AMS, WMS or custom integrations bypass the general queue and should call their dedicated technical hotlines for instant assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
