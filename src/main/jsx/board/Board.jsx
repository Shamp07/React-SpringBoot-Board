import React from 'react';
import styled from 'styled-components';
import BoardList from './BoardList.jsx';
import BoardPosting from './BoardPosting.jsx';


const Board_layout = styled.div`
            width : 1000px;
            height : 100vh;
            background-color : white;
            border-right : 1px solid #e6e6e6;
            margin-left : 250px;
        `;

class Board extends React.Component {
    render(){
        return(
            <Board_layout>
                {
                    this.props.page === "BoardList"
                        ? (<BoardList changePage={this.props.changePage} boardCategory={this.props.boardCategory}/>)
                        : (<BoardPosting boardCategory={this.props.boardCategory} />)
                }
            </Board_layout>
        )
    }

}

export default Board;