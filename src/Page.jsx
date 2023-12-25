import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SoundNotificationBanner from './components/SoundNotificationBanner';
import VideoPlaceholder from './components/VideoPlaceholder';
import EmailSignupForm from './components/EmailSignupForm';
import CourseDetails from './components/CourseDetails';
import BonusSection from './components/BonusSection';
import YouWillLearn from './components/YouWillLearn';
import ValueStack from './components/ValueStack';
const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SoundNotificationBanner />
      <VideoPlaceholder />
      <EmailSignupForm />
      <CourseDetails />
      <YouWillLearn />
      <BonusSection />
      <ValueStack/>
    </div>
  );
};

export default Page;