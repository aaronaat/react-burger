import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends React.Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosed = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggle = () => {
        this.setState((preState) => {
            return {showSideDrawer: !preState.showSideDrawer};
        });
    }

    render() {
    return (
    <Aux>
    
    <Toolbar drawerToggleClicked={this.sideDrawerToggle} />

    <SideDrawer 
    open={this.state.showSideDrawer}
    closed={this.sideDrawerClosed} />

    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Aux>
    )
    }
}

export default Layout;
