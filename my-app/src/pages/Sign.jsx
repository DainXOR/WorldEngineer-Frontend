import { Show, Switch, Match, createSignal } from 'solid-js';
import { useNavigate } from "@solidjs/router";

import EmailForm from "../components/EmailForm";
import CodeForm from "../components/CodeForm";

import { AuthApi } from "../http/api/authApi";
import { UsersApi } from "../http/api/usersApi";
import { UtilsApi } from "../http/api/utilsApi";
import { UserCreate, UserModel } from "../models/userModels";
import UserForm from "../components/UserForm";

const LogStep = {
    EMAIL: 0,
    AUTH: 1,
    REGISTER: 2
}
const LogType = {
    LOG_IN: 0,
    SIGN_UP: 1
}

function SignPage() {
    const [logStep, setLogStep] = createSignal(LogStep.EMAIL);
    const [logType, setLogType] = createSignal(LogType.LOG_IN);
    const [email, setEmail] = createSignal("");
    const authApi = new AuthApi();
    const usersApi = new UsersApi();
    const navigate = useNavigate();

    /**
     * @param {string} email
     * @returns {void}
     * */
    const onLogInSubmit = async (email) => {
        const result = await authApi.login(email);

        if (!result.ok) {
            console.log("Error with login");
            console.log(result);
            return;
        }
        
        setEmail(email);
        setLogStep(LogStep.AUTH);
    }
    /**
     * @param {string} email
     * @returns {void}
     * */
    const onSignUpSubmit = async (email) => {
        const result = await authApi.register(email);

        if (!result.ok) {
            console.log("Error with login");
            console.log(result);
            return;
        }
        
        setEmail(email);
        setLogStep(LogStep.AUTH);
    }
    /**
     * @param {string} code
     * @returns {void}
     * */
    const onCodeSubmit = async (code) => {
        const result = await authApi.authenticate(email(), code);

        if (!result.ok) {
            console.log("Error with login");
            console.log(result);
            return;
        }
        
        if (logType() === LogType.SIGN_UP) {
            setLogStep(LogStep.REGISTER);

        } else {
            console.log(result);
            
            const user = (await result.json());
            console.log(user);
            
            localStorage.setItem("user_id", user.id);
            user.name_tag = user.name_tag.replace("#", "%23");
            navigate("/" + user.name_tag + "/projects");
        }
    }
    /** 
     * @param {UserCreate} user
     * @returns {void}
     * */
    const onRegisterSubmit = async (user) => {
        const [validUsername, validNameTag] = await Promise.all([
                UtilsApi.checkUsername(user.username), 
                UtilsApi.checkNameTag(user.name_tag)
            ]);

        if (!validUsername || !validNameTag) {
            return;
        }

        user.email = email();
        const result = await usersApi.create(user);

        if (!result.ok) {
            console.log("Error with login");
            console.log(result);
            return;
        }
        else {
            const user = (await result.json());

            localStorage.setItem("user_id", user.id);
            navigate("/" + user.name_tag + "/projects");
        }
    }

    
    return (
        <div class="gap-4">
            <div class="gap-4">
                <button onClick={() => setLogType(LogType.LOG_IN)}>Log In</button>
                <button onClick={() => setLogType(LogType.SIGN_UP)}>Sign Up</button>
            </div>
            <div>
                <Switch>
                    <Match when={logStep() === LogStep.EMAIL}>
                        <Switch>
                            <Match when={logType() === LogType.LOG_IN}>
                                <EmailForm submitText="Log In" onSubmit={onLogInSubmit}/>
                            </Match>
                            <Match when={logType() === LogType.SIGN_UP}>
                                <EmailForm submitText="Sign Up" onSubmit={onSignUpSubmit}/>
                            </Match>
                        </Switch>
                    </Match>
                    <Match when={logStep() === LogStep.AUTH}>
                        <CodeForm submitText="Send Code" onSubmit={onCodeSubmit}/>
                    </Match>
                    <Match when={logStep() === LogStep.REGISTER}>
                        <UserForm submitText="Register" onSubmit={onRegisterSubmit}/>
                        
                    </Match>
                </Switch>
                
                
            </div>
        </div>
    );

}

export default SignPage;