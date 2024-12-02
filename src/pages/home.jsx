import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import ContentBox from '../components/ContentBoxHome';
import Footer from '../components/Footer';


function Home() {

    const[data,setData]=useState([{}]);

    useEffect(()=>{
        fetch("/http://localhost:5000/itemSearch").then(
            res=>res.json()).then(data=>{
                setData(data)
                console.log(data)
            }
           )
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