import React from 'react';

const Cartinfo = ({img,cartTitle,cardbg}) => {
    return (
        <div>
             <div className={`card lg:card-side bg-base-100 text-white shadow-xl ${cardbg}`}>
                <figure><img src={img} alt="Album" className='pl-5 pt-5'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{cartTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default Cartinfo;