# FashionSwap - Cosmetic Store

A luxury beauty products store built with Next.js to explore and compare different state management approaches in React.

## About

This project implements the same cosmetic product filtering UI using two different state management libraries side by side:

- **Zustand** — lightweight, hook-based store (`/zustandcosmestic`)
- **Redux Toolkit** — full-featured state management (`/reduxcosmetic`)

Both implementations share the same UI components (FilterSidebar, ProductGrid, ProductCard) and support filtering products by price range and luxury brands.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **State Management:** Zustand, Redux Toolkit

## Project Structure

```
src/
├── app/
│   ├── (ZustandClientState)/zustandcosmestic/    # Zustand route
│   ├── (ReduxToolKitClientState)/reduxcosmetic/   # Redux Toolkit route
│   └── layout.tsx
├── components/
│   ├── FilterSideBar.tsx         # Shared filter sidebar (price + brand)
│   ├── ProductGrid.tsx           # Shared product grid
│   ├── ProductCard.tsx           # Shared product card
│   ├── ZustandCosmesticHome.tsx  # Zustand page component
│   ├── ReduxCosmeticHome.tsx     # Redux page component
│   └── ui/                       # shadcn/ui components
├── store/
│   ├── Zustand/cosmesticStore.ts      # Zustand store
│   └── ReduxTK/
│       ├── cosmeticSlice.ts           # Redux slice (state + reducers)
│       ├── cosmeticStore.ts           # Redux store config
│       └── ReduxProvider.tsx          # Client-side provider wrapper
├── types/product.ts
└── utilities/helpersCosmetic.ts
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Visit:
- `http://localhost:3000/zustandcosmestic` — Zustand version
- `http://localhost:3000/reduxcosmetic` — Redux Toolkit version

## Demo

https://github.com/user-attachments/assets/08b22a88-d69c-4cbb-b6e2-9abbb703f9f6
