import React from 'react';
import * as rs from 'reactstrap';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        console.log("LoginModal@componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps.onModalYN){
            this.toggle();
        }
    }

    componentDidUpdate() {
        console.log("LoginModal@componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("LoginModal@componentWillUnmount");

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <rs.Modal isOpen={this.props.onModalYN} toggle={this.toggle} className={this.props.className} centered={true}>
                    <rs.ModalHeader toggle={this.toggle}>Modal title</rs.ModalHeader>
                    <rs.ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </rs.ModalBody>
                    <rs.ModalFooter>
                        <rs.Button color="primary" onClick={this.toggle}>Do Something</rs.Button>{' '}
                        <rs.Button color="secondary" onClick={this.toggle}>Cancel</rs.Button>
                    </rs.ModalFooter>
                </rs.Modal>
            </div>
        );
    }
}

export default LoginModal;