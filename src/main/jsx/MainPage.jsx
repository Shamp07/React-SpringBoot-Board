import '../webapp/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Menubar from './menu/Menubar.jsx';
import Board from './board/Board.jsx';
import LoginModal from './login/LoginModal.jsx';
import LoadingModal from './util/LoadingModal.jsx';
import AlertModal from "./util/AlertModal.jsx";


class MainPage extends React.Component {
    state = {
        onModalYN : false,
        onLoadingModalYN : false,
        onAlertModalYN : false,
        alertLabel : "",

        loginYN : false,
        userName : ""
    };

    componentWillMount() {
        this.sessionCheck();
    }

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
        	<div>
	        	<Menubar ToggleModal={this.ToggleModal} userName={this.state.userName} sessionCheck={this.sessionCheck}/>
	        	<Board/>
                <LoginModal onModalYN={this.state.onModalYN} ToggleModal={this.ToggleModal} ToggleLoadingModal={this.ToggleLoadingModal} ToggleAlertModal={this.ToggleAlertModal} sessionCheck={this.sessionCheck}/>
                <LoadingModal onLoadingModalYN={this.state.onLoadingModalYN} ToggleLoadingModal={this.ToggleLoadingModal}/>
                <AlertModal onAlertModalYN={this.state.onAlertModalYN} ToggleAlertModal={this.ToggleAlertModal} alertLabel={this.state.alertLabel}/>
        	</div>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));