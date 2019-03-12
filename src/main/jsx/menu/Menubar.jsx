import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled, { css } from 'styled-components';

class Menubar extends React.Component {
    render() {
        const Box = styled.div`
          /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
          padding: 1rem;
          width : 250px;
          height : 100vh;
          border-right : 1px solid #e6e6e6;
        `;

        const Title = styled.h1`
            margin-bottom: 30px;
        `;

        const BoardLink = styled.a`
            cursor : pointer;
            color : #777 !important;
            &:hover {
                color : black !important;
            };
        `;
    return(
                <Box>
                    <Title>게시판</Title>
                    <ListGroup>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                        <ListGroupItem><BoardLink>게시판-1</BoardLink></ListGroupItem>
                    </ListGroup>
                </Box>
        )
    }
}

export default Menubar;