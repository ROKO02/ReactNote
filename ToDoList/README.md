<h2>추가 및 삭제 기능</h2>
<div>
  <h3>추가</h3>
  <p>
    input 태크 vlaue 값을 inputValue로 설정함으로써 onChange를 설정했을때 e.target.value를 통하여 inputValue 변경
  </p>
  <h3>삭제</h3>
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
