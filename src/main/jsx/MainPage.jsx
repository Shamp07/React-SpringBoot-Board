import '../webapp/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './menu/Menubar.jsx';
import Board from './board/Board.jsx';
import LoginModal from './login/LoginModal.jsx';

import styled, { css } from 'styled-components';

class MainPage extends React.Component {
    state = {
        onModalYN : false
    };

    componentDidMount() {
        console.log("MainPage@componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("MainPage@componentWillReceiveProps");
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("MainPage@componentWillUpdate");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("MainPage@shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("MainPage@componentDidUpdate");
    }

    ToggleModal = () => {
        this.setState({
            onModalYN : !this.state.onModalYN
        });
    }

    render() {
        const Content_wrapper =  styled.div`
            display : flex;
        `;

        const Wrapper =  styled.div`
        `;

        return (
        	<Content_wrapper>
	        	<Menubar ToggleModal={this.ToggleModal}/>
	        	<Board/>
                <LoginModal onModalYN={this.state.onModalYN}/>
        	</Content_wrapper>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));