import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default Button;