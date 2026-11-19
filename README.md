# Om Khot — React Portfolio

A responsive, single-page developer portfolio built with React, Vite, CSS and Framer Motion.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder.
3. Open a terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalize before publishing

1. Replace `public/images/profile-placeholder.svg` with your own image (for example `profile.jpg`) and update `profile.photo` in `src/data.js`.
2. Replace the GitHub, LinkedIn and LeetCode placeholder URLs in `src/data.js`.
3. Replace `YOUR_EMAIL@example.com` with the email address you want displayed.
4. Add your resume PDF to `public/` and update `profile.resume` to `/Om_Khot_Resume.pdf`.
5. Review every project description, stack and internship bullet against your final resume. Remove any item you cannot confidently explain.
6. Replace placeholder GitHub repository paths with the actual repository URLs. Until then, project links are intentionally placeholders.

## Notes

- All portfolio text and data are centralized in `src/data.js`.
- The profile image is an illustration placeholder, not a real photograph.
- The Projects section is a touch-friendly horizontal carousel; its current visual panels are CSS-built previews, not screenshots from project README files.
- The project is a single-page application; section navigation uses anchor links.
- Animations respect a restrained, professional visual style.
