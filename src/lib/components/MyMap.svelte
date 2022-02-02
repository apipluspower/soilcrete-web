<script>
  import { Map, Marker } from '@beyonk/svelte-mapbox'
  let mapComponent

  function onReady() {
    mapComponent.flyTo({ center: [40.7127281, -74.0060152] })
    console.log(mapComponent)
  }
</script>

<Map
  accessToken="pk.eyJ1IjoidW1pbWNob2kiLCJhIjoiY2t5NDkzZDZmMDlyNzJ1b256Nmtoa2FpOCJ9.DcYsZzvXQuB7INO6Dn_k1Q"
  style="mapbox://styles/mapbox/outdoors-v11"
  bind:this={mapComponent}
  on:ready={onReady}
>
  <Marker lat="-74.0060152" lng="40.7127281" label="NYC" />
</Map>
