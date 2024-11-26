import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Simulating an authentication hook
function useAuth() {
  // Replace this with real authentication logic
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the home page if not authenticated
    return <Navigate to="/" />;
  }

  return children;
}

// PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
