import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function ShowOrders() {
    const [orders, setOrders] = useState([]);

    const check_orders = () => {
        axios.post("https://chdl-clone-gb-project.herokuapp.com/apis/check_orders", {
            "user_id": 2
        })
            .then((res) => {
                console.log(res.data);
                setOrders(res.data.result)
            })
            .catch((err) => {
                console.log(err);

            });
    }

    useState(() => {
        check_orders();
    }, [orders]);

    let tableContent = (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date & Time</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Completed</th>
                </tr>
            </thead>
            <tbody>
            {orders.map((e, index) => (
                <tr key={e.id}>
                    <th scope="row">{index+1}</th>
                    <td>{e.title.split(" | ")[0]}</td>
                    <td><pre>{e.description}</pre></td>
                    <td>{e.total_price}</td>
                    <td className="text-center">{e.order_completed ? <i style={{color: "green"}} className="fa fa-check" aria-hidden="true"></i> : <i style={{color: "red"}} className="fa fa-times" aria-hidden="true"></i>
}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );

    if(orders.length < 1){
        tableContent = (<h5>No orders to show!</h5>);
    }

    return (
        <div className="mt-5">
            {tableContent}
        </div>
    );
}

export default ShowOrders;