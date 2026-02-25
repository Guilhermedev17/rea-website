# Project Restructuring and Cleanup

- [x] Rename `card.jsx` to `Card.jsx` to follow PascalCase convention for React components.
- [x] Update imports for `Card` in `About.jsx` (and elsewhere if used).
- [x] Review `EmpresaCarousel.jsx` location and naming.
- [x] Verify `layout.js` and `page.js` for any other case-sensitivity or naming issues.
- [x] Ensure all component file names use PascalCase.

# Image Cleanup

- [x] List all images in the `public` directory.
- [x] Search the codebase for references to each image.
- [x] Delete images that are not referenced anywhere.

# Mobile Menu Fix

- [x] Remove `MobileMenu.jsx` and use a native, simple dropdown in `Header.jsx`.
- [x] Adapt the mobile layout perfectly without heavy UI components or scroll-locking tricks.

# Native Footer Redesign

- [x] Rebuild `<Footer />` layout using a native responsive grid (stack on mobile, 4-cols on desktop).
- [x] Remove overly small text (`text-xs`) that ruins desktop wide-screen scaling.
- [x] Simplify the contact info formatting.
