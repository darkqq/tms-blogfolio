import React, {useEffect, useState} from 'react';
import {getData} from "./data/tempData";
import {Card} from "./components/cards";


const App = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getData);
    })


    return (
        <>
            {posts.slice(0, 1)
                .map(post => <Card
                    type='lg'
                    key={post['id']}
                    date={post['date']}
                    image={post['image']}
                    title={post['title']}
                    description={post['text']}
                />)}
            {posts.slice(0, 1)
                .map(post => <Card
                    type='md'
                    key={post['id']}
                    date={post['date']}
                    image={post['image']}
                    title={post['title']}
                    description={post['text']}
                />)}
            {posts.slice(0, 1)
                .map(post => <Card
                    type='sm'
                    key={post['id']}
                    date={post['date']}
                    image={post['image']}
                    title={post['title']}
                    description={post['text']}
                />)}
        </>
    );
};

export default App;