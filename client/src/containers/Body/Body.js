import React, { Component } from "react";
import { Switch, Route, NavLink }  from "react-router-dom";
import './Body.css'
import List from './List'
import Products from './Products'
import {Form, Form2} from './Form'
import Purchase from './Purchase'

class Body extends Component {
    render() {
        return(
        <div className="Body">
            <List mode={this.props.mode} 
                change_mode={this.props.change_mode} 
                category_list={this.props.category_list}/>
            <Switch>
                <Route exact path="/" render={
                        () => {
                            return(
                            <div className="Container">
                                <div className="Route-wrapper">
                                    <NavLink to={"/add_product"} className='Link'>Add new product</NavLink>
                                    <NavLink to={"/delete_product"} className='Link'>Delete product</NavLink>
                                </div>
                                <Products 
                                    data={this.props.data}
                                    mode={this.props.mode}
                                    shop_list_add={this.props.shop_list_add}/>
                            </div>
                            );
                        }
                    }
                />

                <Route path="/add_product" render={
                        () => {
                            return (
                                <Form
                                    category_list={this.props.category_list}
                                    onClick={this.props.add_product}/>
                            );
                        }
                    }
                />

                <Route path="/delete_product" render={
                        () => {
                            return(
                                <Form2 onClick={this.props.delete_product}/>
                            );
                        }

                    }
                />

                <Route path="/purchase" render={
                        () => {
                            return(
                                <Purchase 
                                    data={this.props.data}
                                    shop_list={this.props.shop_list}
                                    reset_list={this.props.reset_list}
                                    buy={this.props.buy}
                                    add_one={this.props.add_one}
                                    delete_one={this.props.delete_one}/>     
                            )
                        }  
                    }
                />
            </Switch>
        </div>
        );
    }
}
export default Body;