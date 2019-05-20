import React, { Component } from "react";
import './List.css'
import CategoryItem from "../../components/CategoryItem"


class List extends Component {
    render() {
        return(
        <ul className="List">
            {   
                this.props.category_list.map(
                    (item, index) => {
                        return <CategoryItem
                                category={item}
                                mode={this.props.mode}
                                onClick={this.props.change_mode}
                                key={index}
                                />;
                    }
                )
            }
        </ul>
        );
    }
}
export default List;