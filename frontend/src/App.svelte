<script>
  import geckos from "@geckos.io/client";
  const channel = geckos({ url: 'http://localhost:4000', port: null });
  channel.onConnect((err) => console.log(err));

  let menssages = {
    android: [],
  };

  channel.on('app_android', (data) => {
    menssages.android = menssages.android.concat(data);
  });
</script>

<main>
  Hola mundo sockets

  <div>
    <h1>Android</h1>
    <ul>
      {#each menssages.android as menssage}
        <li>{menssage}</li>
      {/each}
    </ul>
  </div>
</main>