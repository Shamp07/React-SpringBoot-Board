import React from 'react';
import * as rs from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
import BoardReply from './BoardReply.jsx';

const Wrapper = styled.div`
    padding : 10px 70px;
`;

const SubmitButton = styled(rs.Button)`
    margin :  10px;
    margin-right : 0px;
    float : right;
`;

class BoardReplyForm extends React.Component{

    state = {
        replyList : [],
        replyContent : ""
    }

    changeValue = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addReply = () => {
        const that = this;

        if(!this.props.loginYN){
            this.props.ToggleAlertModal("로그인을 하셔야 글을 작성하실 수 있습니다.");
            return;
        }

        axios.post("/addreply",{
            bp_id : this.props.bpId,
            br_content : this.state.replyContent
        }).then(function(response){
            if(response.data === "Fucked")
                alert("/addreply 오류");

            that.getReplyList();
        }).catch(function(){

        });
    };

    componentWillMount() {
        this.getReplyList();
    }

    getReplyList = () => {
        const that = this;
        axios.post("/getreplylist",{
            bp_id : this.props.bpId,
        }).then(function(response){
            that.setState({
                replyList : response.data
            })
        }).catch(function(){

        });
    }

    render() {
        const BoardReplyList =  this.state.replyList.map(function(data){
            return (<BoardReply key={data.br_id} reply={data}/>)
        })

        return (
            <React.Fragment>
                <Wrapper>
                    <h2>댓글</h2>
                    <rs.Input type="textarea" rows="3" name="replyContent" onBlur={this.changeValue}/>
                    <SubmitButton color="primary" onClick={this.addReply}>등록</SubmitButton>
                    <br/><br/><br/>

                    {BoardReplyList}
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default BoardReplyForm;