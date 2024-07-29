async function onGeoOK(position) {
  console.log(position.coords);
  console.log(position.coords.latitude);
}
function onGeoError() {
  alert();
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
