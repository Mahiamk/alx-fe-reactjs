import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = false; // Simulate authentication status

  return (
    <Routes>
      <Route path="/" element={<Home />} />
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