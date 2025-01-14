<h2>추가 및 삭제 기능</h2>
<div>
  <p>
    input 태크 vlaue 값을 inputValue로 설정함으로써 onChange를 설정했을때 e.target.value를 통하여 inputValue 변경
  </p>

  <div>
    <h4>이벤트 객체 (e)</h4>
    <ul>
      <li>정보나 동작 제어</li>
      <li>단순히 함수 호출일 때는 e 객체 사용 X</li>
    </ul>
  </div>
  <p>
    onClick={() => {DelteList(i);}} => onClick 이벤트가 발생해야 함수가 실행됨
  </p>
  <p>
    onClick={DelteList(i)} => onClick 이벤트가 발생하기 전에 함수가 실행됨
  </p>
  <p>
    요소의 인덱스를 DelteList(i)로 보내주고 함수 내에서 요소의 인덱스는 index가 되어 inputList 요소의 i와 비교하여 같으면 false
  </p>
</div>
