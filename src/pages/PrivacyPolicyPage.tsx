import { SectionHeading } from '../components/SectionHeading';
import { PageMeta } from '../components/PageMeta';

const privacySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.basdilspharma.com/privacy#webpage',
      'url': 'https://www.basdilspharma.com/privacy',
      'name': 'Privacy Policy | Basdils Pharmaceuticals Pvt. Ltd.',
      'description': 'Privacy Policy of Basdils Pharmaceuticals Pvt. Ltd. detailing how we collect, use, and protect personal information.',
      'isPartOf': { '@id': 'https://www.basdilspharma.com/#website' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.basdilspharma.com/privacy#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.basdilspharma.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Privacy Policy',
          'item': 'https://www.basdilspharma.com/privacy'
        }
      ]
    }
  ]
};

export function PrivacyPolicyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | Data Protection & Privacy Terms"
        description="Read the official Privacy Policy of Basdils Pharmaceuticals Pvt. Ltd. Learn how we handle your personal data and commercial inquiries securely."
        canonical="https://www.basdilspharma.com/privacy"
        schema={privacySchema}
      />

      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            asH1
            eyebrow="Legal & Privacy"
            title="Privacy Policy"
            description="Basdils Pharmaceuticals Pvt. Ltd. is committed to maintaining the privacy and security of your personal data."
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold font-display text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              When you interact with Basdils Pharmaceuticals Pvt. Ltd. through our website, contact forms, or communication channels, we may collect personal information including your full name, email address, phone number, company name, and inquiry details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-display text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">We use the information collected solely to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to PCD pharma franchise, third-party manufacturing, and product inquiries.</li>
              <li>Provide customer support and dispatch product catalogues.</li>
              <li>Fulfill statutory compliance requirements under Indian pharmaceutical regulations.</li>
              <li>Improve site usability and performance through anonymous analytics.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold font-display text-gray-900 mb-3">3. Data Protection & Security</h2>
            <p>
              We implement stringent administrative and technical safeguards to prevent unauthorized access, disclosure, or misuse of your contact details. We do not sell or rent your personal information to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-display text-gray-900 mb-3">4. Contacting Us Regarding Data Privacy</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to update your information, please contact our data privacy representative at:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-bold text-gray-900">Basdils Pharmaceuticals Pvt. Ltd.</p>
              <p>Email: basdilpharma@gmail.com</p>
              <p>Phone: +91 9931691959</p>
              <p>Address: Ekta Enclave, Banjarawala Road, Kargi, Dehradun - 248001 (U.K.) India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
