import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import ContentBox from '../components/ContentBoxHome';
import Footer from '../components/Footer';


function Home() {

    useEffect(()=>{//fetch /login function from proxity server
        fetch("/itemSearch").then((res)=>
            res.json().then((data)=>{
                //insert data here
            })
        );
    },[]);

return (
    <>
        <Navbar />
        <ContentBox />
        <Footer />
    </>
);
};

export default Home;