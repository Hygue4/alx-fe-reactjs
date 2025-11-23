import { useState } from 'react';
import { searchUsersAdvanced, getUserDetails } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: '',
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !searchParams.username &&
      !searchParams.location &&
      !searchParams.minRepos
    ) {
      setError('Please enter at least one search criteria');
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsersAdvanced({ ...searchParams, page: 1 });
      setUsers(data.items || []);
      setHasMore(data.items && data.items.length === 10);
    } catch {
      setError('Error searching users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await searchUsersAdvanced({
        ...searchParams,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...(data.items || [])]);
      setPage(nextPage);
      setHasMore(data.items && data.items.length === 10);
    } catch {
      setError('Error loading more users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h2 className="search-title">GitHub User Search</h2>

      {/* Advanced Search Form */}
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={searchParams.username}
              onChange={handleInputChange}
              placeholder="Enter username..."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="Enter location..."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Minimum Repositories</label>
            <input
              type="number"
              name="minRepos"
              value={searchParams.minRepos}
              onChange={handleInputChange}
              placeholder="Min repos"
              className="form-input"
            />
          </div>
        </div>

        <button type="submit" disabled={loading} className="search-button">
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading State */}
      {loading && users.length === 0 && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading users...</p>
        </div>
      )}

      {/* Results */}
      {users.length > 0 && (
        <div className="results-section">
          <h3 className="results-title">
            Search Results ({users.length} users found)
          </h3>

          <div className="users-grid">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="load-more-container">
              <button
                onClick={loadMore}
                disabled={loading}
                className="load-more-button"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// User Card Component
const UserCard = ({ user }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  const fetchDetails = async () => {
    if (userDetails) return;

    setLoadingDetails(true);
    try {
      const details = await getUserDetails(user.login);
      setUserDetails(details);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div className="user-card" onClick={fetchDetails}>
      <div className="user-header">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="user-avatar"
        />
        <div className="user-basic-info">
          <h4 className="user-login">{user.login}</h4>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
            onClick={(e) => e.stopPropagation()}
          >
            View Profile
          </a>
        </div>
      </div>

      {/* Additional details when loaded */}
      {userDetails && (
        <div className="user-details">
          <div className="detail-row">
            <span className="detail-label">Name:</span>
            <span className="detail-value">
              {userDetails.name || 'Not provided'}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Location:</span>
            <span className="detail-value">
              {userDetails.location || 'Not provided'}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Public Repos:</span>
            <span className="detail-value">{userDetails.public_repos}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Followers:</span>
            <span className="detail-value">{userDetails.followers}</span>
          </div>
          {userDetails.bio && (
            <div className="user-bio">
              <strong>Bio:</strong> {userDetails.bio}
            </div>
          )}
        </div>
      )}

      {loadingDetails && (
        <div className="loading-container">
          <div
            className="loading-spinner"
            style={{ width: '30px', height: '30px' }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Search;
