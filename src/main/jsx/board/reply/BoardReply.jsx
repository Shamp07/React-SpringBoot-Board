import React from 'react';
import * as rs from  'reactstrap';
import styled from 'styled-components';

const  Wrapper = styled.div`
    border : 1px solid #e6e6e6;
    padding : 20px;
    border-radius : 10px;
    margin : 10px 0px;
`


const H5Inline = styled.h5`
    display : inline;
    margin : 20px;
    margin-left : 0px;
`;

const RightSpan = styled.span`
    float : right;
`;

const ReplyButton = styled(rs.Button)`
    margin-left : 15px;
`;

class BoardReply extends React.Component{


    render() {
        return (
            <Wrapper>
                <span><H5Inline>{this.props.reply.br_writer_name}</H5Inline>{this.props.reply.br_date}</span>
                <RightSpan>
                    <ReplyButton size="sm" color="danger">수정</ReplyButton>
                    <ReplyButton size="sm" color="warning">삭제</ReplyButton>
                    <ReplyButton size="sm" color="primary">답글</ReplyButton>
                </RightSpan>
                <br/>
                <hr></hr>
                <div>
                    {this.props.reply.br_content}
                </div>
            </Wrapper>
        )
    }
}

export default BoardReply;