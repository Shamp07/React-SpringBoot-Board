import React from 'react';
import styled from "styled-components";
import * as rs from 'reactstrap';

const liStyle = {
    backgroundColor : "#24292e",
    borderColor : "#e6e6e6",
    borderRight : "none",
    borderLeft : "none",
    borderTop : "0.5px solid #555",
    borderBottom : "none"
};

const BoardLink = styled.a`
    cursor : pointer;
    color : #hsla(0,0%,100%,.7); !important;
    &:hover {
        color : #bbb !important;
    };
`;


class MenuCategory extends React.Component{

    changeCategory = () => {
        this.props.changeCategory(this.props.category.bc_id);
    };

    render() {
        return (
            <rs.ListGroupItem style={liStyle}>
                <BoardLink onClick={this.changeCategory}>
                    {this.props.category.bc_name}
                </BoardLink>
            </rs.ListGroupItem>
        )
    }
}

export default MenuCategory;