// Core
import React from 'react';

export default (props) => {
    //alert(props.src)
    return  (
        <div className = 'story'>
            <div>
                <img src = { props.src } alt = { props.alt }/>
            </div>
            <span>
                { props.alt }
            </span>

        </div>
    );
};
