import React from 'react';

const ValueStack = () => {
  const items = [
    { title: '30-Day Crash Course', value: '$497 Value' },
    { title: 'Simplified Superhero Anatomy', value: '$139 Value' },
    { title: 'Drawing Comic Book Style Females', value: '$129 Value' },
    { title: 'Drawing Gestures and Dynamic Poses', value: '$129 Value' },
    { title: 'Drawing Expressive Faces for Comics', value: '$99 Value' },
    { title: 'Bonus: The Comic Art Companion Checklist', value: 'Priceless Value' },
  ];

  return (
    <section className="value-stack">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://assets.cdn.filesafe.space/OzKYp8BxHKrfS2RB3XTH/media/62797a5a200fdb5c94963032.png" alt="Course" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-bold tracking-tight mb-3 bg-red-500 text-white inline-block py-1 px-2 rounded">Here's EVERYTHING You Get When You Order The Crash Course Today!</h2>
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <div>{item.title}</div>
                </div>
                <div className="text-1xl font-bold tracking-tight text-red-700">
                  <strong>({item.value})</strong>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-3 text-red-700">Total Value: $497.00</h2>
            <h3 className="text-4xl font-bold tracking-tight mb-3">Get Everything Above For</h3>
            <h4 className="text-5xl font-bold tracking-tight text-green-600 mb-5">Only $47!</h4>
            <p className="text-sm mb-7"><strong>Delivered instantly.</strong> Start learning in the next 2 minutes.</p>
            <button className="inline-block w-full sm:w-auto rounded-md bg-green-600 px-6 py-3 text-center shadow-sm hover:bg-green-500 focus:outline-none transition-colors duration-200">
              <p className="text-2xl font-semibold leading-6 text-white flex items-center justify-center">
                <img src="https://cdn1.iconfinder.com/data/icons/material-core/19/file-download-512.png" alt="Download Icon" className="mr-2" style={{width: '24px', height: '24px'}} />
                Enroll in Your Crash Course
              </p>
              <p className="text-lg text-green-400">
                ...& Get Instant Access!
              </p>
            </button>
            <p className="mt-4 text-center text-sm text-gray-600 flex items-center justify-center flex-wrap">
              <img src="https://cdn4.iconfinder.com/data/icons/essential-app-1/16/award-price-guarantee-ribbon-512.png" alt="Guarantee Icon" className="mr-2" style={{width: '24px', height: '24px'}} />
              Backed by our unconditional <span className="font-bold">30-day money back guarantee</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;