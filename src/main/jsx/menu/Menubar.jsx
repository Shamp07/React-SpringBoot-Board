import React from 'react';
import * as rs from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
import MenuCategory from './MenuCategory.jsx'

const Box = styled.div`
          padding: 1.5rem;
          width : 250px;
          height : 100vh;
          background-color : #24292e;
          color : #e6e6e6 !important;
          box-shadow : 0px 3px 3px 3px gray;
          position : fixed;
        `;

const Title = styled.h1`
            margin-bottom: 30px;
        `;

const Sub_title = styled.div`
            margin-bottom: 30px;
            cursor : default;
        `;

const BoardLink = styled.a`
    cursor : pointer;
    color : #hsla(0,0%,100%,.7); !important;
    &:hover {
        color : #bbb !important;
    };
`;



class Menubar extends React.Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.onModalYN){
            this.toggle();
        }
    }

    logout = () => {
        const that = this;
        axios.post("/logout",{

        }).then(function(response){
            if(response.data === "Success")
                that.props.sessionCheck();

        }).catch(function(){

        })
    };

    render() {
        const that = this;
        const Categories = this.props.boardCategory.map(function(data){
            return (<MenuCategory key={data.bc_id} changeCategory={that.props.changeCategory} category={data}/>);
        });

        return(

                <Box>
                    <Title>게시판</Title>
                    <Sub_title>
                        {
                            this.props.userName === ""
                                ? (
                                    <React.Fragment>
                                        <BoardLink
                                            onClick={this.props.ToggleModal}>로그인</BoardLink>{' '}|{' '}<BoardLink>회원가입</BoardLink>
                                    </React.Fragment>
                                )
                                : (
                                    <React.Fragment>
                                        <BoardLink>{this.props.userName}님 환영합니다! <br/> </BoardLink>
                                        <br/>
                                        <BoardLink onClick={this.logout}>로그아웃</BoardLink>
                                    </React.Fragment>
                                )
                        }
                    </Sub_title>
                    <rs.ListGroup>
                        {Categories}
                    </rs.ListGroup>
                </Box>
        )
    }
}

export default Menubar;