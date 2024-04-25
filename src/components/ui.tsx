// import React, { ChangeEvent, useState } from "react";
// const UI = () => {
//     const [textData1, setTextData1] = useState<number>(0);
//     const [textData2, setTextData2] = useState<number>(0);
//     const [result, setResult] = useState<number>(0);

//     const changeHandler = (e: ChangeEvent<HTMLInputElement>, setTextData: (value: number) => void) => {
//         const value = parseInt(e.target.value);
//         setTextData(isNaN(value) ? 0 : value);
//     };

//     const clickHandler = () => {
//         setResult(textData1 + textData2);
//     };

//     return (
//         <>
//         <h3>simple calculator :</h3>
//             <input
//                 type="text"
//                 onChange={(e) => changeHandler(e, setTextData1)}
//                 placeholder="Enter frst number"
//             />
//             <br />
//             <input
//                 type="text"
//                 onChange={(e) => changeHandler(e, setTextData2)}
//                 placeholder="Enter secound number"
//             />
//             <br />
//             <input type="text" value={result} />
//             <button onClick={clickHandler}>Print</button>
//         </>
//     );
// };

// export default UI;

import { ChangeEvent, useState } from "react";

const UI=()=>{
    let text1=0;
    let text2=0;
    let [result,setResult]=useState(0);
    const changeHandler1=(event:ChangeEvent)=>{
       let target=event.target as HTMLInputElement;
       text1=parseInt(target.value);
    }
    const changeHandler2=(event:ChangeEvent)=>{
       let target=event.target as HTMLInputElement;
       text2=parseInt(target.value);
    }
    const clickHandle=()=>{
        result=text1+text2;
        setResult(result);
    }
    return(
        <div>
            <h3>simple input ui :</h3>
            <input type="text" name="" id="" onChange={changeHandler1}/>
            <input type="text" name="" id="" onChange={changeHandler2}/>
            <input type="text" name="" id="" value={result}/>
            <button onClick={clickHandle}>Print</button>
        </div>
    )
}
export default UI;