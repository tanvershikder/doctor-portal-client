import React from 'react';

const Service = ({ img ,cartTitle}) => {
    return (
        <div>
            <div className="card lg:max-w-lg mt-10 bg-base-100 shadow-xl rounded-xl">
                <figure className="px-10 pt-10">
                    <img src={img} className="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cartTitle}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;