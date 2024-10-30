import { Show, Switch, Match, createSignal } from 'solid-js';
import { useNavigate } from "@solidjs/router";

import EmailForm from "../components/EmailForm";
import Form from "../components/Form";

import { AuthApi } from "../http/api/authApi";

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
    const authApi = new AuthApi();
    // const navigate = useNavigate();

    const onLogInSubmit = async (email) => {
        const result = await authApi.login(email);

        if (!result.ok) {
            console.log("Error with login");
            console.log(result);
        }
        
        setLogStep(LogStep.AUTH);
    }
    const onSignUpSubmit = async (email) => {
        const result = await authApi.login(email);

        if (!result.ok) {
            console.log("Error with login");
            console.log(result);
        }
        
        setLogStep(LogStep.AUTH);
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
                        <Form/>
                    </Match>
                    <Match when={logStep() === LogStep.REGISTER}>
                        
                    </Match>
                </Switch>
                
                
            </div>
        </div>
    );

}

export default SignPage;