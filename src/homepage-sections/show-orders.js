import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function ShowOrders() {
    const [orders, setOrders] = useState([]);
    const [user_id, setUser_id] = useState(0);

    const check_orders = () => {

        axios.get("https://chdl-clone-gb-project.herokuapp.com/auth/user")
            .then((res1) => {
                console.log("user");
                console.log(res1.data);
                setUser_id(res1.data.id);
                console.log(res1.data.id);

                axios.post("https://chdl-clone-gb-project.herokuapp.com/apis/check_orders", {
                    "user_id": res1.data.id
                })
                    .then((res) => {
                        console.log("check_orders");
                        console.log(res.data);
                        setOrders(res.data.result)
                        if(res.data.result.length == 0){
                            document.getElementById("ordersMessage").innerHTML = "No order data to show!";
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        document.getElementById("ordersMessage").innerHTML = "No order data to show!";
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useState(() => {
        check_orders();
    }, []);

    let tableContent = (<h5 id="ordersMessage">Loading order data...</h5>);
    

    if(orders.length > 0){
        tableContent = (
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
                        <td className="text-center">{e.order_completed ? <i style={{color: "green"}} className="fa fa-check" aria-hidden="true"></i> : <i style={{color: "red"}} className="fa fa-times" aria-hidden="true"></i>}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

    return (
        <div className="mt-5">
            {tableContent}
        </div>
    );
}

export default ShowOrders;