import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
class Loading extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div >
                <FontAwesomeIcon icon={faSpinner} className="loading" size={"3x"}/>
            </div>
        )
    }
}

export default Loading;