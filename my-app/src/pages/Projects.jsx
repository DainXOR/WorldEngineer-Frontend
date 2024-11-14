import { createEffect, createResource } from "solid-js";

import NavBarPersonal from '../components/NavBarPersonal';

import { UsersApi } from "../http/api/usersApi";
import { A, useParams } from "@solidjs/router";
import { ProjectsApi } from "../http/api/projectsApi";
import { toUrl } from "../tools/string";


function ProjectsPage(props) {
  console.log("Projects Page");
  const path = useParams();
  const [user, {userMutate, userRefetch}] = createResource(async () => (await UsersApi.getByID(localStorage.getItem("user_id"))).json());
  const [projects, {projectsMutate, projectsRefetch}] = createResource(user, async (u) => (await ProjectsApi.getByCreatorID(u.id)).json(), {initialValue: []});

  return (
    <div>
        <NavBarPersonal user={user()}/>
        
        <h1>My Projects</h1>

        <div class="grid grid-flow-col">
            {projects().map((project) => {
                return (
                    <A href={"../project/" + project.id} class="grid cursor-pointer outline outline-we-blue-600 transition-all hover:bg-we-blue-900">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </A>
                );
            })}
        </div>
    </div>
  );
}

export default ProjectsPage;