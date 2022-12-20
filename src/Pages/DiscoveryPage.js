import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import {API} from "../const/endpoint"
import "./DiscoveryPage.css"
import { Link } from "react-router-dom";

const DiscoveryPage = () => {
    const [car, setCar] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        let config = {
            headers: {
                'access_token': token
            }
        }

        axios
            .get(API.GET_CARS_ADMIN, config)
            .then((ress) => {
                console.log(ress.data.cars)
                setCar(ress.data.cars)
            })
            .catch((err) => console.log(err.message))
    },[])


    return ( 
        <div>
            <Navbar />
            <h1>Discover page</h1>
            <div>
                <Link to={"/addnewcar"}>
                    <button>Add New Car</button>
                </Link>
            </div>
            <div className="discovery-card-bg">
                {
                    !!car.length ? car.map((item,i) => {
                        return(
                            <div className="discovery-card" key={i}>
                                <div className="discovery-card-img-bg">
                                    <img src={item.image} alt={item.name} className="discovery-card-img"/>
                                </div>
                                <div>
                                    <p className="discovery-card-name-p">{item.name}</p>
                                </div>
                                <div>
                                    <p className="discovery-card-price-p">{item.price}</p>
                                </div>
                                <div>
                                    {(() => {
                                        if (item.category == 'small') {
                                        return (
                                            <div>
                                                <p>2-4 orang</p>
                                            </div>
                                        )
                                        } else if (item.category == 'Medium') {
                                        return (
                                            <div>
                                                <p>4-6 orang</p>
                                            </div>
                                        )
                                        } else if (item.category == 'large') {
                                        return (
                                            <div>
                                                <p>6-8 orang</p>
                                            </div>
                                        )
                                        }
                                    })()}
                                </div>
                                <div className="discovery-card-button-bg">
                                    <div>
                                        <button className="discovery-card-button-delete">delete</button>
                                    </div>
                                    <div>
                                        <button className="discovery-card-button-edit">edit</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }):(<h1>Loading...</h1>)
                }
            </div>
            
        </div>
    );
}

export default DiscoveryPage;