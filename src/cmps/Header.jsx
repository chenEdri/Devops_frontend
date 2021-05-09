import { NavLink, withRouter } from "react-router-dom";
import React from "react";
import { connect } from 'react-redux'


export function _Header(props) {

    return (
        <div className="main-header flex sb align-center">
            <div className="left-nav">
                <NavLink className="link" to="/admin">Main-Page</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/stats">Stats</NavLink>
            </div>
        </div>
    )
}

export const Header = connect()(withRouter(_Header))