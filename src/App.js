import "./styles.css";
import { useState } from "react";
const addFruitByIndex = (index) => {
  return Promise.resolve(["apple", "banana"][index]);
};

//click on the add banana button to get apple, banana;
export default function App() {
  const [fruits, setFruits] = useState(["apple"]);

  const addBanana = () => {
    addFruitByIndex(1).then((result) => {
      setFruits((p) => [...p, result]);
    });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={addBanana}>Add Banana</button>
      <div>{fruits.join(",")}</div>
    </div>
  );
}
