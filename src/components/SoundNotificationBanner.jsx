import React from 'react';

const SoundNotificationBanner = () => {
  return (
    <div className="bg-red-600 text-center py-2">
      <p className="text-white text-sm font-bold">
        <img src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/volume-sound-speaker-lound-512.png" alt="Volume Icon" className="inline-block w-4 h-4 mr-2" />
        Make Sure Your Sound Is Turned ON!
      </p>
    </div>
  );
};

export default SoundNotificationBanner;