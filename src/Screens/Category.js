import React from "react";
import Header from '../Components/Header';
import BreadCrumb from '../Components/BreadCrumb';
import Posts from '../Components/Posts';
import Sidebar from "../Components/SideBar";
import Footer from '../Components/Footer';

const Category = () =>{
    return (
        <>
        <Header/>
        <BreadCrumb/>
        <section class="blog-section">
			<div class="container">
				<div class="row">
                    <Posts/>
                    <Sidebar/>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    ) 
};

export default Category;