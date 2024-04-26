import { useState, useEffect } from "react";
import { GetRandomUser } from "./api";
import UserCard from "./components/UserCard";
import "./App.css";
function App() {

  const [userData , setUserData] = useState(null);
  const [refresh , setRefresh] = useState(0);


    useEffect(()=>{
      GetRandomUser().then((user)=> setUserData(user.results[0]));
    },[refresh])


  return (
    <div className="App">
      {userData && <UserCard data={userData}/>}
      <button className="Refresh-btn" onClick={()=>{setRefresh(refresh+1)}}>Refresh User</button>
    </div>
  );
}

export default App;
