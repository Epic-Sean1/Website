# Quick-Stop Hair Salon | WEDE5020 POE

**Student:** Sean Vakatsha
**Student ID:** ST10539242
**Module:** WEDE5020 - Web Development
**Project:** Quick-Stop Hair Salon website

**Source repository:** [Epic-Sean1/Website – QuickStopHairSalon](https://github.com/Epic-Sean1/Website/tree/main/QuickStopHairSalon)
**Live website:** Not currently available. The previously supplied deployment URL returned a 404 when checked on 2 November 2026.

## Project overview

Quick-Stop Hair Salon is a five-page website presenting salon information, services and prices, appointment enquiries, and contact details. Its pages use foundational HTML and CSS techniques described by Duckett (2011).

## Pages

- `index.html` — homepage and salon highlights
- `about.html` — salon background and values
- `services.html` — hairstyle and hair treatment menu with prices
- `enquiry.html` — appointment enquiry form
- `contact.html` — branch details and general message form

## Features

- Shared responsive layout and navigation, styled with Flexbox and media queries in `css/style.css` (MDN Web Docs, 2026).
- Service cards with images, category labels, and prices.
- Client-side form checks for required fields, a valid email address, a 10-digit South African phone number, and messages of at least 10 characters. Enquiry notes are optional; if entered, they must contain at least 10 non-whitespace characters (MDN Web Docs, n.d.).
- Inline validation feedback for invalid fields.
- `robots.txt` and `sitemap.xml` provide crawler guidance informed by Google Search Central's SEO recommendations (Google Search Central, 2026). Their sitemap URLs use the expected GitHub Pages path; update and verify them after enabling deployment.
- Semantic page structure, visible keyboard focus styles, and reduced-motion support are included as accessibility considerations. This project has not been evaluated for WCAG conformance (W3C, 2026).

The forms currently demonstrate validation and confirmation feedback only. They do not send or store submissions because the project has no server-side form handler.

The form checks are client-side only; client-side validation improves feedback but does not replace server-side validation (MDN Web Docs, n.d.).

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

## Image credits

The following image-to-file mappings use Harvard-style author–date citations. The Pinterest short links provided do not identify the original creators or publication dates, so the descriptive titles below are used in the author position as sources with no named author. These are descriptive labels, not verified Pinterest pin titles. A Pinterest pin may also link to a repost; attribution does not itself grant permission to reuse an image.

- Knotless braids (`images/knotless-braids.jpeg`): (*Knotless braids*, n.d.)
- Box braids (`images/box-braids.jpeg`): (*Box braids*, n.d.)
- Cornrows (`images/cornrows.jpeg`): (*Cornrows*, n.d.)
- Twists (`images/twists.jpeg`): (*Twists*, n.d.)
- Deep conditioning (`images/deep-hair-conditioning.jpeg`): (*Deep conditioning*, n.d.)
- Scalp treatment (`images/scalp-treatment.jpeg`): (*Scalp treatment*, n.d.)
- Protein restoration (`images/protein-restoration.jpeg`): (*Protein restoration*, n.d.)
- Buzz cut (`images/buzz-cut.jpeg`): (*Buzz cut*, n.d.)
- Taper fade (`images/taper-fade.jpeg`): (*Taper fade*, n.d.)
- Buzz fade (`images/buzz-fade.jpeg`): (*Buzz fade*, n.d.)

## References

Duckett, J. (2011) *HTML and CSS: Design and Build Websites*. Indianapolis: John Wiley & Sons.

*Box braids* (n.d.) [Pinterest image]. Available at: https://pin.it/1LWy2RzE8 (Accessed: 2 November 2026).

*Buzz cut* (n.d.) [Pinterest image]. Available at: https://pin.it/1Mi9Ustpd (Accessed: 2 November 2026).

*Buzz fade* (n.d.) [Pinterest image]. Available at: https://pin.it/3LMTQprJP (Accessed: 2 November 2026).

*Cornrows* (n.d.) [Pinterest image]. Available at: https://pin.it/26q1J6W6W (Accessed: 2 November 2026).

*Deep conditioning* (n.d.) [Pinterest image]. Available at: https://pin.it/9VL8nvIBc (Accessed: 2 November 2026).

Google Search Central (2026) ‘Introduction to Search Engine Optimization (SEO) Starter Guide’ [online]. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 1 November 2026).

*Knotless braids* (n.d.) [Pinterest image]. Available at: https://pin.it/3QesZPQPp (Accessed: 2 November 2026).

MDN Web Docs (2026) ‘Using CSS Flexible Boxes (Flexbox)’ [online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox (Accessed: 1 November 2026).

MDN Web Docs (n.d.) ‘Client-side form validation’ [online]. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 1 November 2026).

*Protein restoration* (n.d.) [Pinterest image]. Available at: https://pin.it/wzKqZ1BTx (Accessed: 2 November 2026).

*Scalp treatment* (n.d.) [Pinterest image]. Available at: https://pin.it/7qUphGITt (Accessed: 2 November 2026).

*Taper fade* (n.d.) [Pinterest image]. Available at: https://pin.it/3YgWAHMpw (Accessed: 2 November 2026).

*Twists* (n.d.) [Pinterest image]. Available at: https://pin.it/ZcfYZ09cO (Accessed: 2 November 2026).

W3C (2026) ‘Web Content Accessibility Guidelines (WCAG) 2.1 Overview’ [online]. Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ (Accessed: 1 November 2026).
