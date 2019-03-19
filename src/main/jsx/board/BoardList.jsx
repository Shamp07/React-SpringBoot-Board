import React from 'react'
import * as rs from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import BoardPost from './BoardPost.jsx';
import { Link } from 'react-router-dom';


const Board_Header = styled.div`
            height : 150px;
            padding : 20px;
            padding-top : 100px
            width : 900px;
            margin : 0 auto;
        `;

const Board_wrapper = styled.div`
            width : 900px;
            height : 70vh;
            border : 1px solid #e6e6e6;
            padding : 1rem;
            margin-top : 200px;
            margin : 0 auto;
            font-size : 15px;
            margin-bottom : 20px;
        `;

const pagination_layout = {
    width : '7vw',
    margin : "auto"
};

const selectStyle = {
    display : "inline",
    width : '7vw',
    float : 'left'
};

const buttonStyle = {
    float : 'right'
};

const searchStyle = {
    width : '15vw',
    float : "right",
    marginRight : "30px"
};

const InputGa = styled(rs.InputGroupAddon)`
    cursor : pointer;
`;

class BoardList extends React.Component{

    state = {
        BoardList : [],
        category : ""
    };

    goPost = () => {
        if(!this.props.loginYN){
            this.props.ToggleAlertModal("로그인을 하셔야 글을 작성하실 수 있습니다.");
            return false;
        }

        this.props.history.push('/posting');

    };

    changeValue = (event) => {
        if(event.target.name === "category"){
            this.getPost(event.target.value);
            return;
        }

        this.setState({
            [event.target.name] : event.target.value
        })
    };


    componentWillMount() {
        console.log(this.props);

        console.log("componentWillMount");
        this.getPost("");
    }



    getPost = (category) => {
        const that = this;
        axios.post("/getpost",{
            category : category
        }).then(function(response){
            that.setState({
                BoardList : response.data,
                category : category
            });
        }).catch(function() {

        })
    };

    goPostView = (page) => {
        this.props.history.push('post/'+page);
    }

    render(){

        const Categories = this.props.boardCategory.map(function(data){
            return (<option key={data.bc_id} value={data.bc_id}>{data.bc_name}</option>);
        });

        const that = this;

        const Posts = this.state.BoardList.map(function(data,index){
            return (<BoardPost post={data} goPostView={that.goPostView} key={data.bp_id} index={index}/>);
        });

        return(
            <React.Fragment>
                <Board_Header>
                    <rs.Button style={buttonStyle} onClick={this.goPost}>글쓰기</rs.Button>
                    <rs.Input style={selectStyle} type="select" name="category"  onChange={this.changeValue}>
                        <option value="">전체</option>
                        {Categories}
                    </rs.Input>
                    <rs.InputGroup style={searchStyle}>
                        <rs.Input placeholder="검색할 키워드를 입력해주세요..." />
                        <InputGa addonType="append">검색</InputGa>
                    </rs.InputGroup>
                </Board_Header>
                <Board_wrapper>
                    <rs.Table>
                        <colgroup>
                            <col />
                            <col width="45%" />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                        <tr>
                            <th>순번</th>
                            <th>제목</th>
                            <th>덧글</th>
                            <th>조회수</th>
                            <th>작성자</th>
                            <th>최근 수정일</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Posts}
                        </tbody>
                    </rs.Table>
                </Board_wrapper>
                <rs.Pagination size="sm" aria-label="Page navigation example" style={pagination_layout}>
                    <rs.PaginationItem disabled>
                        <rs.PaginationLink previous href="#" />
                    </rs.PaginationItem>
                    <rs.PaginationItem active >
                        <rs.PaginationLink href="#">
                            1
                        </rs.PaginationLink>
                    </rs.PaginationItem>
                    <rs.PaginationItem>
                        <rs.PaginationLink href="#">
                            2
                        </rs.PaginationLink>
                    </rs.PaginationItem>
                    <rs.PaginationItem>
                        <rs.PaginationLink href="#">
                            3
                        </rs.PaginationLink>
                    </rs.PaginationItem>
                    <rs.PaginationItem>
                        <rs.PaginationLink next href="#" />
                    </rs.PaginationItem>
                </rs.Pagination>
            </React.Fragment>
        )
    }
}

export default BoardList;