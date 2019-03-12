import '../webapp/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './menu/Menubar.jsx'


class MainPage extends React.Component {
 
    render() {
        return (
        	<React.Fragment>
	        	<Menubar/>
        	</React.Fragment>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));