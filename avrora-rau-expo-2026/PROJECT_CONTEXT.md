# Avrora RAU Expo 2026 Context

## Project

Standalone expo presentation site for Avrora R&D at RAU Expo 2026.

Workspace:

`C:\Users\user\Documents\New project\avrora-rau-expo-2026`

## Strategic Goal

The site should present the department not as a support function, but as a strong product and innovation unit inside Aurora:

- helping the company grow faster
- making service more human
- turning technology into a real competitive advantage
- packaging internal technologies into commercial solutions for the external market

## Design Direction

- Aurora spirit: yellow / black / white as the brand base
- style target: editorial-tech with ambition, polish, and strong business storytelling
- later exploration added:
  - lighter geometric futurist
  - premium expo-futurist
  - spectrum-expo with turquoise / violet / restrained Aurora-yellow

## Current Active Version

Work from `Variant 6`.

Reference snapshots:

- `snapshots/aurora-department-site-variant-1-2026-03-23.zip`
- `snapshots/aurora-department-site-variant-2-2026-03-23.zip`
- `snapshots/aurora-department-site-variant-3-2026-03-23.zip`
- `snapshots/aurora-department-site-variant-4-2026-03-24.zip`
- `snapshots/aurora-department-site-variant-5-2026-03-24.zip`
- `snapshots/aurora-department-site-variant-6-2026-03-25.zip`

## What Variant 1 Preserved

- the original editorial-tech structure
- compact header with Aurora and AR&D logos
- manifesto hero with the growth-engine concept
- clear team hierarchy with Voynalovych as the lead figure
- real community/publicity content instead of placeholders
- first shift from abstract projects to real product stories

## What Variant 2 Added

- stronger product-showcase positioning for global-market ambition
- shorter and cleaner mobile hero
- more experimental hero and product visuals
- richer product portfolio with real solutions
- better gallery logic in community/publicity blocks
- more premium and exhibition-like visual language

## What Variant 3 Added

- a cleaner adaptive hero baseline for laptops and mobile
- less decorative framing around the right-side hero visual
- a more compact title flow aimed at reducing excessive vertical scrolling
- a simplified hero composition saved as the current working checkpoint

## What Variant 4 Added

- a new image-based animated hero built from the approved `ChatGPT Image golovna` visual
- live overlay motion on top of the hero image: AI-core pulse, orbit sweeps, particles, and signal hotspots
- the old `Story and scale` section removed in favor of a cleaner numbers block inside the vision section
- a prepared placeholder `R&D in numbers` band so final metrics can be dropped in later without redesign

## What Variant 5 Added

- a cleaner hero composition built around the approved `golovna3` image
- improved headline balance and a simpler hero copy structure with the duplicated paragraph removed
- lighter metric cards in the product blocks for clearer contrast and a more premium feel
- rounded top integration for the dynamic hero visual so it sits more naturally inside the main scene

## What Variant 6 Added

- the page flow reorganized so commercial solutions come before flagship products
- consulting and turnkey development expanded into dedicated editorial sections after the product portfolio
- the consulting section pushed into a stronger orange consulting identity and the build section into a lighter blue product-build identity
- product, consulting, and commercial-solution cards tightened into a more consistent premium system

## Structure

1. Hero + numbers
2. Commercial solutions
3. Flagship products / portfolio
4. Consulting + turnkey development
5. Team
6. Community / public visibility
7. Contacts

## Product Framing

The product section should be framed in three layers:

- Consulting
  - change management
  - process setup
  - business analysis
  - project and portfolio management
- Custom development
  - retail-domain custom products
  - discovery, MVP, scaling, integrations, architecture
- Ready and battle-tested solutions
  - external conversion analytics
  - vehicle detection and access control
  - generator control
  - Aurora AI Platform
  - Smart Wiki
  - Smart AI Recruiting (internal advantage, not for sale)

## Current Important Content Decisions

- use real events, real speakers, and real proof where possible
- keep external links below images, not over faces
- avoid direct UI screenshots when they create IP, privacy, or GDPR risk
- replace raw screenshots with stylized scenes that communicate the product meaning
- keep the team block clear and executive
- keep the 5 core team members in one row on laptop widths where possible

## Current Main Design Challenge

The site now has a stronger hero direction, but the main remaining challenge is polishing the image-based dynamic hero so it feels premium, intentional, and fully integrated with the rest of the site.

The next major design step should focus on:

- refining the motion language of the animated hero
- tightening the relationship between the hero and product section below
- raising the overall presentation closer to a globally competitive product showcase

## Local Run

```powershell
npm.cmd install
npm.cmd run dev
```

## Build

```powershell
npm.cmd run build
```

## Preview

- Local: `http://localhost:4174/`
- Network: `http://192.168.0.186:4174/`

Use `Ctrl + F5` after visual changes because the browser often keeps old assets in cache.
