import React from "react";
import Items from "./components/Items"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

class App extends React.Component {

    state = {
        items : [
            {id: 0, name: "Karim", phone: 2010923598},
            {id: 1, name: "Muhammad", phone: 201087236},
            {id: 2, name: "Zeyad", phone: 4087340928}
        ]
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        let items = this.state.items;
        const name = document.querySelector("input[type=text]");
        const phone = document.querySelector("input[type=number]");
        const item = {
            id: Math.random(),
            name : name.value,
            phone: phone.value
        }
        items.push(item)
        this.setState({
            items: items,
        })
        name.value = ""; phone.value = "";
    }

    handleDelete = (ditem)=> {
        const items = this.state.items;
        this.setState({
            items: items.filter(item=> {
                return item !== ditem;
            })
        })
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <h2>Todo list</h2>
                    <div className="content">
                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {console.log("length", this.state.items)} */}
                                    <Items items={this.state.items} del_itm={this.handleDelete}/>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>
                                            <input type="text" placeholder="text here" required/>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="phone here" required/>
                                        </td>
                                        <td>
                                            <input type="submit" value="add todo" onSubmit={this.handleSubmit}/>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
