import React from 'react';
import styled from 'styled-components';


const Title = styled.a`
    cursor : pointer;
`

class BoardPost extends React.Component{

    goPostView = () => {
        this.props.goPostView(this.props.post.bp_id);
    }

    render(){
        const { bp_title, bp_views, bp_writer_name, bp_date } = this.props.post;

        return(
            <React.Fragment>
                <tr>
                    <td>{this.props.index+1}</td>
                    <td><Title onClick={this.goPostView}>{bp_title}</Title></td>
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