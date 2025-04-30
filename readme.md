# `enum-countries` - Comprehensive Country Data Package

[![npm version](https://img.shields.io/npm/v/enum-countries.svg)](https://www.npmjs.com/package/enum-countries)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A complete, type-safe collection of country data including ISO codes, languages, telephone codes, and more.

## 📦 Installation

```bash
npm install enum-countries
# or
yarn add enum-countries
# or
pnpm add enum-countries
```

## 🌍 Features

- ✅ **Complete country data** for all recognized sovereign states
- 🏷 **Standardized codes**:
  - ISO 3166 (alpha-2, alpha-3, numeric)
  - FIFA country codes
  - International telephone codes
- 🌐 **Multilingual support**:
  - Official languages with native titles
  - Locale codes (e.g., 'fr-FR')
  - _Note: Some language data still needs completion_
- 🔗 Top-level domains (TLDs)
- 🛠 **Developer friendly**:
  - Full TypeScript support
  - Tree-shakable ES modules
  - Zero dependencies

## 📚 Basic Usage

### JavaScript/CommonJS

```javascript
const { countries } = require('enum-countries');

// Get specific country data
console.log(countries.france.iso_3166.alpha2); // 'FR'
console.log(countries.japan.telephone.code); // '81'
```

### TypeScript/ES Modules

```typescript
import { countries } from 'enum-countries';

// Find country by ISO alpha-2 code
const germany = Object.values(countries).find((c) => c.iso_3166.alpha2 === 'DE');

console.log(germany?.languages);
// { German: { local: 'de-DE', title: 'Deutsch' } }
```

## 🔍 Advanced Usage

### Type-Safe Country Access

```typescript
import type { CountriesMap } from 'enum-countries';

function formatPhoneNumber(countryCode: keyof CountriesMap, phoneNumber: string): string {
  const country = countries[countryCode];
  return `+${country.telephone.code} ${phoneNumber}`;
}
```

### Available Utility Functions

```typescript
// Get all country codes
const countryCodes = Object.keys(countries);

// Get all FIFA codes
const fifaCodes = Object.values(countries).map((c) => c.fifa.code);

// Find by TLD
const countryByTld = Object.values(countries).find((c) => c.iso_3166.TLD === '.it');
```

## 📊 Data Structure

Each country object contains:

```typescript
{
  iso_3166: {
    alpha3: string;  // e.g., 'FRA' for France
    alpha2: string;  // e.g., 'FR' for France
    numeric: string; // e.g., '250' for France
    capital_subdivision: string | null;
    state_name: string;    // Official name
    sovereignty: string;   // e.g., 'UN member'
    TLD: string;           // e.g., '.fr' for France
  };
  fifa: {
    code: string;    // FIFA country code
  };
  telephone: {
    code: string;    // International dialing code
  };
  languages: {
    [languageName: string]: {
      local: string; // Locale code
      title: string; // Native name
    }
  };
}
```

## 🤖 TypeScript Support

Fully typed with included declarations:

```typescript
interface CountryData {
  iso_3166: {
    alpha3: string;
    alpha2: string;
    numeric: string;
    capital_subdivision: string | null;
    state_name: string;
    sovereignty: string;
    TLD: string;
  };
  fifa: { code: string };
  telephone: { code: string };
  languages: Record<string, { local: string; title: string }>;
}

interface CountriesMap {
  [countryName: string]: CountryData;
}
```

## 🚀 Version History

| Version | Changes                                           |
| ------- | ------------------------------------------------- |
| 1.0.*   | Include all languages and iso standard codes      |

## 🤝 Contributing

We welcome contributions to improve this package! Here's how you can help:

1. **Report Issues**: Found incorrect data? Open an issue!
2. **Add Missing Data**: Particularly language information
3. **Improve Typings**: Enhance the TypeScript experience
4. **Add Features**: Suggest new useful data fields

To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 License

MIT © [A.M.Hamidi Pour](https://am-hp.ir)
