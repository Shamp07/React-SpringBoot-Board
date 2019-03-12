import '../webapp/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './menu/Menubar.jsx'
import Board from './board/Board.jsx'
import styled, { css } from 'styled-components';

class MainPage extends React.Component {
 
    render() {
        const Content_wrapper =  styled.div`
            display : flex;
        `;

        return (
        	<Content_wrapper>
	        	<Menubar/>
	        	<Board/>
        	</Content_wrapper>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));