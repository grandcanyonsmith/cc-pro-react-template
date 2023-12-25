import React, { useState } from 'react';

const EmailSignupForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      // Handle the form submission, e.g., sending the email to a server
      console.log('Form submitted with email:', email);
      // await sendEmailToServer(email);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="lg:w-1/2 lg:pl-4 lg:flex lg:flex-col lg:justify-center">
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="block w-full rounded-md border-0 py-1.5 px-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
              placeholder="Your best email (to send you the starter course)"
              required
              aria-required="true"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-700 transition-colors duration-200"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Download Now For Just $27! 👉'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default EmailSignupForm;