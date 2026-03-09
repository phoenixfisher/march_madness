# March Madness College Basketball Teams

A simple React + TypeScript website that displays NCAA college basketball team information from a JSON file.

## What this app shows
- A heading section introducing the site
- A team card for each school with:
  - School name
  - Mascot name
  - Location (City, State)
- A full list of all teams from the JSON data source

## Data source
Team data is loaded from:
- `src/CollegeBasketballTeams.json`

## Main files
- `src/App.tsx` - App and components (`Header`, `Body`, card rendering)
- `src/Type.tsx` - TypeScript types for the JSON data
- `src/App.css` - Styling for layout and cards

## Run locally
```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
```
