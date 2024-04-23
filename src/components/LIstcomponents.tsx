const ListGroup=()=>{
    const item=['Hii','Hello','Bye'];
    let selecedindex=0;
    const clickHandeler=()=>{
    // alert()
    }
    return(
        <>
        {/* <li>Hii</li>
        <li>Hii</li>
        <li>Hii</li> */}
        <h3>List of array :</h3>
        <ul>
            {item.map((item,index)=>
                (
                <li key={item} onClick={clickHandeler} className={selecedindex===index?'active':'nun'}>
                    {item}
                </li>
                )
            )}
        </ul>
        </>
    )
}
export default ListGroup;