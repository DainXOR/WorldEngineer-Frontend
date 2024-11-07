import { A } from "@solidjs/router";

import logo from '../assets/logo_transparent.png';
import profile_p from '../assets/profile_placeholder_icon.png';
import { createEffect, createResource, createSignal } from "solid-js";
import { UtilsApi } from "../http/api/utilsApi";
import { UsersApi } from "../http/api/usersApi";
import { toUrl } from "../tools/string";

let counter = 0;

function NavBarPersonal(props) {
    const [profilePic, setProfilePic] = createSignal(profile_p);
    const [pp, {ppMutate, ppRefetch}] = createResource(() => props.user, async (u) => UtilsApi.getProfilePicture(u.id));

    createEffect(() => {
        setProfilePic(pp());
    });

    return (
        <nav class="fixed top-0 flex flex-row w-screen m-0 p-4 gap-8 text-xl font-bold bg-we-blue-950 text-white">
            <A href="../projects" class="flex flex-row justify-center items-center gap-4 m-0 p-0 min-w-max">
                <img class="text-center cursor-pointer w-20 h-20 object-cover object-center rounded-full hover:shadow-we-blue-800 hover:shadow-md transition-shadow" width={75} height={75} src={logo} alt="World Engineer Logo" />
            </A>
            <div class='nav-item nav-search-bar'>
                <input type="text" name="" id="" />
            </div>
            <div class='nav-item nav-links'>
                <A href={"../profile"} class="text-center cursor-pointer">
                    <img class="w-12 h-12 object-cover object-center rounded-full hover:shadow-we-blue-800 hover:shadow-md transition-shadow" src={profilePic()} alt="profile picture" />
                </A>
            </div>
            
        </nav>
    );
}

export default NavBarPersonal;