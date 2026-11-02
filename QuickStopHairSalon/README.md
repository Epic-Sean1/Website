# Quick-Stop Hair Salon | WEDE5020 POE

**Student:** Sean Vakatsha
**Student ID:** ST10539242
**Module:** WEDE5020 - Web Development
**Project:** Quick-Stop Hair Salon website

**Source repository:** [Epic-Sean1/Website – QuickStopHairSalon](https://github.com/Epic-Sean1/Website/tree/main/QuickStopHairSalon)
**Live website:** Not currently available. The previously supplied deployment URL returned a 404 when checked on 2 November 2026.

## Project overview

Quick-Stop Hair Salon is a five-page website presenting salon information, services and prices, appointment enquiries, and contact details.

## Pages

- `index.html` — homepage and salon highlights
- `about.html` — salon background and values
- `services.html` — hairstyle and hair treatment menu with prices
- `enquiry.html` — appointment enquiry form
- `contact.html` — branch details and general message form

## Features

- Shared responsive layout and navigation, styled with `css/style.css`.
- Service cards with images, category labels, and prices.
- Client-side form checks for required fields, a valid email address, a 10-digit South African phone number, and messages of at least 10 characters. Enquiry notes are optional; if entered, they must contain at least 10 non-whitespace characters.
- Inline validation feedback for invalid fields.
- `robots.txt` and `sitemap.xml` for crawler guidance. Their sitemap URLs use the expected GitHub Pages path; update and verify them after enabling deployment.

The forms currently demonstrate validation and confirmation feedback only. They do not send or store submissions because the project has no server-side form handler.

Responsive layouts use CSS media queries [2]. The forms combine HTML constraints with client-side validation feedback [1].

## Repository structure

```text
QuickStopHairSalon/
├── css/
│   └── style.css
├── images/
│   ├── box-braids.jpeg
│   ├── buzz-cut.jpeg
│   ├── buzz-fade.jpeg
│   ├── cornrows.jpeg
│   ├── deep-hair-conditioning.jpeg
│   ├── knotless-braids.jpeg
│   ├── protein-restoration.jpeg
│   ├── salon.jpeg
│   ├── scalp-treatment.jpeg
│   ├── taper-fade.jpeg
│   └── twists.jpeg
├── about.html
├── contact.html
├── enquiry.html
├── index.html
├── README.md
├── robots.txt
├── script.js
├── services.html
└── sitemap.xml
```

Proposal documents, a `Research/` directory, and responsive testing screenshots are not included in the current repository tree.

## References

1. MDN Web Docs, “Client-side form validation.” https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
2. MDN Web Docs, “Using media queries.” https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using
