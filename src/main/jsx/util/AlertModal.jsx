import React from 'react';
import * as rs from 'reactstrap';
import styled from 'styled-components';

class AlertModal extends React.Component {

    Toggle = () => {
        this.props.ToggleAlertModal("");
    }

    render() {
        const Text = styled.span`
            vertical-align : middle;
            font-size : 20px;
        `



        return (
            <div>
                <rs.Modal isOpen={this.props.onAlertModalYN}  className={this.props.className}>
                    <rs.ModalBody>
                        <Text>{this.props.alertLabel}</Text>
                    </rs.ModalBody>
                    <rs.ModalFooter>
                        <rs.Button color="secondary" onClick={this.Toggle}>닫기</rs.Button>
                    </rs.ModalFooter>
                </rs.Modal>
            </div>
        );
    }
}

export default AlertModal;