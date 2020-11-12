import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import TrendingPost from '../Components/TrendingPost';
import FreshStories from '../Components/FreshStories';
import LatestArticles from '../Components/LatestArticles';
const Home = () =>{
    return <>
        <Header/>
        <Slider/>
        <TrendingPost/>
        <FreshStories/>
        <LatestArticles/>
        <Footer/>

    </>
};

export default Home;