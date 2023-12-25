import React from 'react';
import cameraEquipmentImg from './images/cameraEquipment.png';
import cameraSettingsImg from './images/cameraSettings.png';
import lighting101Img from './images/lighting101.png';
import compositionImg from './images/composition.png';
import cameraAnglesImg from './images/cameraAngles.png';
import cameraMovementsImg from './images/cameraMovements.png';
import focalLengthImg from './images/focalLength.png';
import audioImg from './images/audio.png';
import editingImg from './images/editing.png';
import editingBusinessImg from './images/editingBusiness.png';

const YouWillLearn = () => {
  const topics = [
    { title: 'CAMERA EQUIPMENT', description: 'What CAMERA GEAR Should I Buy in 2022?', imgSrc: cameraEquipmentImg },
    { title: 'CAMERA SETTINGS', description: 'Best Camera SETTINGS For A Cinematic Look', imgSrc: cameraSettingsImg },
    { title: 'LIGHTING 101', description: 'LIGHTING 101 - #1 Secret to Cinematic Footage', imgSrc: lighting101Img },
    { title: 'COMPOSITION', description: 'My 10 Rules of COMPOSITION', imgSrc: compositionImg },
    { title: 'CAMERA ANGLES', description: '12 Camera ANGLES To Enhance Your Films', imgSrc: cameraAnglesImg },
    { title: 'CAMERA MOVEMENTS', description: 'My Top 10 Cinematic Gimbal MOVEMENTS', imgSrc: cameraMovementsImg },
    { title: 'FOCAL LENGTH', description: 'FOCAL LENGTH (What Lens to Use?)', imgSrc: focalLengthImg },
    { title: 'AUDIO', description: 'Top 10 AUDIO Mistakes Rookies Make', imgSrc: audioImg },
    { title: 'EDITING', description: 'Top 10 EDITING Mistakes Rookies Make', imgSrc: editingImg },
    { title: 'EDITING BUSINESS', description: '6 Steps to Making $100,000/Year', imgSrc: editingBusinessImg },
  ];

  return (
    <div className="flex justify-center bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full md:w-2/3">
        <h1 className="text-center text-white font-extrabold text-4xl py-4 px-4 col-span-full">IN YOUR 10 DAY STARTER COURSE YOU WILL LEARN:</h1>
        {topics.map((topic, index) => (
          <div key={index} className="p-4 bg-gray-700">
            <h2 className="text-center text-white font-extrabold text-2xl py-2 bg-[#C52625] mx-auto block w-full">{topic.title}</h2>
            <div className="flex justify-center py-4">
              <img src={topic.imgSrc} alt={topic.title} />
            </div>
            <p className="text-center text-white font-bold">{topic.description}</p>
          </div>
        ))}
        <div className="col-span-full">
          {/* Your tenth item here */}
        </div>
      </div>
    </div>
  );
};

export default YouWillLearn;