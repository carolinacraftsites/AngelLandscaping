# Angel Landscaping LLC - Design Guidelines

## Design Approach
**Reference-Based: Local Service Business**
Drawing inspiration from trusted service providers like HomeAdvisor, Angi, and successful local contractor websites. Focus on trust-building, clear service presentation, and frictionless contact conversion.

## Core Design Principles
1. **Trust First**: Professional appearance that builds immediate credibility
2. **Conversion Optimized**: Every page should guide toward contact
3. **Mobile Priority**: Most users will be on mobile devices seeking quick estimates
4. **Visual Proof**: Natural imagery showcasing quality workmanship

## Typography
- **Primary Font**: Inter or Poppins (Google Fonts) - clean, professional, highly legible
- **Headings**: Semi-bold to bold weights (600-700)
- **Body**: Regular weight (400), line-height 1.6 for readability
- **Hierarchy**: 
  - H1: 2.5rem desktop / 2rem mobile
  - H2: 2rem desktop / 1.75rem mobile
  - H3: 1.5rem desktop / 1.25rem mobile
  - Body: 1rem base

## Layout System
**Spacing Units**: Tailwind classes using 4, 6, 8, 12, 16, 20, 24 (e.g., p-8, mb-12, py-20)
- Section padding: py-16 mobile, py-24 desktop
- Component spacing: mb-8 to mb-12
- Container: max-w-7xl with px-4 mobile, px-8 desktop

## Page Structure

### Homepage
**Hero Section** (80vh minimum):
- Full-width background image: Well-maintained lawn or completed stonework project
- Centered overlay content with subtle backdrop blur on button
- H1: "Angel Landscaping LLC"
- Prominent subheader badge: "Free Estimates • Fully Insured"
- Primary CTA: "Request a Free Estimate" + Secondary: "Call Now (828-713-4546)" with click-to-call
- Buttons have blurred backgrounds when over images

**Introduction Section**:
- Single column, centered, max-w-3xl
- Brief intro paragraph with trust indicators

**Services Preview**:
- 2-column grid on desktop, stack on mobile
- 6 featured services with icons (Heroicons - outline style)
- Each card: icon, service name, one-line description
- "View All Services" CTA at bottom

**Social Proof/Trust Section**:
- "Fully Insured & Experienced" messaging
- Years of experience highlight
- Service area callout: "Serving Western North Carolina"

**Contact CTA Section**:
- High-contrast background treatment
- Large heading: "Ready to Transform Your Property?"
- Dual CTAs: Primary estimate button + phone number display

### Services Page
**Header**:
- Page title: "Our Services"
- Brief intro: "Comprehensive landscaping and home improvement solutions"

**Service Grid Layout**:
- Two distinct category sections
- Desktop: 2-column layout per category (4 total columns)
- Mobile: Stack to single column
- Each service card includes:
  - Icon from Heroicons (home, wrench, paint-brush, etc.)
  - Service name as H3
  - One-sentence description (85-100 characters)
  - Subtle card hover state (transform and shadow)

**Category Headers**:
- "Landscaping & Exterior Services" 
- "Construction & Home Improvements"
- Each with decorative accent line

### About Section
**Layout**:
- 2-column on desktop: Text left, placeholder for owner photo right
- Single column mobile
- Professional headshot placeholder: 400x500px aspect ratio
- Quote treatment: "Known for reliable communication, quality work, and attention to detail"

### Contact Page
**Split Layout** (desktop):
- Left: Contact information display
  - Large phone number with click-to-call
  - Email with mailto: link
  - Business hours (if applicable)
  - "Free Estimates" badge
- Right: Contact form

**Form Design**:
- Clean, spacious fields with clear labels
- Field order: Name, Email, Phone, Message (textarea)
- Large, prominent submit button: "Send Message"
- Form validation with clear error states

### Footer
**Multi-column layout** (desktop 3-col, mobile stack):
- Column 1: Business name, tagline
- Column 2: Quick contact (phone, email)
- Column 3: "Free Estimates • Fully Insured"
- Bottom bar: Copyright, service area mention

## Component Library

### Buttons
- Primary: Large padding (px-8 py-4), rounded-lg, bold text
- Secondary: Outlined style with hover fill
- When over images: backdrop-blur-sm with semi-transparent background
- Mobile: Full-width on small screens for CTAs

### Cards
- Service cards: Subtle border, rounded-lg, p-6, hover lift effect
- Consistent spacing: icon mb-4, title mb-2, description

### Navigation
- Desktop: Horizontal links in header (Home, Services, About, Contact)
- Mobile: Hamburger menu with slide-out drawer
- Sticky header on scroll with reduced height
- "Request Estimate" button always visible in nav

### Icons
- **Icon Library**: Heroicons (outline style for consistency)
- Icon sizing: w-8 h-8 for service cards, w-6 h-6 for UI elements

## Images
**Required Images**:
1. **Hero Background**: High-quality photo of completed lawn/landscape work - 1920x1080px minimum, focal point center
2. **Service Category Images**: Optional accent images for each service category section
3. **About Section**: Professional photo placeholder for owner - 400x500px portrait orientation
4. **Background Textures**: Subtle texture overlays for section variety (optional)

All images should showcase completed work, well-maintained properties, natural outdoor settings. Use WebP format for performance.

## Accessibility
- Click-to-call phone links on mobile
- Form labels explicitly connected to inputs
- Sufficient contrast ratios for all text
- Focus states on all interactive elements
- Alt text for all images describing the work shown

## Mobile Optimization
- Touch-friendly button sizes (min 44x44px)
- Simplified navigation
- Click-to-call and click-to-email functionality
- Form fields optimized for mobile keyboards
- Reduced motion considerations

## Performance
- Lazy-load below-fold images
- Optimized image formats (WebP)
- Minimal animation (fade-in on scroll only)
- Fast form submission feedback