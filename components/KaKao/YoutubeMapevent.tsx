/*global kakao */
import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import './Top5Mapevent.css';

interface Props {
  videoid: any;
}

const YoutubeMapevent: FC<Props> = ({ children, videoid }) => {
  const latt = useRef(0);
  const long = useRef(0);
  const kakao = (window as any).kakao;
  const [place, setPlace] = useState([] as any);
  const [youtubemap, setYoutubemap] = useState();

  useEffect(() => {
    setPlace([]);
    axios.get(`/api/vlog/findplace/${videoid}`).then((response) => {
      setPlace(response.data.data);
    });
  }, [videoid]);

  useEffect(() => {
    if (place.length !== 0) {
      mapscript();
    }
  }, [place]);

  useEffect(() => {
    let container = document.getElementById('youtubemap');
    let options = {
      center: new kakao.maps.LatLng(37.82465, 127.49651),
      level: 10,
    };
    setYoutubemap(new kakao.maps.Map(container, options));
  }, []);

  const mapscript = () => {
    kakao.maps.load(() => {
      place.forEach((el: any) => {
        latt.current += el.location_y;
        long.current += el.location_x;
      });
      place.map((el: any) => {
        var imageSize = new kakao.maps.Size(30, 30),
          imageOption = { offset: new kakao.maps.Point(27, 69) };

        const markerImage = new kakao.maps.MarkerImage(`/src/icon/${el.categoryid}.png`, imageSize, imageOption);
        const marker = new kakao.maps.Marker({
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(el.location_y, el.location_x),
          //이미지 마커 불러오기
          image: markerImage,
        });
        marker.setMap(youtubemap);
        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: el.name, // 인포윈도우에 표시할 내용
        });
        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(youtubemap, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
      });
      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
      function makeOverListener(map: any, marker: any, infowindow: { open: (arg0: any, arg1: any) => void }) {
        return function () {
          infowindow.open(map, marker);
        };
      }
      // 인포윈도우를 닫는 클로저를 만드는 함수입니다
      function makeOutListener(infowindow: { close: () => void }) {
        return function () {
          infowindow.close();
        };
      }
    });
  };
  return (
    <div style={{ position: 'relative' }}>
      <div id="youtubemap" style={{ width: '50vw', height: '40vw', display: 'inline-block' }}></div>
    </div>
  );
};

export default YoutubeMapevent;
