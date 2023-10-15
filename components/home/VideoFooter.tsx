import React from 'react';

const VideoFooter: React.FC = () => {
  return (
    <footer className="relative flex items-center justify-center h-[40rem] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </footer>
  );
};

export default VideoFooter;
