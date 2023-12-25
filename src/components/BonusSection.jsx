import React from 'react';
import KeyboardEditingShortcuts from '../images/KeyboardEditingShortcuts.png';
import TheFTFEBookTrilogy from '../images/TheFTFEBookTrilogy.png';
import SoundEffectsLibrary from '../images/SoundEffectsLibrary.png';
import OrangeTealLUT from '../images/OrangeTealLUT.png';
import SignatureSetSavers from '../images/SignatureSetSavers.png';
import RevenueMasterclass from '../images/RevenueMasterclass.png';

const BonusSection = () => {
  const bonuses = [
    {
      title: 'Keyboard Editing Shortcuts',
      value: '$30.00',
      imgSrc: KeyboardEditingShortcuts
    },
    {
      title: 'The FTF E-Book Trilogy',
      value: '$50.00',
      imgSrc: TheFTFEBookTrilogy
    },
    {
      title: '100+ Sound Effects Library',
      value: '$100.00',
      imgSrc: SoundEffectsLibrary
    },
    {
      title: 'Orange & Teal LUT',
      value: '$10.00',
      imgSrc: OrangeTealLUT
    },
    {
      title: '7 Signature Set Savers',
      value: '$10.00',
      imgSrc: SignatureSetSavers
    },
    {
      title: 'My 10 Sources Of Revenue Masterclass',
      value: '$50.00',
      imgSrc: RevenueMasterclass
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src="https://pic.onlinewebfonts.com/thumbnails/icons_26521.svg" alt="Bonus Icon" className="rounded-t-lg" style={{width: '100px', height: '100px'}} />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-semibold mb-2 text-center text-black">6 BONUSES:</h3>
              </div>
              {bonuses.map((bonus, index) => (
                <div key={index} className="border border-black rounded-lg mb-4">
                  <div className="bg-black text-white text-2xl p-2 text-center" style={{fontWeight: 'normal'}}><strong>Bonus #{index + 1}:</strong> {bonus.title}</div>
                  <div className="text-red-600 text-2xl font-bold text-center">Total Value: {bonus.value}</div>
                  <div className="flex justify-center">
                    <img src={bonus.imgSrc} alt="Bonus Image" className="rounded-t-lg" style={{width: 'auto', height: '200px'}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;