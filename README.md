<h2>
  기본 작업 설정
</h2>
<div>
  <p>
    npm init react-app . -> public-index.html 제외 삭제 -> src-index.js 제외 삭제
-> index.js 수정
  </p>
</div>
<h2>
  StrictMode는 무엇일까?
</h2>
<div>
  <p>엄격모드라고도 하며 더 많은 에러를 발견하고 예방하며 작은 동작 차이를 제어할 수 있다.</p>
  <p>최상단에 위치해야 활성화가 된다.</p>
  <p>일반적으로 권장되지만 필수는 아니며 ES6 클래스와 모듈은 기본적으로 엄격모드를 따름</p>
</div>

<h2>
  에러
</h2>
<div>
  <p>
    1. Parsing error: Unexpected token
  </p>
  <p>
    - npm i babel-eslint -D
  </p>
  <p>2. TypeError: react__WEBPACK_IMPORTED_MODULE_0___default is not a function or its return value is not iterable</p>
  <p>- import useState from "react";   =>   import { useState } from "react";</p>
</div>
