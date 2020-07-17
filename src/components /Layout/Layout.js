import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/ToolBar';
import classes from  './Layout.module.css';

const Layout = props => {
    return (
        <Aux >
       <Toolbar />
        <div className = {classes.Content}>
            {props.children}
        </div>
        </Aux>
    )
}
export default Layout;