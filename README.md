📁components <br />
&nbsp; 📄InputText.jsx <br />
&nbsp; &nbsp; - 투두리스트의 제목, 내용을 받는 기능 <br />
&nbsp; &nbsp; - 제목 : title <br />
&nbsp; &nbsp; - 내용 : body <br />
&nbsp; 📄Plan.jsx <br />
&nbsp; &nbsp; - 리스트 하나의 컴포넌트 <br />
&nbsp; 📄List.jsx <br />
&nbsp; &nbsp; - plan 컴포넌트를 map으로 가져온다 <br />
&nbsp; &nbsp; - plan의 isDone 상황에 따라 working/done의 구현 <br />
&nbsp; &nbsp; - isDone : false -> Working <br />
&nbsp; &nbsp; - isDone : true -> Done <br />
<br />
📁pages <br />
&nbsp; 📄Detail.jsx <br />
&nbsp; &nbsp; - 클릭 한 리스트의 상세페이지  <br />
&nbsp; 📄Home.jsx <br />
&nbsp; &nbsp; - 메인페이지 <br />
<br />
📁redux <br />
&nbsp; 📁config <br />
&nbsp; &nbsp; 📄configStore.js <br />
&nbsp; &nbsp; &nbsp; - 중앙 데이터 관리소 (모듈들을 객체 형태로 넣어줌) <br />
&nbsp; 📁 moduls <br />
&nbsp; &nbsp; 📄Plans.jsx  <br />
&nbsp; &nbsp; &nbsp; - Plans의 CRUD 구현 <br />
