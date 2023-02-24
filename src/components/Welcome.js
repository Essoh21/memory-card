import React, { useState, useEffect } from 'react';

const Welcome = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [text]);

    return <p className='Welcome'>{displayedText}</p>;
}

export default Welcome;
