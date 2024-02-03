import React from 'react';

export const NotFoundPage = () => {
    const disenio = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        fontSize: '5vw', 
        color: 'purple',
        textAlign: 'center'
    };

    const imageStyle = {
        maxWidth: '30%', 
        height: 'auto',
        marginTop: '10px',
    };

    return (
        <>
            <div className="container" style={disenio}>
                <span style={{ fontWeight: "800", color: 'rgb(67, 5, 89)', maxWidth: '100%' }}>404</span>
                <span style={{ maxWidth: '100%' }}>Page not found</span>
                <img
                    src="https://img.freepik.com/vector-premium/robot-numero-404-frente_9206-9056.jpg"
                    style={imageStyle}
                    alt=""
                />
            </div>
        </>
    );
}


