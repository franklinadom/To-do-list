# To-do List

A simple, minimal To-do List web app built with React and Vite — focused on fast development, hot module replacement (HMR), and a clean dev setup.

## Features
- Add, edit, and remove to-do items
- Toggle items as complete/incomplete
- Persistent state (localStorage)
- Responsive UI
- ESLint-enabled code style (optional)

## Tech stack
- React
- Vite
- JavaScript (or TypeScript if you prefer)
- Optional: ESLint, Prettier

## Getting started

1. Clone the repo
   git clone https://github.com/franklinadom/To-do-list.git
2. Install dependencies
   cd To-do-list
   npm install
   or
   yarn
3. Run the dev server
   npm run dev
   or
   yarn dev

The app will be available at http://localhost:5173 (default Vite port).

## Available scripts
- npm run dev — start development server with HMR
- npm run build — create a production build
- npm run preview — locally preview the production build
- npm run lint — run ESLint (if configured)

## Project structure (suggested)
- src/
  - components/ — React components (TodoList, TodoItem, AddTodo, etc.)
  - hooks/ — custom hooks (e.g., useLocalStorage)
  - styles/ — CSS or utility classes
  - main.jsx — app entry
- public/ — static assets

## Persistence
This app uses localStorage to keep the to-do list between browser sessions. You can swap this for a backend API later.

## Deployment
Build the app and deploy the `dist/` output to any static host (Netlify, Vercel, GitHub Pages, etc.):
- npm run build
- Deploy `dist/`

## Contributing
Contributions are welcome. Open issues or pull requests with small, focused changes. Please follow consistent linting and formatting rules if present.

## License
Choose a license (e.g., MIT). Example:
MIT © [Your Name]

## Author
franklinadom — https://github.com/franklinadom
