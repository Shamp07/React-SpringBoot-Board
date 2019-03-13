import React from 'react';
import * as rs from 'reactstrap';
import styled from 'styled-components';

class LoadingModal extends React.Component {

    render() {
        const Text = styled.span`
            vertical-align : middle;
            font-size : 20px;
        `

        return (
            <div>
                <rs.Modal isOpen={this.props.onLoadingModalYN} centered={true} className={this.props.className} size="sm">
                    <rs.ModalBody>
                        <rs.Spinner color="dark" /> <Text> &nbsp; &nbsp; &nbsp; 로딩중...</Text>
                    </rs.ModalBody>
                </rs.Modal>
            </div>
        );
    }
}

export default LoadingModal;