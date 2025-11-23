import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Conditional rendering based on state */}
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            border: '1px solid #ccc',
          }}
        >
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            width="100"
            height="100"
            style={{ borderRadius: '50%' }}
          />
          <h3>{userData.name || userData.login}</h3>
          <p>
            <strong>Username:</strong> {userData.login}
          </p>
          {userData.bio && (
            <p>
              <strong>Bio:</strong> {userData.bio}
            </p>
          )}
          <p>
            <strong>Followers:</strong> {userData.followers}
          </p>
          <p>
            <strong>Following:</strong> {userData.following}
          </p>
          <p>
            <strong>Public Repos:</strong> {userData.public_repos}
          </p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
