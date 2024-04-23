import { MouseEvent, useState } from "react";

const Listnew = () => {
  const items = ["First", "second", "Third"];
  // let selectetIndex=0;
  const [selectetIndex, setselectedIndex] = useState(0);
  const clickHandler = (event: MouseEvent) => {
    let targetLi = event.target as HTMLElement;
    console.log(targetLi.getAttribute("key"));
  };
  const selectetindex = (index: number) => {
    setselectedIndex(index);
    console.log(index);
  };
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          onClick={() => selectetindex(index)}
          key={index}
          className={selectetIndex === index ? "active" : " "}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Listnew;
