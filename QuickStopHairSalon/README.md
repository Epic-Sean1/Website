# Quick-Stop Hair Salon | WEDE5020 POE

**Student Name:** Sean Vakatsha  
**Student ID:** ST10539242  
**Module:** WEDE5020 - Web Development  
**Project:** Quick-Stop Hair Salon Website  

---

# PART 1: Initial Website Structure & Project Overview

## 1. Project Introduction
Quick-Stop Hair Salon is a multi-page web application designed to provide clients with convenient access to hair styling services, pricing menus, branch locations, and online appointment booking.

## 2. Core Page Architecture
The initial release established the 5-page semantic HTML5 website structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`):
- **`index.html`**: Main landing page with salon highlights, featured services, and call-to-action banners.
- **`about.html`**: Background story, mission statement, and core values of the salon.
- **`services.html`**: Service catalog detailing pricing for cuts, braids, and treatments.
- **`enquiry.html`**: Interactive booking form for scheduling appointments or requesting custom quotes.
- **`contact.html`**: Contact numbers, operating hours, and physical branch locations.

## 3. Initial Design & Asset Setup
- **Styling (`css/style.css`)**: Core CSS styling rules, color variables, typographic scale, and structural layout containers.
- **Media (`images/`)**: Visual assets and salon imagery.
- **Proposals (`Proposals/`)**: Project proposal document outlining technical scope, target market, and budget specifications.

---

# PART 2: Feedback Resolution & Multi-File Changelog

## 1. Response to Part 1 Feedback
* **Lecturer Feedback Received:** *"No evidence for Github"*
* **Action Taken & Resolution:**
  * Created and configured a public GitHub repository (`QuickStopHairSalon`).
  * Structured all project files into a clean workspace (`/css`, `/images`, `/Proposals`, and root HTML files).
  * Documented all incremental code updates across multiple files using distinct Git commit messages to provide systematic proof of version control.

## 2. Part 2 Incremental Development Updates

### A. Global CSS & Layout Optimization (`css/style.css`)
- Applied a dark navy (`#1e293b`) and light background theme across all 5 HTML pages.
- Built responsive navigation headers and clean card layouts using CSS Flexbox.
- Implemented card elevation hover transitions (`transform: translateY(-5px)`).
- Configured custom focus outlines (`:focus`) on form inputs for web accessibility.
- Integrated `@media (max-width: 768px)` breakpoints to automatically stack grid cards and navigation items vertically on mobile devices.

### B. Services Page Upgrades (`services.html`)
- Added visual category badges (`Most Popular`, `Hair Health`, `Quick Express`) above service headings.
- Formatted pricing output tags using dedicated `.price-tag` CSS rules.

### C. Form Validation & Structure (`enquiry.html`)
- Wrapped form inputs inside structured `.form-group` layout containers.
- Added field validation (`required` attributes) and clear user placeholders.
- Added an appointment date picker field (`<input type="date">`).

### D. Location & Branch Expansion (`contact.html`)
- Integrated branch identification badges (`Primary Hub`, `Mall Express`, `At-Location`).
- Added a dedicated card for **Mobile & House Call Services**.
- Formatted direct email enquiry information inside a centered card layout.

### E. Media & Documentation Integration
- Implemented HTML5 `<picture>` tags inside `index.html` with responsive `max-width: 100%` scaling.
- Included full business proposal documentation (`Proposal_QuickStopHairSalon.docx`) detailing organization goals, target market, budget, and technical specifications.

### F. Image 
Inserted an image on the Home page 

---

## 3. Repository File Hierarchy

```text
QuickStopHairSalon/
├── Chosen Proposal/
│   └── Proposal_QuickStopHairSalon.docx
├── Proposals/
│   ├── QuickStopHairSalon.docx
│   └── WeBake.docx
├── Research/
├── css/
│   └── style.css
├── images/
│   └── salon.jpeg
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
└── README.md
