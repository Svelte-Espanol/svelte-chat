<script>
  import MainRoom from "./mainRoom.svelte";

  let currentView = 0;
  const views = [MainRoom];
  let viewPortComponent = views[0];

  const updateViewPortComponent = (component) => {
    currentView = component;
    viewPortComponent = views[component];
  };
</script>

{#if viewPortComponent == views[currentView]}
  <div id="">
    <svelte:component this={viewPortComponent} />
  </div>
{/if}
