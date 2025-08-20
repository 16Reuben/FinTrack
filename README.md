# FinTrack - Financial Management Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.70+-blue.svg)](https://reactnative.dev/)

## 📱 Overview

FinTrack is a comprehensive financial management application designed for small to medium businesses. Built with React Native/Expo for cross-platform mobile support and Node.js/Express for the backend, it provides complete financial tracking, customer management, supplier management, invoicing, and reporting capabilities.

## ✨ Key Features

- **💰 Financial Management**: Track income, expenses, and cash flow
- **👥 Customer Management**: Complete customer database with credit tracking
- **🏢 Supplier Management**: Supplier database with payment terms
- **📄 Invoice Management**: Create, track, and manage invoices
- **🧾 Receipt Management**: Digital receipt storage and organization
- **📊 Financial Reporting**: Profit & loss, cash flow, and dashboard reports
- **🔔 Real-time Notifications**: Stay updated on important events
- **🤖 AI Chatbot**: Intelligent financial assistance
- **🎤 Voice Analytics**: Voice-powered financial insights
- **🔐 Secure Authentication**: JWT-based authentication with role-based access

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- SQLite3

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FinTrack-main1
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Setup backend**
   ```bash
   cd backend
   npm install
   cp config.env.example config.env
   # Edit config.env with your configuration
   npm run init-db
   npm start
   ```

4. **Start the frontend**
   ```bash
   # From the root directory
   npx expo start
   ```

5. **Run on your device**
   - Install Expo Go on your mobile device
   - Scan the QR code from the terminal
   - Or run on simulator: `npx expo run:ios` or `npx expo run:android`

## 📚 Documentation

- **[📖 Complete Documentation](documentation.md)** - Comprehensive project documentation
- **[🔧 Integration Guide](INTEGRATION_GUIDE.md)** - API integration and setup
- **[👤 Profile Feature Guide](PROFILE_FEATURE_GUIDE.md)** - User profile management
- **[🧾 Receipts Feature Guide](RECEIPTS_FEATURE_GUIDE.md)** - Receipt management system
- **[🤖 AI Chatbot Setup](AI_CHATBOT_SETUP.md)** - AI assistant configuration
- **[🎤 Voice Analytics Guide](VOICE_ANALYTICS_GUIDE.md)** - Voice-powered features
- **[🔑 Token Refresh Guide](TOKEN_REFRESH_GUIDE.md)** - Authentication token management

## 🏗️ Architecture

```
FinTrack/
├── app/                    # Expo Router app directory
├── Screens/               # React Native screens
├── components/            # Reusable UI components
├── services/              # API services
├── contexts/              # React Context providers
├── utils/                 # Utility functions
├── backend/               # Node.js/Express API server
│   ├── routes/           # API route handlers
│   ├── middleware/       # Express middleware
│   ├── database/         # Database configuration
│   └── utils/            # Backend utilities
└── assets/               # Static assets
```

## 🔧 Technology Stack

### Frontend
- **React Native/Expo** - Cross-platform mobile development
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation management
- **React Context** - State management
- **Axios** - HTTP client

### Backend
- **Node.js/Express** - RESTful API server
- **SQLite** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Multer** - File uploads

## 📱 Screenshots

*[Add screenshots of your app here]*

## 🔐 Security Features

- JWT-based authentication with automatic token refresh
- Password hashing with bcrypt
- Role-based access control
- Input validation and sanitization
- Rate limiting and security headers

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
npm test
```

## 📦 Deployment

### Backend Deployment
1. Set up production environment variables
2. Configure database for production
3. Deploy to your preferred hosting service (Heroku, AWS, etc.)

### Frontend Deployment
1. Build for production: `npx expo build`
2. Submit to app stores or distribute via Expo

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the [documentation](documentation.md) first
- **Issues**: Create an issue in the repository
- **Discussions**: Use GitHub Discussions for questions

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Powered by [React Native](https://reactnative.dev/)
- Backend with [Express.js](https://expressjs.com/)

---

**Made with ❤️ for better financial management**
