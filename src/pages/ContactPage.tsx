import { SectionHeading } from '../components/SectionHeading';

export function ContactPage() {
  const contactMethods = [
    {
      icon: 'fa-phone',
      title: 'Phone',
      value: '+91 9931691959',
      link: 'tel:+919931691959',
      description: 'Monday - Friday, 9 AM - 6 PM IST'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'info@basdilspharma.com',
      link: 'mailto:info@basdilspharma.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 'fa-brands fa-whatsapp',
      title: 'WhatsApp',
      value: '+91 9931691959',
      link: 'https://wa.me/919931691959',
      description: 'Quick support & inquiries'
    },
    {
      icon: 'fa-location-dot',
      title: 'Visit Us',
      value: 'Dehradun Office',
      link: '#',
      description: 'Ekta Enclave, Kargi'
    }
  ];

  const offices = [
    {
      name: 'Corporate Headquarters',
      type: 'Manufacturing Facility',
      address: 'Ekta Enclave, G. No.-2, Banjarawala Road, Kargi, Dehradun - 248001 (U.K.) India',
      phone: '+91 9931691959',
      email: 'info@basdilspharma.com',
      hours: 'Monday - Friday: 9 AM - 6 PM IST',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=500&fit=crop'
    },
    {
      name: 'Registered Office',
      type: 'Corporate Office',
      address: 'BML, HJP, VSL, BR-844101 Bihar, INDIA',
      phone: '+91 9931691959',
      email: 'info@basdilspharma.com',
      hours: 'Monday - Friday: 9 AM - 6 PM IST',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop'
    }
  ];

  const departments = [
    {
      name: 'Sales & Distribution',
      icon: 'fa-chart-line',
      email: 'sales@basdilspharma.com',
      description: 'PCD Pharma Franchise opportunities and bulk orders'
    },
    {
      name: 'Manufacturing',
      icon: 'fa-industry',
      email: 'mfg@basdilspharma.com',
      description: 'Third-party & contract manufacturing inquiries'
    },
    {
      name: 'Product Development',
      icon: 'fa-flask',
      email: 'rd@basdilspharma.com',
      description: 'Custom formulation and R&D services'
    },
    {
      name: 'Customer Support',
      icon: 'fa-headset',
      email: 'support@basdilspharma.com',
      description: 'Product information and technical support'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Build Healthier Lives Together"
            description="We're here to help with partnerships, inquiries, and support. Reach out to us through your preferred channel."
          />
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <a 
                key={method.title} 
                href={method.link} 
                target={method.link.startsWith('http') ? '_blank' : '_self'} 
                rel={method.link.startsWith('http') ? 'noreferrer' : ''} 
                className="card-base p-6 space-y-2 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900">{method.title}</h4>
                <p className="text-primary-600 font-semibold">{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 card-base space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900">Send us a Message</h2>
                <p className="text-lg text-gray-600">We'll get back to you as soon as possible</p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900">Company</label>
                    <input type="text" id="company" name="company" placeholder="Company name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us how we can help..." required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all resize-none" />
                </div>
                <button className="w-full btn-primary text-lg py-4" type="submit">
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar - Contact Info */}
            <aside className="space-y-6">
              {/* Quick Info Card */}
              <div className="card-base space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Quick Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600 text-sm">We typically respond within 24 business hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                      <li>Saturday - Sunday: Closed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>WHO-GMP Certified</li>
                      <li>ISO 9001:2015</li>
                      <li>FSSAI Approved</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="card-base space-y-4 bg-white border-2 border-primary-200 p-8">
                <h3 className="text-lg font-bold text-gray-900">Support</h3>
                <p className="text-gray-700 text-sm">For immediate assistance, call us or use WhatsApp. Our support team is ready to help!</p>
                <div className="flex flex-col gap-3 pt-2">
                  <a href="tel:+919931691959" className="px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-center text-sm">
                    Call Now
                  </a>
                  <a href="https://wa.me/919931691959" target="_blank" rel="noreferrer" className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-center text-sm">
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">Our Departments</h2>
            <p className="text-lg text-gray-600">Reach the right team for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="card-base group text-center space-y-4 hover:scale-105 hover:shadow-card-hover transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${dept.icon}`} />
                </div>
                <h4 className="font-bold text-gray-900">{dept.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{dept.description}</p>
                <a href={`mailto:${dept.email}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                  <i className="fa-solid fa-envelope mr-2" /> {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">Our Offices</h2>
            <p className="text-lg text-gray-600">Visit us at any of our locations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="card-base overflow-hidden group hover:shadow-card-hover transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={office.image} alt={office.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-lg">{office.type}</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{office.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Address</p>
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <a href={`tel:${office.phone}`} className="text-primary-600 hover:text-primary-700">{office.phone}</a>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a href={`mailto:${office.email}`} className="text-primary-600 hover:text-primary-700">{office.email}</a>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Hours</p>
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white">Ready to Partner with Us?</h2>
              <p className="text-lg text-primary-100">Whether you're looking for PCD pharma franchise, third-party manufacturing, or custom formulations, we're here to support your growth.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@basdilspharma.com" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
                <i className="fa-solid fa-paper-plane mr-2" /> Send Inquiry
              </a>
              <a href="tel:+919931691959" className="px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 inline-block">
                <i className="fa-solid fa-phone mr-2" /> Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
