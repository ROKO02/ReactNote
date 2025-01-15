<h2>기본 작업 설정</h2>
<div>
  <p>
    npm init react-app . -> public-index.html 제외 삭제 -> src-index.js 제외 삭제
-> index.js 수정
  </p>
  <p>
    CSS 스타일 기본 설정
  </p>
  <div>
    * {
  margin: 0 auto;
  padding: 0;
}
  </div>
  <p>
    어느 브라우저에서든 동일하게 보이게 하기 위해서
  </p>
</div>
<h2>StrictMode는 무엇일까?</h2>
<div>
  <p>엄격모드라고도 하며 더 많은 에러를 발견하고 예방하며 작은 동작 차이를 제어할 수 있다.</p>
  <p>최상단에 위치해야 활성화가 된다.</p>
  <p>일반적으로 권장되지만 필수는 아니며 ES6 클래스와 모듈은 기본적으로 엄격모드를 따름</p>
</div>
<h2>이벤트 객체 (e)</h2>
  <ul>
    <li>정보나 동작 제어</li>
    <li>단순히 함수 호출일 때는 e 객체 사용 X</li>
  </ul>
<h2>useState Setter 함수</h2>
<p>
  count : 0 -> count 값을 1씩 증가하고 싶을때
</p>
<p>
  setState({ ...state, count: state.count + 1 }); - 새로운 객체 생성(참조형)
</p>
<p>
  콜백 State - 이전 state 값을 참조하면서 변경할때
</p>
<p>
  setState((prevState) => {<br>
  return nextState;<br>
});<br>
</p>
<p>
  setCount((prevCount) => prevCount + 1); - prev 콜백 사용
</p>
<h2>에러</h2>
<div>
  <p>
    1. Parsing error: Unexpected token
  </p>
  <p>
    - npm i babel-eslint -D
  </p>
  <p>
    2. TypeError: react__WEBPACK_IMPORTED_MODULE_0___default is not a function or its return value is not iterable
  </p>
  <p>
    - import useState from "react";   =>   import { useState } from "react";
  </p>
</div>
