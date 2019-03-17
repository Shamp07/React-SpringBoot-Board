import React from 'react';
import styled from 'styled-components';


const Title = styled.a`
    cursor : pointer;
`

class BoardPost extends React.Component{

    render(){
        const { bp_id , bp_title, bp_views, bp_writer_name, bp_date } = this.props.post;

        return(
            <React.Fragment>
                <tr>
                    <td>{bp_id}</td>
                    <td><Title>{bp_title}</Title></td>
                    <td>0</td>
                    <td>{bp_views}</td>
                    <td>{bp_writer_name}</td>
                    <td>{bp_date}</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default BoardPost;