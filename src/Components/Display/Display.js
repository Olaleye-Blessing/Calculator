import React from 'react';
import './Display.css';

class Display extends React.Component {

    render(){
        let display = 0;
        let operationKey = this.props.operationKey;
        return(
            <div className='display'>
                <p>{operationKey}</p>
                <p>{display.toLocaleString("en-US")} </p>
            </div>
        );
    }
}

export default Display