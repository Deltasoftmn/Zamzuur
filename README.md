# Dream Oasis - Restaurant & Lounge Website

A modern, responsive website for Dream Oasis Restaurant & Lounge built with Next.js and React.

## Features

- Modern, clean design with dark grey, orange, and white color scheme
- Fully responsive layout
- Hero section with image slider
- Menu section with animated car icons
- Schedule and location information
- Interactive Google Maps integration
- Social media integration

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/       # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Exterior.js
│   │   ├── Menu.js
│   │   ├── ScheduleLocation.js
│   │   ├── MapSection.js
│   │   └── Footer.js
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout
│   └── page.js          # Home page
├── package.json
└── next.config.js
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- CSS Modules
- Google Maps API (embedded)

## Notes

- The website uses placeholder images from Unsplash. Replace them with your actual images.
- Update the Google Maps embed URL in `MapSection.js` with your actual location coordinates.
- Customize colors, fonts, and content as needed.
