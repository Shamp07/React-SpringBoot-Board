import React from 'react';
import styled from "styled-components";
import * as rs from 'reactstrap';
import '../../webapp/css/custom.css';
import axios from 'axios';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Board_Header = styled.div`
    height : 200px;
    padding : 10px;
    padding-top : 50px;
    width : 900px;
    margin : 0 auto;
`;


const Board_wrapper = styled.div`
    width : 900px;
    height : 70vh;
    border : 1px solid #e6e6e6;
    padding : 0.8rem;
    margin-top : 200px;
    margin : 0 auto;
    font-size : 15px;
    margin-bottom : 20px;
`;

const PostFooter = styled.div`
    width : 116px;
    margin : auto auto;
`;

class BoardPosting extends React.Component {
    state = {
        category : "",
        title : "",
        content : "",
    };

    addPost = () => {
        const that = this;

        if(!this.props.loginYN){
            this.props.ToggleAlertModal("로그인을 하셔야 글을 작성하실 수 있습니다.");
            return;
        }

        if(this.state.category === "" || this.state.title === "" || this.state.content === ""){
            this.props.ToggleAlertModal("똑바로 입력해라 십새야");
            return;
        }

        axios.post("/addpost",{
            bc_id : this.state.category,
            bp_title : this.state.title,
            bp_content : this.state.content
        }).then(function(response){
            console.log(response.data);
            if(response.data == "Success"){
                that.goBoardList();
            }
        }).catch(function(){

        });
    };

    changeValue = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
            nameInput : event.target
        });
    };

    goBoardList = () => {
        this.props.changePage("BoardList");
    }

    render(){
        const Categories = this.props.boardCategory.map(function(data){
            return (<option key={data.bc_id} value={data.bc_id}>{data.bc_name}</option>);
        });

        return(
            <React.Fragment>
                <Board_Header>
                    <h1>글 작성</h1>
                    <rs.Input type="select" className="mb-2" name="category" onBlur={this.changeValue}>
                        <option value="">카테고리를 선택해주세요.</option>
                        {Categories}
                    </rs.Input>
                    <rs.Input placeholder="글의 제목을 입력해주세요.." name="title" onBlur={this.changeValue}/>
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
                            this.setState({
                                content : editor.getData()
                            });
                        } }
                    />
                </Board_wrapper>
                <PostFooter>
                    <rs.Button color="primary" onClick={this.addPost} >등록</rs.Button>{'     '}<rs.Button onClick={this.goBoardList}>취소</rs.Button>
                </PostFooter>
            </React.Fragment>
        )
    }
    
}

export default BoardPosting;