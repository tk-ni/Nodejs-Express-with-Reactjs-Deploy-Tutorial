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
            users: '',
            err: false
        }
    }

    componentDidMount() {
        fetch(ServerUrl + '/test', {
            method: 'GET'
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data =>{
                    this.setState({ loading: false, users: data }, () => {})
                })
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
                <p>Could not connect to server! check the ServerUrl variable and the Server logs.</p>
            </div>)
        } else {
            return (<div className="success">
                <FontAwesomeIcon icon={faCheckCircle} size={"4x"}/>
                <p>Response Status 200!</p>
                {this.state.users.length > 0 ? this.state.users.map(user => <div>{user.first_name + ' ' + user.last_name}</div>) : 'No Users Found! Check connection to DB.'}
            </div>)
        }

    }
}

export default Main;