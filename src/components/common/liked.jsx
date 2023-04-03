import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faThumbsDown} from '@fortawesome/free-solid-svg-icons';



class Like extends Component {


    render() { 
        return (
            <div style={{cursor : "pointer"}} >
            { this.props.liked  ?  
            <FontAwesomeIcon onClick={this.props.onClick} icon={faHeart} /> : 
            <FontAwesomeIcon onClick={this.props.onClick} icon={faThumbsDown} />} 
            </div>
        );
    }
}
 
export default Like;