<script>
  import { userName, hasTheUserChosenAUserName } from "../stores/stores";
  let userNamerValue = "";

  function startChat(e) {
    e.preventDefault();
    if (userNamerValue !== "") {
      hasTheUserChosenAUserName.update((value) => (value = true));
      userName.update((value) => (value = userNamerValue.trim()));
      return;
    }
    alert("Please enter a Username");
  }
</script>

<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <!-- Svg From svgrepo -->
    <img class="mx-auto my-4" src="https://www.svgrepo.com/show/428665/thai-pattern-architecture-6.svg" alt="" />
    <h1 class="my-4 text-2xl">Hello there, Welcome.</h1>
    <div class="my-4">
      <p>Enter the name by which you will be recognized in the room.</p>
    </div>
    <div class="flex">
      <input bind:value="{userNamerValue}" class="w-full border-2 py-2 pl-4" type="text" required />
      <button on:click="{startChat}" class="bg-green-400 px-5 py-3 text-white hover:bg-green-300">Go</button>
    </div>
  </div>
</div>
