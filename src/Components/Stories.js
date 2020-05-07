import React from 'react';
import { useFetch } from './Hook';

const Stories = () => {

    const stories = useFetch('https://news-proxy-server.appspot.com/topstories', [])
    
    return (
        <div className="Stories">
            <h3>latest Tech Stories</h3>
            {
                stories.map(story => {
                    const {id,by, time, title,url} = story;

                    return(
                        <div key={id}>
                        <a href={url}>{title}</a>
                        <div>{by} - {new Date(time*1000).toLocaleTimeString()}</div>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Stories;