import React from 'react';
import styled from 'styled-components';
import BoardList from './BoardList.jsx';
import BoardPostVIew from './BoardPostVIew.jsx';
import { Route } from 'react-router-dom';
import BoardPosting from './BoardPosting.jsx';


const Board_layout = styled.div`
            width : 1000px;
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
                                <BoardList category={this.props.category} history={history} location={location} loginYN={this.props.loginYN} boardCategory={this.props.boardCategory} ToggleAlertModal={this.props.ToggleAlertModal} />
                            )}
                        />
                        <Route
                            exact path="/posting"
                            render={({location, history}) => (
                                <BoardPosting history={history} loginYN={this.props.loginYN} boardCategory={this.props.boardCategory} ToggleAlertModal={this.props.ToggleAlertModal} />
                            )}
                        />
                        <Route
                            exact path="/post/:bpId"
                            render={({location, history, match}) => (
                                <BoardPostVIew history={history} loginYN={this.props.loginYN} match={match}  boardCategory={this.props.boardCategory} ToggleAlertModal={this.props.ToggleAlertModal} />
                            )}
                        />

                </Board_layout>
        )
    }

}

export default Board;