import React from 'react';
import * as rs from 'reactstrap';
import styled from 'styled-components';

class Menubar extends React.Component {
    componentWillReceiveProps(nextProps) {
       console.log("Menubar@componentWillReceiveProps");
    }

    componentDidMount() {
        console.log("Menubar@componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps.onModalYN){
            this.toggle();
        }
    }

    componentDidUpdate() {
        console.log("Menubar@componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Menubar@componentWillUnmount");

    }render() {

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

        const liStyle = {
            backgroundColor : "#24292e",
            borderColor : "#e6e6e6",
            borderRight : "none",
            borderLeft : "none",
            borderTop : "0.5px solid #555",
            borderBottom : "none"
        };
    return(
                <Box>
                    <Title>게시판</Title>
                    <Sub_title>
                    <BoardLink onClick={this.props.ToggleModal}>로그인   </BoardLink>
                    |
                    <BoardLink>     회원가입</BoardLink>
                    </Sub_title>
                    <rs.ListGroup>
                        <rs.ListGroupItem style={liStyle}><BoardLink>Q&A</BoardLink></rs.ListGroupItem>
                        <rs.ListGroupItem style={liStyle}><BoardLink>기술</BoardLink></rs.ListGroupItem>
                        <rs.ListGroupItem style={liStyle}><BoardLink>커뮤니티</BoardLink></rs.ListGroupItem>
                        <rs.ListGroupItem style={liStyle}><BoardLink>칼럼</BoardLink></rs.ListGroupItem>
                        <rs.ListGroupItem style={liStyle}><BoardLink>구인구직</BoardLink></rs.ListGroupItem>
                    </rs.ListGroup>
                </Box>
        )
    }
}

export default Menubar;