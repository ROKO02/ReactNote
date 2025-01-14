import { useState } from "react";

function App() {
  const [inputVlaue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([]);

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const addList = () => {
    setInputList([...inputList, inputVlaue]);
    setInputValue("");
  };

  const DelteList = (index) => {
    setInputList(
      inputList.filter((item, i) => {
        return index !== i;
      })
    );
  };

  return (
    <div>
      <div>
        <input type="input" value={inputVlaue} onChange={changeInput} />
        <button type="button" onClick={addList}>
          확인
        </button>
      </div>
      <div>
        <ul>
          {inputList.map((item, i) => {
            return (
              <li>
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => {
                    DelteList(i);
                  }}
                >
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
