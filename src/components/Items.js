import React from "react";
import "./Items.css";

function Items(props) {
    // const handleDelete = ()=> {
    //     console.log(this)
    // }
    console.log(props)
    const handleDelete = props.del_itm; 
    let items = props.items;
    let list_items = items.map(item=> {
        return(
            <tr key={Math.random()}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                {/* <td onClick={handleDelete}><button>x</button></td> */}
                <td onClick={()=> handleDelete(item)} className="action">&times;</td>
            </tr>
        )
    })
    return (
        <React.Fragment>
            {list_items.length> 0? list_items : <tr><td colspan="3">No elements to show</td></tr>} 
        </React.Fragment>
    )
}

export default Items;