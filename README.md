# User Management - Remote Application

Remote micro-frontend for managing users in the WeBoc Transformation platform.

## 🏗️ Architecture

### Folder Structure
```
src/
├── config/             # Application configuration
├── data/               # Mock data and constants
├── services/           # Business logic and API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main application component
├── AppWithStyles.tsx   # Wrapper with CSS imports
└── Bootstrap.tsx       # Bootstrap entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16.x
- npm >= 8.x
- Host application running on port 5000

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file:
```env
NODE_ENV=development
REMOTE_CUSTOM_MAIN_URL=http://localhost:5000/remoteEntry.js
REMOTE_PORT=5001
PUBLIC_PATH=http://localhost:5001/
```

### Development
```bash
npm start
```

## 📦 Module Federation

This remote application:
- Exposes: `./UserApp` - Main user management application
- Consumes: Shared components from custom-main host

## 🛠️ Tech Stack
- React 19
- TypeScript
- Tailwind CSS (from host)
- Webpack 5 (Module Federation)

## 🔗 Dependencies
- Host application (custom-main) must be running
- Shared components imported from host
