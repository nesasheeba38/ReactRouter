import { useParams } from "react-router-dom"

export const UserProfile=()=>{
    let {id}=useParams();
return(
    <div>
    <h3>User Profile Page{id}</h3>
    </div>
);
};
