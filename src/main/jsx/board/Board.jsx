import React from 'react';
import styled from 'styled-components';
import BoardList from './BoardList.jsx';
import { Route , BrowserRouter as Router } from 'react-router-dom';
import { } from 'react-router';
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
                        <Route
                            exact path="/"
                            render={({location, history}) => (
                                <BoardList history={history} location={location} loginYN={this.props.loginYN} changePage={this.props.changePage} boardCategory={this.props.boardCategory} ToggleAlertModal={this.props.ToggleAlertModal} />
                            )}
                        />
                        <Route
                            exact path="/posting"
                            render={({location, history}) => (
                                <BoardPosting history={history} loginYN={this.props.loginYN} changePage={this.props.changePage} boardCategory={this.props.boardCategory} ToggleAlertModal={this.props.ToggleAlertModal} />
                            )}
                        />

                </Board_layout>
        )
    }

}

export default Board;