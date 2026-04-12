import { siteConfig } from '@/site.config';

interface JsonLdProps {
  conditionName: string;
  conditionDescription: string;
  icd10Codes: string[];
  specialistType: string;
  domain: string;
}

export function JsonLd({ conditionName, conditionDescription, icd10Codes, specialistType, domain }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://${domain}/#webpage`,
        name: `${conditionName} Guide — co-op.care`,
        description: conditionDescription,
        url: `https://${domain}`,
        inLanguage: 'en-US',
        isPartOf: { '@id': `https://${domain}/#website` },
        about: {
          '@type': 'MedicalCondition',
          name: conditionName,
          code: icd10Codes.map(code => ({
            '@type': 'MedicalCode',
            codeValue: code,
            codingSystem: 'ICD-10',
          })),
          relevantSpecialty: {
            '@type': 'MedicalSpecialty',
            name: specialistType,
          },
        },
        reviewedBy: {
          '@type': 'Physician',
          '@id': 'https://altru.care/#physician',
          name: 'Josh Emdur, DO',
          honorificSuffix: 'DO',
          description: 'Board Certified Internal Medicine physician. Licensed in all 50 states. Medical Director, co-op.care.',
          url: 'https://altru.care',
          affiliation: {
            '@type': 'MedicalOrganization',
            name: 'co-op.care',
            url: 'https://co-op.care',
          },
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Medical License',
            recognizedBy: { '@type': 'Organization', name: 'All 50 US States' },
          },
        },
      },
      {
        '@type': 'WebSite',
        '@id': `https://${domain}/#website`,
        url: `https://${domain}`,
        name: `${conditionName} — co-op.care`,
        publisher: {
          '@type': 'MedicalOrganization',
          name: 'co-op.care',
          url: 'https://co-op.care',
          logo: 'https://co-op.care/logo.svg',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `What causes ${conditionName.toLowerCase()}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${conditionName} can have multiple causes. Use our free AI assessment to understand your specific situation and whether you should see a ${specialistType}.`,
            },
          },
          {
            '@type': 'Question',
            name: `When should I see a doctor for ${conditionName.toLowerCase()}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `If symptoms persist more than 6 weeks, worsen, or affect daily activities, consult a ${specialistType}. Our free assessment can help you decide.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
