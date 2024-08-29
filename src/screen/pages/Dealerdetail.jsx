import { useLocation } from 'react-router-dom';
import React, { useState, useRef } from "react";


function Dealerdetail() {
    const location = useLocation();
    const { dealer } = location.state || {};
    // const [status, setStatus] = useState('');
    let status =""

    const declineButton = async (e) => {
      e.preventDefault();

      status =  "extradata";
      

      console.log("Decline Button Clicked",status);

      try{

          const response = await fetch('http://localhost:8000/StatusActive/', {
            method:'POST',
            body: JSON.stringify({ status }), // Send the variable as JSON
            headers:{
              'Content-Type': 'application/json',
              'X-CSRFToken': getCookie('csrftoken'),
            },
        });
        if (response.ok){
          const data = await response.json();
        }else{
          const data = await response.json();
        }
      }catch(e){
        console.log("Error:",e);
        
      }
  }
    const approveButton = async (e) => {
        e.preventDefault();
        status = "approved";

        console.log("Approve Button Clicked",status);


        try{
            const response = await fetch('http://localhost:8000/StatusActive/', {
              method:'POST',
              body: JSON.stringify({ status }), // Send the variable as JSON
              headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
              },
          });
          if (response.ok){
            const data = await response.json();
          }else{
            const data = await response.json();
          }
        }catch(e){
          console.log("Error:",e);
          
        }
    }



    if (!dealer) {
        return <p>No dealer information available.</p>;
    }

    return (
        <div className="container-fluid" style={{flexDirection:"column"}}>
          <div style={{paddingBottom:"40px"}}>
          <h3 style={{fontWeight:"bold"}}>Dealer Details</h3>
            <p><strong>ID:</strong> {dealer.id}</p>
            <p><strong>Name:</strong> {dealer.name}</p>
            <p><strong>Phone:</strong> {dealer.phone}</p>
            <p><strong>Mail:</strong> {dealer.mail}</p>
            <p><strong>DoB:</strong> {dealer.Dob}</p>
            <p><strong>Aadhar Card Number:</strong> {dealer.mail}</p>
            <p><strong>Aadhar Card Pdf:</strong> {dealer.aadharimg}</p>
            <p><strong>Pancard Number:</strong> {dealer.pancardnum}</p>
            <p><strong>Pancard Pdf:</strong> {dealer.pancardimg}</p>
            <p><strong>Driving Number:</strong> {dealer.drivingnum}</p>
            <p><strong>Driving Pdf:</strong> {dealer.drivingimg}</p>
            <p><strong>Vehicle Number:</strong> {dealer.vehiclenum}</p>
            <p><strong>Vehicle Type:</strong> {dealer.vehicletype}</p>
            <p><strong>Bank Number:</strong> {dealer.banknum}</p>
            <p><strong>IFSC code:</strong> {dealer.ifsc}</p>
            <p><strong>Bank User Name:</strong> {dealer.bankuser}</p>
            <p><strong>Address:</strong> {dealer.address}</p>
            <p><strong>City:</strong> {dealer.city}</p>
            <p><strong>State:</strong> {dealer.state}</p>
            <p><strong>Postcode:</strong> {dealer.postcode}</p>
            <p><strong>Nationality:</strong> {dealer.nationality}</p>  
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <button className='statusbutton' onClick={approveButton}>Approved</button>
                <button className='statusbutton' onClick={declineButton}>Rejected</button>
                <div style={{}}>
                    <span style={{fontSize:"20px",fontWeight: "700"}}>Enter queries/ Requirements :</span>
                <input/>
                </div>
            </div>    
          </div>
        </div>
    );
}


const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
export default Dealerdetail;
