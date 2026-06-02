
# Soakify

Soakify is a React-based laundry service landing page and admin portal built with Vite. The project includes a responsive homepage, admin authentication flow, an admin dashboard, and shared application state using React Context.

## Project Overview

- **Framework**: React 19
- **Bundler**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **State Management**: React Context + `useReducer`
- **Styling**: Component-level CSS files
- **Deployment**: `gh-pages` configured for the `dist` folder

## Key Features

- Responsive homepage with:
  - Feature highlights
  - How it works section
  - Testimonials
  - Call-to-action button
- Admin login page with:
  - Email/password login
  - Optional 2FA OTP verification flow
  - Protected admin dashboard route
- Admin dashboard with:
  - Admin details display
  - Sidebar navigation
  - Dark mode toggle
  - Logout flow
- Global app context for:
  - Theme state
  - Cart management
  - Device type detection
  - App opener banner state

## Project Structure

```text
/src
  /Components
    AppOpener.jsx
    Features.jsx
    Homepage.jsx
    LocationComponent.jsx
    Login.jsx
    NotFound.jsx
    Signup.jsx
    /Admin
      AdminLogin.jsx
      AdminDashboard.jsx
    /Auth
      OtpLogin.jsx
  /Context
    AppContext.jsx
    AuthContext.jsx
  api.js
  App.jsx
  main.jsx
/public
  /images
    quick_service.svg
    ecofriendly.svg
    pricing.svg
```

## Routes

- `/home` → Homepage
- `/admin` → Admin login page
- `/admin/tfa` → OTP verification (TFA)
- `/admin/dashboard` → Protected admin dashboard
- `*` → 404 Not Found page

## Contexts

- `AppContext` manages:
  - `user`
  - `theme`
  - `cart`
  - `device`
  - `appOpener`
- `AuthContext` manages:
  - `id`
  - `email`
  - `authenticated`

## API Endpoints

The app uses the endpoint definitions from `src/api.js`:

- `GENERATE_OTP`: `http://localhost:8080/api/auth/generate-otp`
- `VERIFY_OTP`: `http://localhost:8080/api/auth/verify-otp`
- `LOGIN`: `http://localhost:8080/api/admin/login`
- `ADMIN_DETAIL`: `http://localhost:8080/api/admin/get`
- `REGISTER`: `http://localhost:8080/auth/register`

> Note: These endpoints are configured for a local backend running on port `8080`.

## Installation

```bash
cd /Users/sumit/Desktop/Frontend/React/Soakify
npm install
```

## Run Locally

```bash
npm run dev
```

Open the app at `http://localhost:5173/`.

## Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Deploy the `dist` output using GitHub Pages:

```bash
npm run deploy
```

## Notes and Observations

- The app currently uses React 19.2.7 and Vite 6.
- The homepage includes a mobile-only promo banner (`AppOpener`) and a feature carousel.
- The admin login component includes a temporary testing mode toggle for development.
- The `LocationComponent` is implemented but currently commented out in the homepage.
- `Login.jsx` and `Signup.jsx` exist but are not wired to the current router paths.

## Future Enhancements

- Add a complete user authentication/sign-up flow.
- Wire `/signin`, `/signup`, and `/partner` routes to actual pages.
- Add backend integration for user booking, order placement, and payment.
- Improve accessibility and mobile navigation.
- Add tests for components and routes.

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `react-icons`
- `axios`

## Dev Dependencies

- `vite`
- `@vitejs/plugin-react`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `gh-pages`

## Contact

For questions or updates, open an issue or update the source files directly in this repository.
