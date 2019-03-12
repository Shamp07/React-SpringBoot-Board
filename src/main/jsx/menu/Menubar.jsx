import React from 'react';
import * as rs from 'reactstrap';
import styled, { css } from 'styled-components';

class Menubar extends React.Component {
    render() {
        const Box = styled.div`
          /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
          padding: 1.5rem;
          width : 250px;
          height : 100vh;
          background-color : #24292e;
          color : #e6e6e6;
          box-shadow : 0px 3px 3px 3px gray;
          position : fixed;
        `;

        const Title = styled.h1`
            margin-bottom: 30px;
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