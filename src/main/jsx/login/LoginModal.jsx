import React from 'react';
import * as rs from 'reactstrap';

class LoginModal extends React.Component {

    onLogin = () => {
        this.props.ToggleLoadingModal();

        // 로그인 로직

        this.props.ToggleLoadingModal();

        // 성공시 알럿 로그인 성공했습니다 실패시도 알럿
        

    }


    render() {
        return (
            <div>
                <rs.Modal isOpen={this.props.onModalYN} toggle={this.props.ToggleModal} className={this.props.className} centered={true}>
                    <rs.ModalHeader toggle={this.toggle}>Modal title</rs.ModalHeader>
                    <rs.ModalBody>
                        로그인 창 이 떠야 합니다.
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