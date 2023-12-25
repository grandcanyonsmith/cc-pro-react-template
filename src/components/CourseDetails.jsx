import React from 'react';

const CourseItem = ({title, description, imgSrc}) => (
    <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <img src={imgSrc} alt="Icon" className="h-48 w-48 mb-4 md:mb-0" />
        <div>
            <dt className="font-bold text-black text-2xl">{title}</dt>
            <dd className="mt-2 text-black">{description}</dd>
        </div>
    </div>
);

const CourseDetails = () => {
    const courseItems = [
        {
            title: '10 Day Starter Course',
            description: 'Packed with 10 of my best no B.S filmmaking workshops covering the spectrum of a strong filmmaking foundation to produce insanely cinematic videos.',
            imgSrc: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/OzKYp8BxHKrfS2RB3XTH/media/6270c11e5891fe0102a79c25.png'
        },
        {
            title: 'Keyboard Editing Shortcuts',
            description: 'The exact custom-made keyboard shortcuts that I use to 10X my productivity on edits for clients like Hyundai, LG, Canon, Adobe, and many more. For Premiere Pro, Final Cut Pro X, & Davinci Resolve!',
            imgSrc: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/OzKYp8BxHKrfS2RB3XTH/media/6270af855891fe3befa7966f.png'
        },
        {
            title: 'The FTF E-Book Trilogy',
            description: 'This 3-book trilogy is the foundation upon which all cinematic content is built: 1 - Cinematic Lighting Techniques 2 - Editing Mastery and 3 - Camera Angles.',
            imgSrc: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/OzKYp8BxHKrfS2RB3XTH/media/6270ac205891fef976a794ff.png'
        },
        {
            title: '100+ Sound Effects Library',
            description: 'Over 100 of my most used, and most cherished SFX I use to pack my videos chock-full of sound design & immersive audio. A pack I normally sell for $100 alone.',
            imgSrc: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/OzKYp8BxHKrfS2RB3XTH/media/6270ac865891fe81b4a79503.png'
        },
        {
            title: 'Orange & Teal LUT',
            description: 'My custom-built Orange & Teal LUT used on hundreds of big-budget films, commercials, & videos.',
            imgSrc: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/OzKYp8BxHKrfS2RB3XTH/media/6275dbc6f2faaff9b146207c.png'
        },
        {
            title: '7 Signature Set Savers',
            description: 'Seven of our best at-a-glance cheatsheet "set-savers" for quick reference to easily forgotten settings & filmmaking fundamentals.',
            imgSrc: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/OzKYp8BxHKrfS2RB3XTH/media/6270b7735891feecbda798ff.png'
        },
        {
            title: 'My 10 Sources Of Revenue',
            description: 'A full 20-minute masterclass giving you an under-the-hood look at how I became a millionaire in my 20\'s through video work.',
            imgSrc: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/OzKYp8BxHKrfS2RB3XTH/media/6270bc675891fe1cd3a79b1e.png'
        },
    ];

    return (
        <div className="md:w-1/2 md:pl-4 mt-10 md:mt-0 bg-white pt-4">
            <h2 className="text-2xl font-bold mb-6 text-center bg-black text-white rounded-full py-2 px-4">INCLUDED IN YOUR ORDER</h2>
            <dl className="space-y-6">
                {courseItems.map((item, index) => (
                    <CourseItem key={index} {...item} />
                ))}
            </dl>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Now Available For Instant Digital Access!</h2>
                <h3 className="text-xl mb-4">ORDER YOUR 10-DAY STARTER COURSE FOR JUST $27!</h3>
                <h4 className="text-lg mb-4">PLUS, GET 6 ADDITIONAL BONUSES FREE</h4>
                <form className="mb-4">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded mb-4" />
                    <button type="submit" className="w-full bg-black text-white py-2 rounded">Download Now For Just $27! 👉</button>
                </form>
                <p className="text-sm">Backed by our 30-day money-back guarantee. You'll love the Full-Time Filmmaker Bootcamp or we'll give you your money back AND let you keep access to everything included!</p>
            </div>
        </div>
    );
}

export default CourseDetails;
