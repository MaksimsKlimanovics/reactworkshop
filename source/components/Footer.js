// Core
import React, { Component } from 'react';
import Links from './Links'

export default class Footer extends Component {
    render () {
        return (
            <div className = 'footer'>
                <Links />
                <span>© 2018 Instagram</span>
            </div>
        );
    }
}
