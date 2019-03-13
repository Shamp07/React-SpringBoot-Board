import '../webapp/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './menu/Menubar.jsx';
import Board from './board/Board.jsx';
import LoginModal from './login/LoginModal.jsx';
import LoadingModal from './util/LoadingModal.jsx';


class MainPage extends React.Component {
    state = {
        onModalYN : false,
        onLoadingModalYN : false
    };

    ToggleModal = () => {
        this.setState({
            onModalYN : !this.state.onModalYN
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
	        	<Menubar ToggleModal={this.ToggleModal}/>
	        	<Board/>
                <LoginModal onModalYN={this.state.onModalYN} ToggleModal={this.ToggleModal} ToggleLoadingModal={this.ToggleLoadingModal}/>
                <LoadingModal onLoadingModalYN={this.state.onLoadingModalYN} ToggleLoadingModal={this.ToggleLoadingModal}/>
        	</div>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));