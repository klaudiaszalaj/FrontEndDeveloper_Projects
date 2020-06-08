import React from 'react'

class Like extends React.Component {

    render() {
        let classes = "fas fa-heart";
        if (!this.props.liked) classes = "far fa-heart";
        return <i onClick={this.props.onClick} id="heart" className={classes}></i>
        
    }
}

export default Like