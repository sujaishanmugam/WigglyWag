import React, { useEffect } from 'react';
import '../App.css';
// import Banner from '../Components/Banner/Banner';
// import Blogs from '../Components/Blogs/Blogs';
// import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
// import Testimonials from '../Components/Testimonials/Testimonials';
import Feed from "../Components/Feed/Feed";
import Widgets from "../Components/widgets/Widgets";
const Reviews = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="heder-content">
        <Header />
        <div classname = "app__body">
        <Feed />
        {/* <Widgets /> */}
        </div>
        </div>
    );
};

export default Reviews;