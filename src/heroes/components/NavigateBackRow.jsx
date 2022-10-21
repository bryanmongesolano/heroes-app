import React from 'react';

export const NavigateBackRow = ({navigateBack}) => {
    return (
        <div className="row">
            <div className="col">
                <button
                    className="btn btn-sm btn-outline-secondary mb-3"
                    onClick={navigateBack}
                >
                    <i className="bi bi-arrow-left"></i> Back
                </button>
            </div>
        </div>
    );
};
