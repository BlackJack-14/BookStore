# 📚 BookStore

A modern full-stack web application for managing an online book store with user authentication, book recommendations, and admin functionality.

## 🌟 Features

### For Users
- **User Authentication**: Secure registration, login, and password reset
- **Book Browsing**: View and search through the book catalog
- **Book Recommendations**: Get personalized book suggestions
- **Responsive Design**: Optimized for desktop and mobile devices

### For Administrators
- **Book Management**: Add, edit, and delete books from the catalog
- **User Management**: Manage user accounts and permissions
- **Admin Dashboard**: Comprehensive overview of the book store
- **Inventory Control**: Monitor and update book information

### Technical Features
- **Caching**: Redis-powered caching for improved performance
- **Real-time Updates**: Live data synchronization
- **Security**: Password hashing and secure authentication
- **API Documentation**: RESTful API endpoints
- **Error Handling**: Comprehensive error management and user feedback

## 🛠 Technology Stack

### Backend
- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Caching**: Redis for performance optimization
- **Authentication**: bcrypt for password hashing
- **Middleware**: CORS, compression, and logging

### Frontend
- **Framework**: React 18 with Vite build tool
- **UI Library**: Material-UI (MUI) components
- **Routing**: React Router for navigation
- **HTTP Client**: Axios for API communication
- **Notifications**: React Hot Toast for user feedback
- **Styling**: CSS modules and Material-UI theming

## 📁 Project Structure

```
BookStore/
├── backend/                 # Server-side application
│   ├── models/             # Database models
│   │   ├── bookModel.js    # Book schema
│   │   ├── userModel.js    # User schema
│   │   └── suggestedBookModel.js # Recommendations schema
│   ├── routes/             # API routes
│   │   ├── bookRoute.js    # Book CRUD operations
│   │   ├── userRoute.js    # User authentication
│   │   └── suggestedBookRoute.js # Recommendations
│   ├── utils/              # Utility functions
│   │   └── redisClient.js  # Redis configuration
│   ├── config.js           # Application configuration
│   └── index.js           # Server entry point
├── frontend/               # Client-side application
│   ├── src/
│   │   ├── Components/     # Reusable React components
│   │   ├── pages/         # Application pages
│   │   │   ├── homePage.jsx
│   │   │   ├── adminHomePage/
│   │   │   ├── loginPage/
│   │   │   ├── addBookPage/
│   │   │   └── ...
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   └── public/            # Static assets
└── package.json           # Root package configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- MongoDB (local installation or cloud service)
- Redis (local installation or cloud service)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BlackJack-14/BookStore.git
   cd BookStore
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies (for concurrent development)
   npm install

   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   cd ..
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   REDIS_URL=redis://127.0.0.1:6379
   NODE_ENV=development
   ```
   
   **Note**: The MongoDB URL is currently hardcoded in `backend/config.js` as 'mongourl'. You may need to update this to your actual MongoDB connection string.

   Create a `.env` file in the `frontend` directory:
   ```env
   VITE_SERVER_URI=http://localhost:8000
   ```

4. **Database Setup**
   - Ensure MongoDB is running on your system
   - Ensure Redis is running on your system
   - The application will automatically create the necessary collections

### 🏃‍♂️ Running the Application

#### Development Mode (Both services)
```bash
# From the root directory
npm run dev
```
This command runs both backend and frontend concurrently.

#### Individual Services
```bash
# Backend only (from backend directory)
cd backend
npm run dev

# Frontend only (from frontend directory)
cd frontend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000

## 📚 API Endpoints

### Books
- `GET /books` - Get all books (with Redis caching)
- `GET /books/reset` - Reset cache and fetch from database
- `GET /books/:isbn` - Get book by ISBN
- `POST /books` - Add new book (Admin only)
- `PUT /books/:isbn` - Update book (Admin only)
- `DELETE /books/:isbn` - Delete book (Admin only)

### Users
- `POST /users/register` - Register new user (requires admin code)
- `POST /users/login` - User login
- `POST /users/forgotPassword` - Reset password (requires admin code)

### Recommendations
- `GET /recommendations` - Get book recommendations
- `POST /recommendations` - Create recommendation
- `PUT /recommendations/:id` - Update recommendation
- `DELETE /recommendations/:id` - Delete recommendation

## 🔧 Configuration

### Backend Configuration (config.js)
```javascript
export const PORT = 8000;
export const mongoDBURL = 'your-mongodb-url';
```

**Important**: Update the `mongoDBURL` in `backend/config.js` with your actual MongoDB connection string.

### Admin Code
The application uses an admin code (`8888`) for:
- User registration
- Password reset operations
- Admin-level functionality

This code is currently hardcoded and should be changed for production use.

### Frontend Configuration
The frontend uses environment variables for API communication:
- `VITE_SERVER_URI`: Backend server URL

## 👥 User Roles

### Regular Users
- Browse book catalog
- View book details
- Access recommendations

### Administrators
- All user permissions
- Add, edit, and delete books
- Manage user accounts
- Access admin dashboard
- Requires admin code (8888) for registration

## 🔒 Security Features

- Password hashing with bcrypt
- Admin code verification for sensitive operations
- CORS configuration for cross-origin requests
- Input validation and sanitization
- Error handling without sensitive information exposure

## 🎨 UI Features

- **Material-UI Components**: Modern and accessible design
- **Responsive Layout**: Works on all device sizes
- **Real-time Notifications**: Toast messages for user feedback
- **Form Validation**: Client-side validation with error states
- **Loading States**: Visual feedback during API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

BlackJack-14

## 🐛 Known Issues

- Frontend build may fail due to missing CSS module files in some page components
- Some npm packages have security vulnerabilities that can be addressed with `npm audit fix`

## 🐛 Issues and Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Reading! 📖**