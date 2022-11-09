import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Choose from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Choose></Choose>
            <Contact></Contact>
        </div>
    );
};

export default Home;