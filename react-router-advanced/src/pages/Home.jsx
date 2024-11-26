import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/profile">Go to Profile</Link></li>
          <li><Link to="/post/123">View Blog Post 123</Link></li>
          <li><Link to="/post/456">View Blog Post 456</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
