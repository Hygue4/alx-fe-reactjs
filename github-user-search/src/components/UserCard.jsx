import { useState } from 'react';
import { getUserDetails } from '../services/githubService';

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
    <div
      className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500"
      onClick={fetchDetails}
    >
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-800">{user.login}</h4>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            View Profile
          </a>
        </div>
      </div>

      {/* Additional details when loaded */}
      {userDetails && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="font-medium text-gray-600">Name:</span>
              <span className="text-gray-800">
                {userDetails.name || 'Not provided'}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium text-gray-600">Location:</span>
              <span className="text-gray-800">
                {userDetails.location || 'Not provided'}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium text-gray-600">Public Repos:</span>
              <span className="text-gray-800">{userDetails.public_repos}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium text-gray-600">Followers:</span>
              <span className="text-gray-800">{userDetails.followers}</span>
            </p>
            {userDetails.bio && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="font-medium text-gray-600 mb-1">Bio:</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {userDetails.bio}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {loadingDetails && (
        <div className="mt-4 text-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
