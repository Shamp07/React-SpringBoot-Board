import React from 'react';
import * as rs from 'reactstrap';
import axios from 'axios';

const grpStyle = {
    margin : "10px 0px",
    color : "black !important",
}

const inputStyle ={
    fontFamily : "aria"
}

class LoginModal extends React.Component {

    state = {
        id : "",
        pw : ""
    }

    onLogin = () => {
        this.props.ToggleLoadingModal();

        const that = this;
        // 로그인 로직
        axios.post('/login', {
            user_id:  this.state.id,
            user_pw: this.state.pw
        })
            .then(function (response) {
                setTimeout(function(){
                    that.props.ToggleLoadingModal();

                    if(response.data == "Success"){
                        that.props.ToggleModal();
                        that.props.ToggleAlertModal("로그인 성공적으로 완료되었습니다.");
                        that.props.sessionCheck();
                    }
                    else
                        that.props.ToggleAlertModal("유저네임이나 비밀번호가 알맞지 않습니다.");

                },500);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    changeValue = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render() {


        return (
            <div>
                <rs.Modal isOpen={this.props.onModalYN} toggle={this.props.ToggleModal} className={this.props.className} centered={true}>
                    <rs.ModalBody>
                        <h3>로그인</h3>
                        <rs.InputGroup style={grpStyle}>
                            <rs.InputGroupAddon addonType="prepend">username</rs.InputGroupAddon>
                            <rs.Input style={inputStyle} placeholder="insert username.." onChange={this.changeValue} name="id"/>
                        </rs.InputGroup>
                        <rs.InputGroup style={grpStyle}>
                            <rs.InputGroupAddon addonType="prepend">password</rs.InputGroupAddon>
                            <rs.Input id="pass" type="password" style={inputStyle} placeholder="insert password.." onChange={this.changeValue} name="pw"/>
                        </rs.InputGroup>
                    </rs.ModalBody>
                    <rs.ModalFooter>
                        <rs.Button color="primary" onClick={this.onLogin}>로그인</rs.Button>{' '}
                        <rs.Button color="secondary" onClick={this.props.ToggleModal}>취소</rs.Button>
                    </rs.ModalFooter>
                </rs.Modal>
            </div>
        );
    }
}

export default LoginModal;