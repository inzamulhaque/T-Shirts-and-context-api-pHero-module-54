import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Father = () => {
    return (
        <div>
            <h3>Father</h3>
            <div style={{ display: "flex" }}>
                <MySelf />
                <Brother />
                <Sister />
            </div>
        </div>
    );
};

export default Father;