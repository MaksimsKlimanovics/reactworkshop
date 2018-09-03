// Core
import React, { Component } from 'react';

// Instruments
import stories from '../theme/assets/stories';

// Components
import Story from './Story';

export default class Stories extends Component {
    render () {
        const _stories = stories.map((story) => {
            return (
                <Story className='story' key = { story.id } alt = { story.message } src = { story.src } />
            );
        });

        return <div className = 'stories'>{_stories}</div>;
    }
}
