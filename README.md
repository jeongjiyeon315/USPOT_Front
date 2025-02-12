# USPOT

![슬라이드1](https://user-images.githubusercontent.com/63544044/207474885-73317885-8acc-43cf-aacc-b7308ca36442.JPG)
--------------------------------------------
### 개발 배경   
여행을 떠날 때, 여행 브이로그를 많이 참고하여 여행 계획을 세우는데 여행 브이로그는 시간이 많이 소요되며 정보도 한눈에 찾기 힘들다는 단점이 있음. 이러한 단점을 보완하기 위해 자연어처리 기술로 영상을 분석하여 유튜버가 방문한 장소와 함께 간 다른 여행지를 한 눈에 볼 수 있도록 했으며, 영상에 등장하지 않았지만 유튜버가 다녀간 여행지에서 최대 20km근방의 방문하면 좋을 것 같은 여행지 추천을 해줌.

### 기능 소개
![uspot 1번](https://user-images.githubusercontent.com/63544044/207481478-44cbea33-e09b-4ce9-90ce-985bf8770fcf.png)
\- 1페이지
1. 가고싶은 지역을 검색하거나 선택한다.
2. 선택한 지역을 지도에서 볼 수 있다.
3. Let's Go 버튼을 누르면 선택한 지역의 여행지를 볼 수 있다.

![uspot 2번](https://user-images.githubusercontent.com/63544044/207481497-61267805-5af5-41c2-8ef7-4ddd9dff3fe3.png)
\- 2페이지
1. 카테고리를 선택한다. 카카오 지도 API를 기준으로 관광명소, 음식점, 카페의 세 가지로 나누었다.
2. 선택한 지역과 카테고리에 관련된 여행지 중 TOP5의 장소를 카드 슬라이드 형태로 보여준다.
3. 다섯 개의 장소가 표시된 지도를 볼 수 있다.
4. 각 장소를 방문한 브이로그 목록을 보여준다.
5. 브이로그 아래 '영상 속 장소 더보기' 버튼을 누르면 해당 브이로그에 등장한 장소 목록과 장소들을 표시한 지도를 보여준다.
6. 장소마다 하트를 누르면 MYPLACE에서 볼 수 있다.

![uspot 3번](https://user-images.githubusercontent.com/63544044/207481510-9d466981-9475-4321-8937-6ee806876ea7.png)
\- 3페이지
1. 앞페이지에서 본 장소의 주변 추천 장소를 볼 수 있다. 거리, 정렬 기준, 카테고리를 선택한다.
2. 선택한 기준에 맞는 주변 장소의 이름, 위치, 사진을 최대 여섯개까지 볼 수 있다. (한국관광공사의 국/영문 관광 정보 서비스 API에서위치기반 관광 정보 조회 기능을 이용)  

\- MYPLACE
![uspot 4번](https://user-images.githubusercontent.com/63544044/207481627-3d1a0383-96cc-42b6-8951-c6a5255a2b2c.png)
\(1\) 코스 만들기
1. 출발지를 검색하여 출발할 위치를 선택한다.
2. 하트를 눌러 등록해 놓은 장소들의 목록과 지도상의 위치를 볼 수 있다.
3. 장소 이름을 누르면 자신의 코스에 추가된다.
4. 코스명을 설정하고 저장할 수 있다.  

![uspot 5번](https://user-images.githubusercontent.com/63544044/207481745-ede62112-e393-4393-a061-c77a988beca1.png)
\(2\) 코스 수정하기
1. 수정할 코스를 선택한다.
2. 장소를 추가하거나 삭제할 수 있고 코스명도 변경할 수 있다.

![uspot 6번](https://user-images.githubusercontent.com/63544044/207481750-de155254-8268-4420-9cc4-f3aa02d8f48e.png)
\(3\) 코스 보기
1. 만든 코스들 중 하나를 선택한다.
2. 코스에 보함되어 있는 장소들을 보여주고 지도 상에 순서대로 나타낸다. 
