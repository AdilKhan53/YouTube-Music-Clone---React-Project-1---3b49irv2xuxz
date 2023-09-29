import React from 'react';
 const Footer = (props) => {
    return (
        <div className='fixed bottom-0 left-0 right-0 p-4 border border-gray-500 bg-gray-900 flex justify-center items-center'>
            <audio controls>
                <source src={props?.data} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
 }

 export default Footer;

