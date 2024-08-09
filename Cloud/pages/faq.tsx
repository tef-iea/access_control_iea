import { useState } from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, CubeIcon, CreditCardIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Layout from '../components/layout';

// Translations
const translations = {
  en: {
    title: 'Why Worldcoin for Access',
    intro: 'Worldcoin provides secure, unique user identification for the IEA, reducing theft and fraud. This advanced security enhances overall safety and user convenience. But that\'s not all...',
    security: 'Security',
    features: [
      {
        name: 'Identification',
        description:
          'Worldcoin employs advanced biometric verification, ensuring each user is uniquely identified through secure methods such as iris scanning. This prevents multiple sign-ups and guarantees that only verified individuals can access the Innovation Experience Area (IEA), enhancing overall security.',
      },
      {
        name: 'Blockchain',
        description:
          'Worldcoin leverages blockchain technology to provide a decentralized and transparent system. This ensures that all transactions and identifications are securely recorded on an immutable ledger, reducing the risk of fraud and unauthorized access.',
      },
      {
        name: 'Wallet',
        description:
          'Worldcoin includes a secure digital wallet within its app, allowing users to store and manage their cryptocurrency efficiently. This wallet not only facilitates seamless transactions but also integrates with various financial services, providing users with a comprehensive financial tool.',
      },
      {
        name: 'Technology',
        description:
          'By using Worldcoin, users engage with cutting-edge technology, gaining firsthand experience with innovative solutions in biometric verification and blockchain. This exposure helps users stay ahead in the digital age, familiarizing them with the latest advancements in secure identification and digital finance.',
      },
    ],
  },
  de: {
    title: 'Warum Worldcoin für den Zugang?',
    intro: 'Worldcoin bietet sichere, einzigartige Benutzeridentifikation für das IEA, wodurch Diebstahl und Betrug reduziert werden. Diese fortschrittliche Sicherheit verbessert die Gesamtsicherheit und den Benutzerkomfort. Aber das ist noch nicht alles...',
    security: 'Sicherheit',
    features: [
      {
        name: 'Identifizierung',
        description:
          'Worldcoin verwendet fortschrittliche biometrische Verifizierung, um sicherzustellen, dass jeder Benutzer eindeutig durch sichere Methoden wie Iris-Scanning identifiziert wird. Dies verhindert mehrfache Anmeldungen und stellt sicher, dass nur verifizierte Personen Zugang zum Innovation Experience Area (IEA) erhalten, was die allgemeine Sicherheit erhöht.',
      },
      {
        name: 'Blockchain',
        description:
          'Worldcoin nutzt Blockchain-Technologie, um ein dezentrales und transparentes System bereitzustellen. Dies stellt sicher, dass alle Transaktionen und Identifikationen sicher auf einem unveränderlichen Ledger aufgezeichnet werden, wodurch das Risiko von Betrug und unbefugtem Zugriff verringert wird.',
      },
      {
        name: 'Brieftasche',
        description:
          'Worldcoin enthält eine sichere digitale Brieftasche in seiner App, mit der Benutzer ihre Kryptowährung effizient speichern und verwalten können. Diese Brieftasche ermöglicht nicht nur nahtlose Transaktionen, sondern integriert sich auch in verschiedene Finanzdienstleistungen und bietet Benutzern ein umfassendes Finanzinstrument.',
      },
      {
        name: 'Technologie',
        description:
          'Durch die Nutzung von Worldcoin erleben Benutzer modernste Technologie und erhalten Einblick in innovative Lösungen für biometrische Verifizierung und Blockchain. Diese Erfahrung hilft Benutzern, in der digitalen Ära Schritt zu halten und sich mit den neuesten Entwicklungen in der sicheren Identifizierung und digitalen Finanzwelt vertraut zu machen.',
      },
    ],
  },
};

export default function Faq() {
    const [language, setLanguage] = useState<'en' | 'de'>('en');

  const t = translations[language];

  return (
    <Layout>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded"
            >
              {language === 'en' ? 'German' : 'English'}
            </button>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">{t.security}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.intro}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {t.features.map((feature, index) => (
                <div key={index} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <FingerPrintIcon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
