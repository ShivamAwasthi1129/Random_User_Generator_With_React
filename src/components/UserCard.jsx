import React from "react";
import "./UserCard.css"

const UserCard = (props) =>{
  console.log(props.data);
return (
  <div class="card">
  <div class="img-avatar">
  <img className="Profile-img" src={props.data.picture.medium} alt="" />
  </div>
  <div class="card-text">
    <div class="portada">
    
    </div>
    <div class="title-total">   
      <div class="title">Random User Generator</div>
      <h2>{props.data.name.first} {props.data.name.last}</h2>
  
  <div class="desc">{props.data.phone}</div>
  <div class="desc">{props.data.email}</div>
  <div class="desc">{props.data.location.city} , {props.data.location.state}</div>
  <div class="actions">
    <button className="btn"><i class="far fa-heart"><img src="https://cdn.hugeicons.com/icons/favourite-stroke-rounded.svg" alt="favourite" width="24" height="24" /></i></button>
    <button className="btn"><i class="far fa-envelope"><img src="https://cdn.hugeicons.com/icons/mail-love-01-stroke-rounded.svg" alt="mail-love-01" width="24" height="24" /></i></button>
    <button className="btn"><i class="fas fa-user-friends"><img src="https://cdn.hugeicons.com/icons/user-stroke-rounded.svg" alt="user" width="24" height="24" /></i></button>
  </div>
  </div>
 
  </div>
  
 
  
</div>
  )

}
export default UserCard;