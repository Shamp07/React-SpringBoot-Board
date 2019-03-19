import React from 'react'
import {Link} from "react-router-dom";
import * as rs from 'reactstrap';
import styled from "styled-components";
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-balloon";
import BoardReplyForm from "./reply/BoardReplyForm.jsx";


const Board_Header = styled.div`
    height : 200px;
    padding : 10px;
    padding-top : 20px;
    width : 900px;
    margin : 0 auto;
`;


const Board_wrapper = styled.div`
    width : 900px;
    border : 1px solid #e6e6e6;
    padding : 0.8rem;
    margin-top : 200px;
    margin : 0 auto;
    font-size : 15px;
    margin-bottom : 20px;
`;

const PostFooter = styled.div`
    width : 140px;
    margin : auto auto;
`;

const SpanWriter = styled.span`
    float : right;
    margin-top : 10px;
`;

class BoardPostVIew extends React.Component{

    state = {
        category_name : "",
        content : "",
        title : "",
        writer : ""
    };
    
    componentWillMount() {
        const that = this;
        // 해당 ID 에 맞는 데이터를 가져온다.
        axios.post("/getpostdata",{
            bp_id : this.props.match.params.bpId
        }).then(function(response){
            console.log(response.data);
            that.setState({
                category_name : response.data.bp_category_name,
                content : response.data.bp_content,
                title : response.data.bp_title,
                writer : response.data.bp_writer_name
            })
        }).catch(function(){

        })
    }

    render() {
        return(
            <React.Fragment>
                <Board_Header>
                    <h1>글 보기</h1>
                    <rs.Input type="select" className="mb-2" name="category" disabled>
                        <option>{this.state.category_name}</option>
                    </rs.Input>
                    <rs.Input placeholder="글의 제목을 입력해주세요.." name="title" value={this.state.title} disabled/>
                    <SpanWriter> 작성자 : {this.state.writer}</SpanWriter>
                </Board_Header>
                <Board_wrapper>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={this.state.content}
                        onInit={ editor => {

                        } }
                        onBlur={ editor => {

                        } }
                        onChange={ ( event, editor ) => {

                        } }
                        disabled
                    />
                </Board_wrapper>
                <PostFooter>
                    <rs.Button color="primary" >수정</rs.Button>{' '}<Link to="/"><rs.Button>글 목록</rs.Button></Link>
                </PostFooter>

                <BoardReplyForm bpId={this.props.match.params.bpId} ToggleAlertModal={this.props.ToggleAlertModal} loginYN={this.props.loginYN}/>
            </React.Fragment>
        )
    }

}

export default BoardPostVIew;