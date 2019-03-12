import React from 'react';
import * as rs from 'reactstrap';
import styled, { css } from 'styled-components';

class Board extends React.Component {


    render(){
        const Board_layout = styled.div`
            width : 1000px;
            height : 100vh;
            background-color : white;
            border-right : 1px solid #e6e6e6;
            margin-left : 250px;
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

        const Board_Header = styled.div`
            width : 100%;
            height : 150px;
            padding : 20px;
            padding-top : 100px
        `;

        const pagination_layout = {
            width : '7vw',
            margin : "auto"
        }
        return(
            <Board_layout>
                <Board_Header></Board_Header>
                <Board_wrapper>
                    <rs.Table>
                        <colgroup>
                            <col />
                            <col width="60%" />
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
                                <th>최근 수정일</th>
                            </tr>
                        </thead>
                        <tbody>

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
            </Board_layout>
        )
    }

}

export default Board;