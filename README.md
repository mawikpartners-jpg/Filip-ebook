# Best-Investments E-book Landing Page

A modern, responsive landing page for selling the e-book "Sprzedaż mieszkania krok po kroku, zrób to sam i oszczędź pieniądze" by best-investments.

## 🚀 Features

- **Modern Tech Stack**: Built with Vite, React, TypeScript, and Tailwind CSS
- **Stripe Integration**: Secure payment processing with Stripe Checkout
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Lightning-fast load times with Vite
- **Type Safety**: Full TypeScript support for robust code

## 📋 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with branding
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── Benefits.tsx        # Key benefits grid
│   │   ├── About.tsx           # E-book contents and chapters
│   │   ├── Pricing.tsx         # Pricing section with Stripe integration
│   │   ├── Testimonials.tsx    # Customer testimonials
│   │   └── Footer.tsx          # Footer with contact info
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── utils/
│   │   └── stripe.ts           # Stripe utilities and checkout logic
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles and Tailwind directives
├── public/                     # Static assets
├── index.html                  # HTML entry point
└── package.json               # Project dependencies
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Filip\ ebook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Stripe publishable key:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🔧 Configuration

### Tailwind CSS

The project uses custom colors defined in `tailwind.config.js`:
- `primary`: #000000 (black)
- `secondary`: #f0c976 (gold)

### Stripe Integration

The Stripe integration is located in `src/utils/stripe.ts`. To fully implement payment processing:

1. **Get Stripe API Keys**
   - Sign up at [stripe.com](https://stripe.com)
   - Get your publishable key from the dashboard
   - Add it to your `.env` file

2. **Set up Backend** (Required for production)
   
   You'll need a backend server to:
   - Create Stripe Checkout Sessions
   - Handle webhook events
   - Deliver the e-book after successful payment

   Example backend endpoint structure:
   ```javascript
   POST /api/create-checkout-session
   - Creates a Stripe Checkout Session
   - Returns session ID
   
   POST /api/webhook
   - Handles Stripe webhook events
   - Sends e-book on successful payment
   ```

3. **Update Frontend**
   
   In `src/utils/stripe.ts`, replace the mock API call with your actual backend URL:
   ```typescript
   const response = await fetch('YOUR_BACKEND_URL/api/create-checkout-session', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ priceId }),
   });
   ```

4. **Create Stripe Product**
   - Go to Stripe Dashboard → Products
   - Create a product for your e-book (197 zł)
   - Copy the Price ID
   - Update it in `src/components/Pricing.tsx`:
     ```typescript
     await handleCheckout('price_YOUR_ACTUAL_PRICE_ID');
     ```

## 📝 Customization

### Content Updates

1. **E-book Title**: Update in `index.html` and throughout components
2. **Pricing**: Modify in `src/components/Pricing.tsx`
3. **Benefits**: Edit the `benefits` array in `src/components/Benefits.tsx`
4. **Chapters**: Update the `chapters` array in `src/components/About.tsx`
5. **Testimonials**: Modify the `testimonials` array in `src/components/Testimonials.tsx`
6. **Contact Info**: Update in `src/components/Footer.tsx`

### Styling

All styles use Tailwind CSS classes. To customize:
- Update colors in `tailwind.config.js`
- Modify component styles directly in the TSX files
- Add custom CSS in `src/index.css`

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the `dist` folder
```

### Other Platforms

Build the project and deploy the `dist` folder to any static hosting service:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Google Firebase Hosting

**Important**: Make sure to set environment variables on your hosting platform!

## 📊 SEO & Analytics

The page includes:
- Meta description
- Open Graph tags
- Semantic HTML structure

To add Google Analytics:
1. Get your tracking ID
2. Add the script to `index.html`

## 🔒 Security Notes

- Never commit `.env` files with real API keys
- Always use environment variables for sensitive data
- Implement proper backend validation for payments
- Use Stripe webhooks to verify payments server-side

## 📄 License

This project is private and proprietary to best-investments.

## 🤝 Support

For issues or questions, contact: kontakt@best-investments.pl

## 🎨 Design

- **Color Scheme**: Black (#000000) and Gold (#f0c976)
- **Typography**: System fonts for optimal performance
- **Layout**: Mobile-first responsive design
- **Icons**: Emoji icons for universal compatibility

## ✅ Checklist for Production

- [ ] Replace Stripe test keys with production keys
- [ ] Set up backend for Stripe integration
- [ ] Configure webhook endpoints
- [ ] Implement e-book delivery system
- [ ] Test payment flow end-to-end
- [ ] Add Google Analytics
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure CDN for static assets
- [ ] Test on multiple devices and browsers
- [ ] Set up SSL certificate
- [ ] Create privacy policy page
- [ ] Create terms of service page
- [ ] Set up email notifications
- [ ] Test refund process

---

Built with ❤️ by best-investments