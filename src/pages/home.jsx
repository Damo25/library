import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import ContentBox from '../components/ContentBoxHome';
import Footer from '../components/Footer';


function Home() {

    const[data,setData]=useState([{}]);

    useEffect(()=>{
        fetch("/itemSearch").then(
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