import React, { Component } from 'react';
import axios from 'axios'

import Header from "./Header/Header"
import Body from "./Body/Body"


let cat_list = ["All", "Action", "Anthologies", "Dark Fantasy", "Fantasy Epics", "Horror", "Role Playing"];


async function check_data(data){
    let isValid = true;
    Object.keys(data).map(
        (item) => {
            if(data[item] === ""){
                alert(`${item} should not be empty`);
                isValid = false;
            }
            return item;
        }
    )
    return {"data": data, "isValid": isValid};
}


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mode: 'All',
            category_list: cat_list,
            data: [],
            shop_list: {},
        };
        this.getDataFromDb();
    }

    // ======== connection ======== //
    // GET
    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
        .then(data => data.json())
        .then(res => {
                console.log(res.data)
                this.setState(
                    state => {
                        state.data = res.data;
                        return state;
                    }
                )  
            }
        );
    };

    // POST
    putDataToDB = (product_data) => {
        axios.post("http://localhost:3001/api/putData", {
                product_data
            }
        )
        .then(res => {this.getDataFromDb();})
        .catch(err => { console .log(err) })
        .then(alert("successfully adding a product"))
    };

    sendOrder = (order) => {
        axios.post("http://localhost:3001/api/sendOrder", {
                order
            }
        )
        .then(alert("order sent"))
        .catch(err => { console .log(err) })
    }

    // DELETE
    deleteData = (name2delete) => {
        axios.delete("http://localhost:3001/api/deleteData", {
            data: {
                "name": name2delete
            }
        })
        .then(res => {this.getDataFromDb();})
        .catch(err => { console .log(err) })
        .then(alert("successfully delete a product"))
    }

    // ======== client ======== //
    change_mode = (event) => {
        let cat = event.target.innerHTML;
        this.setState(
            state => {
                state.mode = cat;
                return state;
            }
        )
    }

    shop_list_add = (event) => {
        let id = event.target.className.substr(7);
        console.log(id)
        if(this.state.shop_list[id] === undefined){
            this.setState(
                state => {
                    state.shop_list[id] = 1;
                    return state;
                }
            )
        }
        else{
            this.setState(
                state => {
                    state.shop_list[id] = state.shop_list[id] + 1;
                    return state;
                }
            )
        }
    }

    add_one = (event) => {
        let id = event.target.className.substr(8);
        this.setState(
            state => {
                state.shop_list[id] = state.shop_list[id] + 1;
                return state;
            }
        )
    }

    delete_one = (event) => {
        let id = event.target.className.substr(8);
        this.setState(
            state => {
                state.shop_list[id] = state.shop_list[id] - 1;
                return state;
            }
        )
    }

    reset_list = () => {
        this.setState(
            state => {
                state.shop_list = {};
                return state;
            }
        )
    }

    buy = () => {
        this.sendOrder(this.state.shop_list);
    }

    // ======== admin ======== //
    add_product = (event) => {
        let form = document.forms["add_product"];
        let data = {};
        data["id"] = form["id"].value;
        data["name"] = form["name"].value;
        data["url"] = form["url"].value;
        data["author"] = form["author"].value;
        data["price"] = form["price"].value;
        data["overview"] = form["overview"].value;
        data["category"] = form["category"].value;
        data["language"] = form["language"].value;
        data["year"] = form["year"].value;
        data["capacity"] = form["capacity"].value;

        check_data(data)
        .then(data => { 
            if(data.isValid !== false) 
                this.putDataToDB(data.data);
        })
    }

    delete_product = () => {
        let form = document.forms["delete_product"];
        let name = form["name"].value;
        this.deleteData(name);
    }

    // ======== render ======== //
    render() {
        return (
            <div>
                <Header data={this.state.data} 
                        shop_list={this.state.shop_list}/>
                <Body
                    mode={this.state.mode}
                    category_list = {this.state.category_list}
                    data={this.state.data}
                    shop_list={this.state.shop_list}

                    change_mode={this.change_mode}
                    shop_list_add={this.shop_list_add}
                    add_one={this.add_one}
                    delete_one={this.delete_one}
                    reset_list={this.reset_list}
                    buy={this.buy}

                    add_product={this.add_product}
                    delete_product={this.delete_product}
                />
            </div>
        );
    }
}
export default Shop;