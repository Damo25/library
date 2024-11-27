import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import ContentBoxLogin from '../components/ContentBoxLogin';
import Footer from '../components/Footer';
import { data } from 'react-router-dom';


function Login() {

    useEffect(()=>{//fetch /login function from proxity server
        fetch("/login").then((res)=>
            res.json().then((data)=>{
                //allegedly putting data being sent here should pair?
                //is definetly working as proxity as rendering whole page
            })
        );
    },[]);

return (
    <>
        <Navbar />
        <ContentBoxLogin />
        <Footer />
    </>
);
};

export default Login;