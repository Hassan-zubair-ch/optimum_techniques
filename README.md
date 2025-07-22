# Optimum Techniques – React + TypeScript + Vite Boilerplate ⚡

A blazing-fast and scalable frontend starter template built with **React**, **TypeScript**, and **Vite**. Designed for modern web apps, this boilerplate comes equipped with advanced ESLint configurations, hot module replacement (HMR), and optional linting for React and DOM.

## 🚀 Features

- ⚡ **Vite** for super-fast bundling and HMR
- 🧠 **TypeScript** support out of the box
- ✅ **ESLint** with recommended, strict, and stylistic rules
- ⚛️ Optional lint rules for React & ReactDOM
- 🌐 SEO-friendly structure
- 🧱 Scalable project foundation

## 🔧 Tech Stack

- React
- TypeScript
- Vite
- ESLint (with `@typescript-eslint`)
- Optional: `eslint-plugin-react-x`, `eslint-plugin-react-dom`

## 📦 Installation

```bash
npm install
npm run dev
```

## 🛠 ESLint Configuration

This project uses an advanced ESLint setup optimized for TypeScript:

```js
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

### 🔍 React-Specific ESLint Rules (Optional)

Install React linting plugins:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

Then extend your config:

```js
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

## 📣 About This Project

**Optimum Techniques** is ideal for developers building production-ready SPAs or scalable React apps. It saves time with pre-configured tools and promotes code consistency with TypeScript and linting best practices.

## 💻 GitHub Repo SEO Setup

### 📄 Description (About Section)
```
A blazing-fast React + TypeScript + Vite boilerplate with scalable architecture and ESLint support.
```

### 🏷️ Recommended Tags
```
react, vite, typescript, eslint, frontend-boilerplate, react-starter, webapp-hmr, eslint-react, scalable-react-app, optimum-techniques
```

### 📷 Social Preview Image
> Add a 1200x630 preview image in GitHub Settings → Social Preview

### ✍️ Add This in CONTRIBUTING.md (optional)
```
Contributions welcome! Please fork the repo and submit a PR with a clear title, purpose, and linked issue (if applicable).
```

## 🔗 Useful Links

- [Vite Official Docs](https://vitejs.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [ESLint](https://eslint.org/)

## 💡 Contribution

Feel free to fork and contribute. Open to suggestions, improvements, or additional features via issues or pull requests.

## 📜 License

[MIT](LICENSE)
