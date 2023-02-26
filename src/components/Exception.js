import React, { useState, useEffect } from "react";

export default function Exception(props) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShow(false);
        }, 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {show && (
                <div className="exception-container">
                    <div className="exception">{props.text}</div>
                </div>
            )}
        </>
    );
}
