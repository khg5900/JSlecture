const mapContainer = document.querySelector(".map");

const mapOption = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),

  level: 2,
};

const map = new kakao.maps.Map(mapContainer, mapOption);
