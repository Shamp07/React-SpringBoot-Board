import '../webapp/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components'

import Menubar from './menu/Menubar.jsx';
import Board from './board/Board.jsx';
import LoginModal from './login/LoginModal.jsx';
import LoadingModal from './util/LoadingModal.jsx';
import AlertModal from "./util/AlertModal.jsx";

const Wrapper = styled.div`
    
`;

class MainPage extends React.Component {
    state = {
        onModalYN : false,
        onLoadingModalYN : false,
        onAlertModalYN : false,
        alertLabel : "",

        loginYN : false,
        userName : "",

        page : "BoardList",

        boardCategory : []
    };

    componentWillMount() {
        this.sessionCheck();
        this.getBoardCatetories();
    }

    getBoardCatetories = () => {
        const that = this;
        axios.post("/getcatetory",{

        }).then(function(response){
            that.setState({
                boardCategory : response.data
            });

        }).catch(function(response){
            console.log(response);
            that.ToggleAlertModal("오류 났다 씹새야");
        })
    };

    sessionCheck = () => {
        const that = this;
        axios.post("/logincheck",{

        }).then(function(response){
            if(response.data !== false){
                that.setState({
                    userName : response.data,
                    loginYN : true
                })
            }else{
                that.setState({
                    userName : "",
                    loginYN : false
                })
            }

        }) .catch(function(){

        });
    };

    changePage = (page) => {
        this.setState({
            page : page
        })
    };



    ToggleModal = () => {
        this.setState({
            onModalYN : !this.state.onModalYN
        });
    };

    ToggleAlertModal = (alertLabel) => {
        this.setState({
            onAlertModalYN : !this.state.onAlertModalYN,
            alertLabel : alertLabel
        });
    };

    ToggleLoadingModal = () => {
        this.setState({
            onModalYN : !this.state.onModalYN
        });

        this.setState({
            onLoadingModalYN : !this.state.onLoadingModalYN
        });
    };

    render() {
        return (
        	<Wrapper>
	        	<Menubar ToggleModal={this.ToggleModal} userName={this.state.userName} sessionCheck={this.sessionCheck}/>
	        	<Board page={this.state.page} changePage={this.changePage} boardCategory={this.state.boardCategory} ToggleAlertModal={this.ToggleAlertModal} loginYN={this.state.loginYN}/>
                <LoginModal onModalYN={this.state.onModalYN} ToggleModal={this.ToggleModal} ToggleLoadingModal={this.ToggleLoadingModal} ToggleAlertModal={this.ToggleAlertModal} sessionCheck={this.sessionCheck}/>
                <LoadingModal onLoadingModalYN={this.state.onLoadingModalYN} ToggleLoadingModal={this.ToggleLoadingModal}/>
                <AlertModal onAlertModalYN={this.state.onAlertModalYN} ToggleAlertModal={this.ToggleAlertModal} alertLabel={this.state.alertLabel}/>
        	</Wrapper>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));