# CROWN Tech Services - E-commerce Platform

A comprehensive e-commerce platform developed as a group project by Amair, Bikram, Kewal, and Nabin.

## 🚀 Live Demo

Visit our live application: [CROWN Tech Services](https://your-netlify-url.netlify.app)

## 👥 Team Members

- **Amair** - UI/UX Designer & Frontend Lead (Landing Page, Product Page)
- **Bikram** - Security & Authentication Lead (Registration, Login Pages)
- **Kewal** - Cart & Checkout Specialist (Cart Page, Checkout Page)
- **Nabin** - Admin & Backend Lead (Admin Page, CRUD Operations)

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## ✨ Features

### User Features
- 🛍️ Browse and search products with advanced filtering
- 🛒 Shopping cart management with persistent storage
- 👤 User registration and secure login system
- 💳 Complete checkout process with form validation
- 📊 User dashboard with profile management
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design

### Admin Features
- 📈 Admin dashboard with comprehensive statistics
- 📦 Product management with full CRUD operations
- 🖼️ Image handling for product listings
- 📊 Stock management and category organization

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd crown-tech-services
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🔐 Demo Credentials

### Admin Access
- **Email**: admin@crowntech.com
- **Password**: admin123

### User Access
- Register a new account or use any registered email

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Navigation, Footer, ScrollToTop
│   └── Product/        # Product-related components
├── contexts/           # React Context providers
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   ├── ProductContext.tsx
│   └── ThemeContext.tsx
├── pages/              # Page components
│   ├── LandingPage.tsx
│   ├── ProductPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── RegisterPage.tsx
│   ├── LoginPage.tsx
│   ├── UserDashboard.tsx
│   ├── AdminPage.tsx
│   └── AboutPage.tsx
└── App.tsx             # Main application component
```

## 🎯 Key Accomplishments

- **100% Client-Side**: No backend database required
- **Persistent Data**: Uses localStorage for data persistence
- **Security**: Implements authentication and form validation
- **Responsive**: Mobile-first design approach
- **Accessible**: Follows web accessibility guidelines
- **Modern**: Uses latest React and TypeScript features

## 🔧 Deployment on Netlify

This project is configured for easy deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

The `netlify.toml` file contains all necessary configuration.

## 📝 License

This project is developed for educational purposes as part of a group assignment.

## 🙏 Acknowledgments

- Images: [Pexels](https://pexels.com) - Royalty-free stock photos
- Icons: [Lucide React](https://lucide.dev) - Beautiful & consistent icons
- CSS Framework: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

---

**© 2024 CROWN Tech Services** - Developed with ❤️ by Aamir, Bikram, Kewal, and Nabin
