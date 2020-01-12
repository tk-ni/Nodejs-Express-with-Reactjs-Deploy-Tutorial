import React from 'react';
import { ServerUrl } from './ServerSetup';
import Loading from './Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            err: false
        }
    }

    componentDidMount() {
        fetch(ServerUrl + '/test', {
            method: 'GET'
        }).then(res => {
            if (res.status === 200) {
                this.setState({ loading: false }, () => { })
            } else {
                this.setState({ loading: false, err: true }, () => { })
            }
        }).catch(e => { //error catching
            console.log(e);
        })
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        } if (this.state.err) {
            return (<div className="error">
                <FontAwesomeIcon icon={faTimesCircle} size={"4x"}/>
            </div>)
        } else {
            return (<div className="success">
                <FontAwesomeIcon icon={faCheckCircle} size={"4x"}/>
            </div>)
        }

    }
}

export default Main;