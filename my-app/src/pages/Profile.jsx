import { createEffect, createResource } from "solid-js";

import NavBarPersonal from '../components/NavBarPersonal';

import { UsersApi } from "../http/api/usersApi";
import { useParams } from "@solidjs/router";


function ProfilePage(props) {
  console.log("Profile Page");
  

  const path = useParams();
  const [user, {mutate, refetch}] = createResource(async () => (await UsersApi.getByID(localStorage.getItem("user_id"))).json());

  console.log("User: ", user());

  return (
    <div>
        <NavBarPersonal user={user()} />
        
        <h1>Profile</h1>
        <p>My profile</p>
    </div>
  );
}

export default ProfilePage;