# Icon Updates TODO

## Issue
The current Next.js site is using Lucide React icons, but the original site uses **Font Awesome 6.5.1** icons.

## Solution
Replace all Lucide React icons with Font Awesome icons to match the original site exactly.

## Changes Needed

### 1. Add Font Awesome CDN
- [ ] Add Font Awesome CSS to layout.tsx or globals.css

### 2. Update All Pages
- [ ] Home page - Focus Areas icons
- [ ] Home page - Hero section icons
- [ ] About page - Strategic Pillars icons
- [ ] About page - Team cards social icons
- [ ] Articles page - Category icons
- [ ] Projects page - Status icons
- [ ] Contact page - Contact info icons
- [ ] Footer - Social media icons
- [ ] Footer - Contact info icons
- [ ] Navbar - Mobile menu icon, theme toggle icon
- [ ] ScrollToTop button icon
- [ ] StayInformed section icons

### 3. Remove Lucide React
- [ ] Remove lucide-react imports from all components
- [ ] Replace with Font Awesome class names

## Font Awesome Classes Found
- `fas fa-moon` - Theme toggle
- `fas fa-bars` - Mobile menu
- `fas fa-users` - Users icon
- `fas fa-book` - Book icon
- `fas fa-balance-scale` - Balance/scale icon
