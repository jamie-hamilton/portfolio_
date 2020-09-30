import React from 'react';
import Navigation from '../components/Navigation';
import Foot from '../components/Footer';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                    {this.props.children}
                <Foot />
            </>
        );
    }
}

export default Layout;
