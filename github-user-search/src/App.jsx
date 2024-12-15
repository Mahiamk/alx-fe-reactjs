import { useState } from 'react';
import GitHubUserProfile from './components/userProfile';

const App = () => {
  const [username, setUsername] = useState('octocat');  // Default username

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginRight: '10px',
        }}
      />
      <GitHubUserProfile username={username} />
    </div>
  );
};

export default App;
