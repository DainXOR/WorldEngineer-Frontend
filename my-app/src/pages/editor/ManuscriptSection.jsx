import { createResource, createEffect} from "solid-js";
import { ProjectsApi } from "../../http/api/projectsApi";
import { ResourceTextCreate, ResourceTextUpdate } from "../../models/ResourceModels";

const MAX_UNSAVED_TIME = 5000;
let lastSaveTime = 0;
let scriptChanged = false;

const startTimedSave = (scriptGetter) => window.setInterval(() => {
    const timeElapsed = Date.now() - lastSaveTime; 
    if (scriptChanged && timeElapsed > MAX_UNSAVED_TIME){
        saveScript(scriptGetter().resource);
        scriptChanged = false;
    }
}, 500);

const saveScript = (scriptObj) => {
    let scriptDiv = document.getElementById("script-content");
    if (scriptDiv){
        const updateBody = ResourceTextUpdate.of(
            scriptObj.id,
            scriptObj.id_project,
            "script",
            1,
            scriptDiv.innerHTML
        );

        ProjectsApi.Resources.updateTextByID(scriptObj.id, updateBody);
        lastSaveTime = Date.now();
    }
}



//window.addEventListener("beforeunload", () => {
//    console.log("Unloading");
//    if (script()?.response?.ok){
//        console.log("Saving");
//        saveScript(script().resource);
//    }
//});

function ManuscriptSection(props) {
    const [script, {mutate, refetch}] = createResource(props.project, async (p) => {
        let res = await ProjectsApi.Resources.getTextByProjectID(p.id);
        if (res?.response?.ok){
            return res;
        }

        res = await ProjectsApi.Resources.createText(ResourceTextCreate.of(p.id, "script", 1, ""))
        if (res.ok){
            return await ProjectsApi.Resources.getTextByProjectID(p.id);
        }
            
    });

    createEffect(() => {
        if (script()?.response?.ok){
            let scriptDiv = document.getElementById("script-content");

            if (scriptDiv){
                console.log("Data: ", script().resource.data.length);
                scriptDiv.innerHTML = script().resource.data;
                scriptDiv.addEventListener("keypress", (e) => {
                    console.log("Event: ", e.key);
                    scriptChanged = true;

                    if (e.key === " " || e.key === "Enter"){
                        saveScript(script().resource);
                        scriptChanged = false;
                    }
                });
                startTimedSave(script);
            }
        }
    });

    return (
        <div>
            <h1>Manuscript</h1>
            <div>
                <div contentEditable="true" translate="no" id="script-content" class="h-screen text-left">

                </div>

            </div>
        </div>
    );
}

export default ManuscriptSection;