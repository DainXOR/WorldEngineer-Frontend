import { createSignal, createEffect } from "solid-js";
import { AuthApi } from "../http/api/authApi";

function isEmailValid(emailAddress) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
}


function EmailForm(props) {
  const [email, setEmail] = createSignal('');
  const [emailValid, setEmailValid] = createSignal(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(email());
  }

  createEffect(() => {
    setEmailValid(isEmailValid(email()));
  });

  return (
    <>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-5 group">
          <input type="email" name="floating_email" id="floating_email" onChange={handleEmailChange} class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <button type="submit" disabled={!emailValid()} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {props.submitText}
        </button>
      </form>
    </>
  );
}

export default EmailForm;