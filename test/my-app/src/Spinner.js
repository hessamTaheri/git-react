import React from 'react';

const Spinner = (props)=>{
    return (
        <div className= 'ui active dimmer'> 
        <div className='ui big text loader'>
            {/* this line or line 14th  */}
            {/* {props.message || 'Loading...'} */}
            {props.message}
        </div>
        </div>

    )
}

Spinner.defultProps = {
    message : 'Loading...'
}

export default Spinner