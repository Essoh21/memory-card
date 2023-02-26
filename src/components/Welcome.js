import React, { useState, useEffect } from 'react';

const Welcome = (props) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < props.text.length) {
                setDisplayedText(prev => prev + props.text.charAt(i));
                i += 1;
            } else {
                clearInterval(interval);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [props.text]);

    return <p className='Welcome'>{props.gameStarted ? props.instructions : displayedText}</p>;
};

export default Welcome;
