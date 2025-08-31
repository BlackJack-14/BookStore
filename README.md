# BookStore 📚

A full-stack web application for managing an online bookstore with user authentication, book management, and recommendation features.

## Features

- **User Management**: Registration, login, and password reset with admin authentication
- **Book Catalog**: Complete CRUD operations for books with search and filtering
- **Google Books API Integration**: Search and import books from Google Books
- **Recommendation System**: Users can suggest books for the store
- **Admin Panel**: Special admin interface for managing books and users
- **Caching**: Redis integration for improved performance
- **Responsive Design**: Modern UI with Material-UI components

## Technology Stack

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **Redis** for caching
- **bcrypt** for password hashing
- **CORS** for cross-origin requests
- **Compression** middleware for optimized responses

### Frontend
- **React 18** with modern hooks
- **Vite** for fast development and building
- **Material-UI (MUI)** for component library
- **React Router** for navigation
- **Axios** for API communication
- **React Hot Toast** for notifications

## Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Redis server
- npm or yarn package manager

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/BlackJack-14/BookStore.git
cd BookStore
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the backend directory:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
REDIS_URL=redis://127.0.0.1:6379
NODE_ENV=development
```

Update `backend/config.js` with your MongoDB URL:
```javascript
export const PORT = 8000;
export const mongoDBURL = 'your_mongodb_connection_string';
```

### 4. Start the Services

Make sure MongoDB and Redis are running on your system.

#### Development Mode (Recommended)
```bash
# From the root directory - starts both backend and frontend
npm run dev
```

#### Manual Start
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory) 
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

## API Endpoints

### Books
- `GET /books` - Get all books (with Redis caching)
- `GET /books/reset` - Reset cache and fetch from database
- `GET /books/:isbn` - Get book by ISBN
- `POST /books` - Add new book (admin only)
- `PUT /books/:isbn` - Update book by ISBN
- `DELETE /books/:isbn` - Delete book by ISBN

### Users
- `POST /users/register` - Register new user (requires admin code: 8888)
- `POST /users/login` - User login
- `POST /users/forgotPassword` - Reset password (requires admin code)

### Recommendations
- `GET /recommendations/:user` - Get user recommendations
- `POST /recommendations` - Create new recommendation
- `PUT /recommendations/:user` - Update recommendation
- `DELETE /recommendations/:user` - Delete recommendation

## Usage

### User Registration
1. Navigate to the registration page
2. Enter email, password, and admin code (8888)
3. Submit to create account

### Admin Features
- Login with admin email (admin@gmail.com)
- Access admin panel for book management
- Add books manually or search Google Books API
- Manage user recommendations

### Book Management
- Search books by title, author, or publication year
- Add books with complete metadata (Title, Author, Year, ISBN, Image, Amazon URL)
- Edit existing book information
- Delete books from catalog

### Recommendations
- Users can recommend books to be added to the store
- Admins can view and manage recommendations
- Track recommendation status and descriptions

## Project Structure

```
BookStore/
├── backend/
│   ├── models/
│   │   ├── bookModel.js          # Book schema
│   │   ├── userModel.js          # User schema
│   │   └── suggestedBookModel.js # Recommendation schema
│   ├── routes/
│   │   ├── bookRoute.js          # Book API routes
│   │   ├── userRoute.js          # User API routes
│   │   └── suggestedBookRoute.js # Recommendation routes
│   ├── utils/
│   ├── config.js                 # Database configuration
│   └── index.js                  # Main server file
├── frontend/
│   ├── src/
│   │   ├── Components/           # Reusable React components
│   │   ├── pages/               # Page components
│   │   │   ├── adminHomePage/   # Admin dashboard
│   │   │   ├── homePage.jsx     # User home page
│   │   │   ├── loginPage/       # Authentication
│   │   │   ├── addBookPage/     # Add new books
│   │   │   ├── editBookPage/    # Edit existing books
│   │   │   └── recommendationPage/ # Book recommendations
│   │   ├── App.jsx              # Main app component
│   │   └── main.jsx             # React entry point
│   └── package.json
└── package.json                 # Root package.json
```

## Development

### Running Tests
```bash
npm test
```

### Linting (Frontend)
```bash
cd frontend
npm run lint
```

### Building for Production
```bash
cd frontend
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Notes

- Admin code for registration and password reset: `8888`
- Default admin email: `admin@gmail.com`
- Books are cached in Redis for 1 hour to improve performance
- Google Books API integration allows importing book data automatically