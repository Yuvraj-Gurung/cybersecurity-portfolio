# Yuvraj Gurung — Cybersecurity Portfolio

A responsive, GitHub Pages-ready cybersecurity portfolio built with plain **HTML, CSS, and vanilla JavaScript**.

## Included

- Strict black/white/grayscale visual system
- Dark/light mode toggle with saved preference
- Responsive navigation and mobile menu
- Resume download (`assets/resume.pdf`)
- Projects, skills, experience, certifications, education, focus, and contact sections
- Editable GitHub Repository and Live Demo links for **all 10 projects**
- Accessible focus states, skip link, semantic structure, reduced-motion support
- No backend, database, paid API, or build system required

## Editing project links

Each project card contains two sample links:

- `https://github.com/yourusername/project-name`
- `https://yourusername.github.io/project-name/`

Open `index.html`, find the relevant project card, and replace those two `href` values with your real GitHub repository and deployed demo URLs.

The visible button labels are already set to **GitHub Repository** and **Live Demo**.

## Editing contact links

Replace the placeholder email, LinkedIn, GitHub, and location values in `index.html` before publishing.

## Dark / light mode

The toggle is in the top navigation. The selected theme is stored in the browser with `localStorage`, so the visitor's preference is remembered. If no preference exists, the site follows the device's light/dark preference.

## GitHub Pages deployment

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Commit and push the files.
4. In GitHub, open **Settings → Pages**.
5. Select **Deploy from a branch** and choose the branch containing the site files, usually `main`, with `/ (root)`.
6. Save and open the generated GitHub Pages URL.

No server-side configuration is required.
