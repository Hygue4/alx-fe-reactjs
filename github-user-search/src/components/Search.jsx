import { useState } from 'react';
import { searchUsersAdvanced, fetchUserData } from '../services/githubService';
import UserCard from './UserCard';

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

  // Function that uses fetchUserData for simple search
  const handleSimpleSearch = async (e) => {
    e.preventDefault();
    if (!searchParams.username.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);
    setPage(1);

    try {
      // Use fetchUserData for simple username search
      const userData = await fetchUserData(searchParams.username);
      setUsers([userData]); // Convert single user to array
      setHasMore(false);
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        GitHub User Search
      </h2>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={searchParams.username}
              onChange={handleInputChange}
              placeholder="Enter username..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="Enter location..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Repositories
            </label>
            <input
              type="number"
              name="minRepos"
              value={searchParams.minRepos}
              onChange={handleInputChange}
              placeholder="Min repos"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Two buttons - one using fetchUserData, one using searchUsersAdvanced */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleSimpleSearch}
            disabled={loading || !searchParams.username}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-green-300 transition-colors"
          >
            {loading ? 'Searching...' : 'Simple Search'}
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300 transition-colors"
          >
            {loading ? 'Searching...' : 'Advanced Search'}
          </button>
        </div>
      </form>

      {/* Error and Loading States */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading && users.length === 0 && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading users...</p>
        </div>
      )}

      {/* Results */}
      {users.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Search Results ({users.length} users found)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                disabled={loading}
                className="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:bg-gray-300 transition-colors"
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

export default Search;
