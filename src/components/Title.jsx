import React from 'react';

const Title = ({children}) => {
    return (
        <div>
           <h1 className="text-2xl font-semibold p-2 bg-sky-200 text-black rounded-xl">{children}</h1> 
        </div>
    );
};

export default Title;