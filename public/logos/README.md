# Logo Files Guide

Place your company and university logos in this folder.

## Required Logo Files

### Company Logos (Experience Section)
1. `jung-talents.png` - Jung Talents logo
2. `opswat.png` - OPSWAT Software Vietnam logo
3. `tma-solutions.png` - TMA Solutions logo

### University Logos (Education Section)
4. `university-of-design.png` - University of Design logo
5. `state-university.png` - State University logo

## Logo Guidelines

### Format
- **Preferred formats**: `.png` (with transparent background), `.jpg`, `.svg`, or `.webp`
- **Transparent background** recommended for best results

### Size
- **Recommended size**: 200x200px or larger (square)
- The images will be automatically resized to 48x48px in the UI
- Circular shape will be applied automatically

### Tips
- Use high-resolution logos for crisp display
- Square logos work best (they'll be cropped to circle)
- If the logo has text, make sure it's readable when small
- You can find company/university logos:
  - On their official websites (usually in press kits or about pages)
  - LinkedIn company pages
  - Google "company name logo png"

## Example
If you download a Jung Talents logo, save it as:
```
portfolio/public/logos/jung-talents.png
```

The app will automatically display the logo when it finds the file. If the file is missing, it will show the company/institution initials as a fallback.

## Need Different Filenames?
If your logo files have different names, update them in:
`portfolio/src/data/portfolio.ts`

Look for the `logo: "/logos/your-filename.png"` properties.
