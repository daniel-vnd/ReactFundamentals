import React from 'react';
import Menu from '../component/Menu';
import { useParams } from 'react-router';

const AboutPage = () => {

    const {id, name} = useParams();

    return (
        <div>
            <Menu />
            <h1>This is the About Page</h1>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default AboutPage;<h1>This is the About Page</h1>