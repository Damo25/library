import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContentBoxRegister from '../components/ContentBoxRegister';


function Signup() {

    useEffect(()=>{//fetch /login function from proxity server
        fetch("/SignUp").then((res)=>
            res.json().then((data)=>{
                //insert data here
            })
        );
    },[]);

return (
    <>
        <Navbar />
        <ContentBoxRegister />
        <Footer />
    </>
);
};

export default Signup;