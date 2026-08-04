# Agent Guidance: Carpet Museum Frontend

## Project Overview
This is the frontend for a **Carpet Museum** web application. It is a React-based SPA built with Vite, designed to showcase exhibitions, collections, carpets, news, artists, and team information. It supports multilingual content (Azerbaijani as fallback) and integrates with a Laravel backend API.

## Tech Stack
- **Framework:** React 19.1.0
- **Bundler:** Vite 6.3.5
- **Styling:** Tailwind CSS v4.2.2 + SCSS (Sass) per page/component
- **State Management:** Redux Toolkit (RTK) + React Context API
- **Routing:** React Router DOM v7 (BrowserRouter)
- **HTTP Client:** Axios (with interceptors for `lang` header and `type=site` param)
- **UI Libraries:** Ant Design 5.26.0, Swiper 11.2.10, SweetAlert2
- **Animation:** Framer Motion, GSAP, `@fullpage/react-fullpage`
- **Internationalization:** i18next (fallback: `AZ`)
- **Deployment:** Vercel (SPA rewrite configured)

## Project Structure
```
src/
  api.js                # Axios instance (baseURL hardcoded to production API)
  App.jsx               # Providers wrapper (LanguageProvider, EventsProvider)
  main.jsx              # ReactDOM root + Redux Provider
  i18n.js               # i18next config, loads from /locales/{lng}/translation.json
  root/root.jsx         # Main router with all routes
  layout/
    MainLayout.jsx      # Navbar + Outlet + Footer, scroll-to-top on route change
  pages/
    Home/
    Exhibitions/        + ExhibitionDetail
    News/               + NewsDetail
    OurStory/
    CollectionsInside/
    CarpetManagement/
      Collections/      + CollectionDetail
      Carpets/          + CarpetDetail
    PlanVisit/
    Teams/              + Teams-detail
    Artists/            + Artists-detail
  components/
    Navbar/
    Footer/
    Filter/
    PrivateRoute/
    Cards/              # EventCard, NewsCard, PageHeader
    Home/               # Hero, Events, NewsComponent, MuseumShop, LatifKarimov
  store/                # Redux slices
    store.js
    home/heroSlice.js
    places/placesSlice.js
    places/placeDetailSlice.js
    cities/citiesSlice.js
    types/venueTypesSlice.js
    availability/availabilitySlice.js
    session/sessionSlice.js
  context/
    LanguageContext.jsx # Wraps i18n language changes
    EventContext.jsx    # Fetches events list globally, refreshes on language change
  assets/
    images/
    videos/
    mockData/
  styles/
    _breakpoints.scss
```

## Path Aliases (Vite + jsconfig)
- `@` -> `src`
- `@assets` -> `src/assets`
- `@components` -> `src/components`
- `@views` -> `src/views`
- `@scss` -> `src/scss`

## Routing
All routes are nested under `MainLayout` in `src/root/root.jsx`:
- `/` -> Home
- `/exhibitions` -> Exhibitions
- `/exhibitions/:id` -> ExhibitionDetail
- `/news` -> News
- `/news/:id` -> NewsDetail
- `/our-story` -> OurStory
- `/collections` -> Collections
- `/collections/:id` -> CollectionDetail
- `/carpets/:id` -> Carpets
- `/carpet-detail/:id` -> CarpetDetail
- `/plan-your-visit` -> PlanVisit
- `/teams` -> Teams
- `/teams/:id` -> TeamDetail
- `/artists` -> Artists
- `/artists/:id` -> ArtistDetail
- PrivateRoute wrapper exists but is not currently mapped to any specific authenticated pages.

## State Management
### Redux Slices
- `hero` -> Home page hero data
- `place` / `placeDetail` -> Places/venues list and detail
- `cities` -> City list (used in filters/plan visit)
- `venueTypes` -> Venue type categories
- `availability` -> Availability/calendar data
- `session` -> User session state

### Context Providers
- `LanguageProvider` -> Manages `i18next` language, persists to `localStorage`
- `EventsProvider` -> Fetches `/events` on mount and whenever language changes

## API & Backend
- **Production API Base:** `https://azcarpet.culture.az/api/site`
- **Image CDN Base:** `https://azcarpet.culture.az/storage/`
- **Environment Variables:** `.env` contains `VITE_BASE_URL` and `VITE_CLIENT_KEY`, but note that `src/api.js` currently hardcodes the production URLs instead of using `import.meta.env`. If changing the API target, edit `api.js` directly.
- **Request Interceptor:** Automatically attaches:
  - Header `lang` from `localStorage.getItem("i18nextLng")` (default `az`)
  - Query param `type=site`
- **Response Interceptor:** Returns `response.data` directly.

## Internationalization (i18n)
- Library: `i18next` + `react-i18next` + `i18next-http-backend` + `i18next-browser-languagedetector`
- Fallback language: `AZ`
- Detection order: `localStorage` -> `cookie`
- Cache: `localStorage`
- Translation files served from: `/locales/{lng}/translation.json`
- **Important:** Changing the language triggers a refetch of events (via `EventContext`) and any Redux-driven data should be re-fetched manually if it is language-dependent.

## Styling Conventions
- **Tailwind CSS v4** is used for utility classes.
- **SCSS** files are co-located with components/pages (e.g., `home.scss`, `exhibitions.scss`).
- A shared breakpoint partial exists at `src/styles/_breakpoints.scss`.
- Global styles: `src/index.css`, `src/App.scss`.

## Build & Deployment
- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Lint:** `npm run lint`
- **Deployment target:** Vercel. `vercel.json` ensures SPA routing with `rewrites: [{ source: "/(.*)", destination: "/index.html" }]`.

## Important Notes for Future Agents
1. **Hardcoded API URL:** `src/api.js` has the production API URL hardcoded. If you need to switch to staging or local, modify `api.js`.
2. **Language Sensitivity:** The backend relies on the `lang` header. Always ensure language changes reload/refetch content that is language-specific.
3. **Redux + Context:** Do not duplicate global fetches. Events are fetched via Context; everything else via Redux slices.
4. **Scroll Behavior:** `MainLayout` scrolls to top on every route change. If you implement anchor links or preserve scroll, adjust that `useEffect`.
5. **Unused Env Vars:** `VITE_BASE_URL` in `.env` is not consumed by `api.js` currently. Keep `.env` in sync if you refactor `api.js` to use `import.meta.env`.
6. **No TypeScript:** This is a pure JSX project. Use JSDoc for complex prop shapes if needed.
7. **PrivateRoute:** Exists but is not mapped to any authenticated page yet. Expand it when auth-protected routes are needed.
