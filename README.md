# FashionSwap

A community platform for swapping fast fashion, built with **Next.js**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**.

## Tech Stack

- [Next.js 16](https://nextjs.org/) – React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) – Static type checking
- [Redux Toolkit](https://redux-toolkit.js.org/) – State management
- [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first styling

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout with Redux StoreProvider
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   └── StoreProvider.tsx # Redux Provider wrapper (client component)
└── store/
    ├── store.ts          # Redux store configuration
    ├── hooks.ts          # Typed useAppDispatch / useAppSelector hooks
    └── features/
        └── items/
            └── itemsSlice.ts  # Redux slice for fashion items
```

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start development server     |
| `npm run build` | Build for production         |
| `npm run start` | Start production server      |
| `npm run lint`  | Run ESLint                   |
