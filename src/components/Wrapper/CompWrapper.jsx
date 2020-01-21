import React from 'react';

const CompWrapper = ({children}) => (
    <div className="position-absolute w-100">
        {children}
    </div>
)

export default CompWrapper;