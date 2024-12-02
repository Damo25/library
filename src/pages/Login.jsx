import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import ContentBoxLogin from '../components/ContentBoxLogin';
import Footer from '../components/Footer';
import { data } from 'react-router-dom';


function Login() {

    const[data,setData]=useState([{}]);

    useEffect(()=>{//fetch /login function from proxity server
        fetch("/login").then(
            res=>res.json()).then(data=>{
                setData(data)
                console.log(data)
            }
           )
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