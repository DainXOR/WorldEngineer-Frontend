import { Switch, Match, createResource, createSignal, createEffect } from "solid-js";
import { useParams } from "@solidjs/router";

import { UsersApi } from "../http/api/usersApi";
import { ProjectsApi } from "../http/api/projectsApi";

import NavBarPersonal from "../components/NavBarPersonal";
import SideBar from "../components/SideBar";

import ManuscriptSection from "./editor/ManuscriptSection";

const Section = {
    DASHBOARD: 0,
    MANUSCRIPT: 1,
    CHARACTERS: 2,
    LOCATIONS: 3,
    MAPS: 4,
    RESEARCH: 5,
    TIMELINE: 6,
    CALENDAR: 7,
    ARCS: 8,
    RELATIONSHIPS: 9,
    ENCYCLOPEDIA: 10,
    MAGIC: 11,
    SPECIES: 12,
    CULTURES: 13,
    ITEMS: 14,
    SYSTEMS: 15,
    LANGUAGES: 16,
    RELIGIONS: 17,
    PHILOSOPHIES: 18,

}

function ProjectEditorPage(props) {
    const path = useParams();

    const [user, {userMutate, userRefetch}] = createResource(async () => (await UsersApi.getByID(localStorage.getItem("user_id"))).json());
    const [project, {projectMutate, projectRefetch}] = createResource(async () => (await ProjectsApi.getByID(path.projectID)).json());
    const [section, setSection] = createSignal(+localStorage.getItem("section") || Section.DASHBOARD);

    createEffect(() => {
        //console.log("User: ", user());
        //console.log("Project: ", project());
    });

    
    createEffect(() => {
        //if (section() === Section.MANUSCRIPT){
        //    let scriptDiv = document.getElementById("script-content");
//
        //    if (scriptDiv && project()){
        //        scriptDiv.innerHTML = project().manuscript;
        //        scriptDiv.addEventListener("input", () => console.log("Input"))
        //    }
        //}
    });

    
    
    return (
        <div>
            <NavBarPersonal user={user()}/>
            <SideBar sections={Section} currentSection={section()} setSection={setSection} project={project()}/>

            <div class="pl-44 pr-4 w-screen">
                <Switch>
                    <Match when={section() === Section.DASHBOARD}>
                        <div>
                            <h1>Dashboard</h1>
                            <p>Empty... For now</p>
                            
                        </div>
                    </Match>
                    <Match when={section() === Section.MANUSCRIPT}>
                        <ManuscriptSection user={user} project={project}/>
                    </Match>
                    <Match when={section() === Section.CHARACTERS}>
                        <div>
                            <h1>Characters</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.LOCATIONS}>
                        <div>
                            <h1>Locations</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.MAPS}>
                        <div>
                            <h1>Maps</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.RESEARCH}>
                        <div>
                            <h1>Research</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.TIMELINE}>
                        <div>
                            <h1>Timeline</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.CALENDAR}>
                        <div>
                            <h1>Calendar</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.ARCS}>
                        <div>
                            <h1>Arcs</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.RELATIONSHIPS}>
                        <div>
                            <h1>Relationships</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.ENCYCLOPEDIA}>
                        <div>
                            <h1>Encyclopedia</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.MAGIC}>
                        <div>
                            <h1>Magic</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.SPECIES}>
                        <div>
                            <h1>Species</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.CULTURES}>
                        <div>
                            <h1>Cultures</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.ITEMS}>
                        <div>
                            <h1>Items</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.SYSTEMS}>
                        <div>
                            <h1>Systems</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.LANGUAGES}>
                        <div>
                            <h1>Languages</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.RELIGIONS}>
                        <div>
                            <h1>Religions</h1>
                        </div>
                    </Match>
                    <Match when={section() === Section.PHILOSOPHIES}>
                        <div>
                            <h1>Philosophies</h1>
                        </div>
                    </Match>
                </Switch>
            </div>
            
        </div>
    );
}

export default ProjectEditorPage;