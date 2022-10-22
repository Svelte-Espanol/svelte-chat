<script>
  // import { channel } from "./lib/socketConnection";
  import ViewLoader from "./components/viewLoader.svelte";
  import Welcome from "./components/welcome.svelte";
  import { hasTheUserChosenAUserName } from "./stores/stores";

  // let menssages = {
  //   android: [],
  // };

  // channel.on('app_android', (data) => {
  //   menssages.android = menssages.android.concat(data);
  // });
</script>

<!-- <main>
  Hola mundo sockets

  <div>
    <h1>Android</h1>
    <ul>
      {#each menssages.android as menssage}
        <li>{menssage}</li>
      {/each}
    </ul>
  </div>
</main> -->
<main>
  {#if !$hasTheUserChosenAUserName}
    <Welcome />
  {/if}

  {#if $hasTheUserChosenAUserName}
    <ViewLoader />
  {/if}
</main>
