import { createEffect, createResource } from "solid-js";

import NavBarPersonal from '../components/NavBarPersonal';
import SideBar from '../components/SideBar';

import { UsersApi } from "../http/api/usersApi";


function ProfilePage(props) {

  const path = props.location.pathname;
  const [user, {mutate, refetch}] = createResource(async () => (await UsersApi.getByID(localStorage.getItem("user_id"))).json());

  return (
    <div>
        <NavBarPersonal user={user()} />
        <SideBar />
        
        <h1>Profile</h1>
        <p>My profile</p>
    </div>
  );
}

export default ProfilePage;