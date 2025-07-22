# ⚡ Optimum Techniques – React + TypeScript + Vite Boilerplate

A blazing-fast and scalable frontend starter template built with **React**, **TypeScript**, and **Vite**. Designed for modern web apps, this boilerplate comes equipped with advanced ESLint configurations, hot module replacement (HMR), and optional linting for React and DOM.

---

## 🚀 Features

* ⚡ Vite for super-fast bundling and HMR
* 🧠 TypeScript support out of the box
* ✅ ESLint with recommended, strict, and stylistic rules
* ⚛️ Optional lint rules for React & ReactDOM
* 🌐 SEO-friendly structure
* 🧱 Scalable project foundation

---

## 🔧 Tech Stack

* React
* TypeScript
* Vite
* ESLint (with `@typescript-eslint`)
* Optional: `eslint-plugin-react-x`, `eslint-plugin-react-dom`

---

## 📦 Installation

```bash
npm install
npm run dev
```

---

## 🛠 ESLint Configuration

This project uses an advanced ESLint setup optimized for TypeScript:

```ts
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

## 🔍 React-Specific ESLint Rules (Optional)

Install React linting plugins:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

Extend your config:

```ts
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
  },
])
```

---

## 📁 Project Structure

```
optimum_techniques/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.tsx
│   └── main.tsx
│
├── public/
│
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── README.md
```

---

## 💡 Contribution

Feel free to fork and contribute. Open to suggestions, improvements, or additional features via issues or pull requests.

---

## 📜 License

MIT
