import React from 'react';
import loadingGif from '../../Assets/black.gif';

const Loading = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <img src={loadingGif} alt="Loading" style={{ width: "100px", height: "100px" }} />
        </div>
    );
};

export default Loading;
