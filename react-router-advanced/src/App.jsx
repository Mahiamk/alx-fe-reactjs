import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './pages/BlogPost';

function App() {
  const isAuthenticated = false; // Simulate authentication status

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
    
  );
}
export default App;