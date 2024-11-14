import { createResource, createEffect} from "solid-js";
import { ProjectsApi } from "../../http/api/projectsApi";


function ManuscriptSection(props) {
    const [script] = createResource(props.project, (p) => console.log("Fetch manuscript: ", p));
    ProjectsApi.CollaboratorsApi.


    createEffect(() => {
        //let scriptDiv = document.getElementById("script-content");
//
        //    if (scriptDiv && script()){
        //        scriptDiv.innerHTML = script();
        //        scriptDiv.addEventListener("input", () => console.log("Input"))
        //    }
    });

    return (
        <div>
            <h1>Manuscript</h1>
            <div>
                <div contentEditable="true" translate="no" id="script-content" class="h-screen">

                </div>

            </div>
        </div>
    );
}

export default ManuscriptSection;