/*global kakao */
import React, { useEffect } from 'react';
import { markerdata } from './MarkerData';

export default function Map() {
  const kakao = (window as any).kakao;
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    // var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    //   imageSize = new kakao.maps.Size(64, 69),
    //   imageOption = { offset: new kakao.maps.Point(27, 69) };

    markerdata.forEach((el) => {
      // 마커를 생성합니다
      var imageSize = new kakao.maps.Size(64, 69),
        imageOption = { offset: new kakao.maps.Point(27, 69) };

      const markerImage = new kakao.maps.MarkerImage(el.imageSrc, imageSize, imageOption);
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        // map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //이미지 마커 불러오기
        image: markerImage,
        // content: el.title,
      });

      marker.setMap(map);
      // 마커에 표시할 인포윈도우를 생성합니다
      // var infowindow = new kakao.maps.InfoWindow({
      //   content: el.title, // 인포윈도우에 표시할 내용
      // });

      // var content =
      //   '<div class="customoverlay">' +
      //   '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
      //   '    <span class="title">구의야구공원</span>' +
      //   '  </a>' +
      //   '</div>';

      // var customOverlay = new kakao.map.CustomOverlay({
      //   map: map,
      //   position: new kakao.maps.LatLng(el.lat, el.lng),
      //   image: el.title,
      //   yAnchor: 1,
      // });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      // kakao.maps.event.addListener(map, 'mouseover', makeOverListener(map, marker, infowindow));
      // kakao.maps.event.addListener(map, 'mouseout', makeOutListener(infowindow));
    });

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    // function makeOverListener(map: any, marker: any, infowindow: { open: (arg0: any, arg1: any) => void }) {
    //   return function () {
    //     infowindow.open(map, marker);
    //   };
    // }
    // // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    // function makeOutListener(infowindow: { close: () => void }) {
    //   return function () {
    //     infowindow.close();
    //   };
    // }
  };

  return <div id="map" style={{ width: '100vw', height: '100vh' }}></div>;
}
