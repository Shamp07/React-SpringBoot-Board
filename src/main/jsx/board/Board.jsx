import React from 'react';
import * as rs from 'reactstrap';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            height : 150px;
            padding : 20px;
            padding-top : 100px
            width : 900px;
            margin : 0 auto;
        `;

        const pagination_layout = {
            width : '7vw',
            margin : "auto"
        }

        const selectStyle = {
            display : "inline",
            width : '7vw',
            float : 'left'
        }

        const buttonStyle = {
            float : 'right'
        }

        const searchStyle = {
            width : '15vw',
            float : "right",
            marginRight : "30px"
        }

        return(
            <Board_layout>
                <Board_Header>
                    <rs.Button style={buttonStyle}>글쓰기<FontAwesomeIcon icon="igloo" /></rs.Button>
                    <rs.Input style={selectStyle} type="select" name="select" id="exampleSelect">
                        <option>카테고리 1</option>
                        <option>카테고리 2</option>
                        <option>카테고리 3</option>
                        <option>카테고리 4</option>
                        <option>카테고리 5</option>
                    </rs.Input>
                    <rs.InputGroup style={searchStyle}>
                        <rs.Input placeholder="검색할 키워드를 입력해주세요..." />
                        <rs.InputGroupAddon addonType="append">검색</rs.InputGroupAddon>
                    </rs.InputGroup>
                </Board_Header>
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