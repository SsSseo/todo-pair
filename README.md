# To Do List

![Alt text](<ezgif.com-video-to-gif (19).gif>)
![](https://velog.velcdn.com/images/p_seo_hn/post/ac1ea824-bb64-4b6a-8c6e-4237d1355894/image.gif)

<br />
<br />

# 폴더 구조

<br />

📁components <br />
  📄InputText.jsx <br />
    ▪ 투두리스트의 제목, 내용을 받는 기능 <br />
    ▪ 제목 : title <br />
    ▪ 내용 : body <br />

  📄Plan.jsx <br />
    ▪ 리스트 하나의 컴포넌트 <br />

  📄List.jsx <br />
    ▪ plan 컴포넌트를 map으로 가져온다 <br />
    ▪ plan의 isDone 상황에 따라 working/done의 구현 <br />
    ▪ isDone : false -> Working <br />
    ▪ isDone : true -> Done <br />

<br />

📁pages <br />
  📄Detail.jsx <br />
    ▪ 클릭 한 리스트의 상세페이지  <br />

  ▪ 📄Home.jsx <br />
    ▪ 메인페이지 <br />

<br />

📁redux <br />
  📁config <br />
    📄configStore.js <br />
      ▪ 중앙 데이터 관리소 (모듈들을 객체 형태로 넣어줌) <br />

  📁 moduls <br />
    📄Plans.jsx  <br />
      ▪ Plans의 CRUD 구현 <br />
