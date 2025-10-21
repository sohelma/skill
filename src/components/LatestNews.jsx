import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-6 bg-gray-200 px-3 py-3 mx-auto items-center'>  
            <p className='bg-[#D72050] px-4 py-2 text-white'>Latest</p>
            <Marquee className='flex gap-6'>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;