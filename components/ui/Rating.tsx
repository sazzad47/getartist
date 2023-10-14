import React from 'react';

interface RatingProps {
  rating: number; // A number from 1 to 5
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Validate the rating value to ensure it's between 1 and 5
  const validatedRating = Math.min(5, Math.max(1, rating));

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    // Determine the fill color based on the current star's position and the rating
    const starColorClass = i <= validatedRating ? 'text-gray-900' : 'text-gray-300 dark:text-gray-500';

    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${starColorClass}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  }

  return <div className="flex items-center space-x-1">{stars}</div>;
};

export default Rating;
