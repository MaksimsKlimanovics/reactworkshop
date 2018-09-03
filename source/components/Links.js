// Core
import React, { Component } from 'react';

import links from '../theme/assets/links';

export default class Links extends Component {
    render () {
        const _links = links.map((link) => {
            return (
                <li key={ link.id }>{ link.message }</li>
            );
        });
        return <ul className = 'links'>{ _links }</ul>;
    }
}
