# 팀원
민서영, 박서현<br />

<br />
<br />

# 역할분담
서영 : 글 추가, 리스트 보이기, 상세페이지 구현, 디자인 <br />
서현 : 글 추가, 리스트 보이기, 글 삭제, 글 상태 변경, 디자인 <br />

<br />
<br />

# 코드컨벤션
1. 카멜케이스 사용
2. tab 공백 2개
3. const 우선 선언

<br />
<br />

# To Do List

![](https://velog.velcdn.com/images/p_seo_hn/post/ac1ea824-bb64-4b6a-8c6e-4237d1355894/image.gif)

<br />
<br />

# 폴더 구조

<br />

📁components <br />
&nbsp; 📄InputText.jsx <br />
&nbsp; &nbsp; &nbsp; ▪ 투두리스트의 제목, 내용을 받는 기능 <br />
&nbsp; &nbsp; &nbsp; ▪ 제목 : title <br />
&nbsp; &nbsp; &nbsp; ▪ 내용 : body <br />
&nbsp; 📄Plan.jsx <br />
&nbsp; &nbsp; &nbsp; ▪ 리스트 하나의 컴포넌트 <br />
&nbsp; 📄List.jsx <br />
&nbsp; &nbsp; &nbsp; ▪ plan 컴포넌트를 map으로 가져온다 <br />
&nbsp; &nbsp; &nbsp; ▪ plan의 isDone 상황에 따라 working/done의 구현 <br />
&nbsp; &nbsp; &nbsp; ▪ isDone : false -> Working <br />
&nbsp; &nbsp; &nbsp; ▪ isDone : true -> Done <br />

<br />

📁pages <br />
&nbsp; 📄Detail.jsx <br />
&nbsp; &nbsp; &nbsp; ▪ 클릭 한 리스트의 상세페이지  <br />
&nbsp; 📄Home.jsx <br />
&nbsp; &nbsp; &nbsp; ▪ 메인페이지 <br />

<br />

📁redux <br />
&nbsp; 📁config <br />
&nbsp;&nbsp;&nbsp; 📄configStore.js <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▪ 중앙 데이터 관리소 (모듈들을 객체 형태로 넣어줌) <br />
&nbsp; 📁 moduls <br />
&nbsp;&nbsp;&nbsp; 📄Plans.jsx  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▪ Plans의 CRUD 구현 <br />
