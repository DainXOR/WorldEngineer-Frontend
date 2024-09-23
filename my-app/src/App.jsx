import { createSignal, createResource, Switch, Match, Show } from "solid-js";

import logo from './logo.svg';
import styles from './App.module.css';

const apiUrl = "https://sjvf78xp-8080.use2.devtunnels.ms/"
const localUrl = "http://127.0.0.1:8080/"
let url = apiUrl
let connectionStatus = true

const fetchUser = async (id) => {
  const response = await fetch(url + `api/v0/user/id/${id}`);
  return response.json();
}

async function checkUrl(testUrl) {
  const response = await fetch(testUrl);
  return response.status === 200
}

const selectUrl = async () => {
  if (await checkUrl(apiUrl)) {
    url = apiUrl;
  }
  else if (await checkUrl(localUrl)) {
    url = localUrl;
  }
  
  connectionStatus = false;
}

function App() {
  let component = null;
  selectUrl();

  if (connectionStatus) {
    const [userId, setUserId] = createSignal();
    const [user] = createResource(userId, fetchUser);
    
    component = (
      <div>
        <input
          type="number"
          min="1"
          placeholder="Enter Numeric Id"
          onInput={(e) => setUserId(e.currentTarget.value)}
        />
        <Show when={user.loading}>
          <p>Loading...</p>
        </Show>
        <Switch>
          <Match when={user.error}>
            <span>Error: {user.error()}</span>
          </Match>
          <Match when={user()}>
            <div>{JSON.stringify(user())}</div>
          </Match>
        </Switch>

      </div>
    )
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      {component}
    </div>
  );
}

export default App;
