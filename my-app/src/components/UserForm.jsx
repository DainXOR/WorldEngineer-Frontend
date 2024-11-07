import { createSignal, createEffect } from "solid-js";
import { AuthApi } from "../http/api/authApi";
import { UtilsApi } from "../http/api/utilsApi";
import { UserCreate } from "../models/userModels";

function UserForm(props) {
  const [username, setUsername] = createSignal("");
  const [nameTag, setNameTag] = createSignal("");
  const [usernameDependant, setUsernameDependant] = createSignal(true);

  createEffect(async () => {
    setUsername(await UtilsApi.createUsername());
    setNameTag(await UtilsApi.createNameTag(username()));

    console.log("Username: ", username());
    console.log("Name Tag: ", nameTag());
  });

  async function handleUsernameChange(event) {
    setUsername(event.target.value);

    if (usernameDependant()) {
      setNameTag(await UtilsApi.createNameTag(username()));
    }
  }
  async function handleNameTagChange(event) {
    if (event.target.value.length > 0) {
      setUsernameDependant(false);
      setNameTag(event.target.value);
    }
    else {
      setUsernameDependant(true);
      setNameTag((await UtilsApi.createNameTag(initUsername)));
    }
    
  }
  
  async function handleSubmit(event) {
    event.preventDefault();

    let newUser = UserCreate.of(
      username(),
      nameTag(),
      ""
    );
    
    props.onSubmit(newUser);
  }

  return (
    <>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-5 group">
          <input type="username" name="floating_username" id="floating_username" value={username()} onChange={handleUsernameChange} class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
          <label for="floating_username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input type="name_tag" name="floating_name_tag" id="floating_name_tag" value={nameTag()} onChange={handleNameTagChange} class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
          <label for="floating_name_tag" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name Tag</label>
        </div>
        <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none text-sm focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {props.submitText}
        </button>
      </form>
    </>
  );
}

export default UserForm;