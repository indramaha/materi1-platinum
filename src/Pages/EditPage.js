import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { API } from "../const/endpoint"


const EditPage = () => {
    const {id} = useParams()

    const [cars, setCars] = useState({})

    const [name, setName] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    }
    const [price, setPrice] = useState('')
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const [image, setImage] = useState(null)
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    const [category, setCategory] = useState('')
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const navigate = useNavigate()

    const getCars = () => {
        const token = localStorage.getItem("token")

        const config = {
            headers : {
                access_token: token
            },
        }

        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
            .then((ress) => {
                console.log(ress.data)
                setCars(ress.data)
            })
            .catch((err) => console.log(err.message))
    }

    useEffect(() => {
        getCars()
    },[])

    const handleEdit = () => {
        const token = localStorage.getItem("token")

        const config = {
            headers : {
                access_token: token
            },
        }

        const formData = new FormData();
        formData.append("image", image)
        formData.append("name", name)
        formData.append("category", category)
        formData.append("price", price)
        formData.append("status", false)

        axios
            .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formData, config)
            .then((ress) => {
                console.log(ress)
                navigate('/discovery')
            })
    }

    return (  
        <div className="newcar-section">
        <h1>Edit</h1>
        <div className="newcar-form-bg">
            <div className="newcar-form">
                <div className="newcar-input-bg">
                    <div>
                        <p>Nama/Tipe Mobil*</p>
                    </div>
                    <div>
                        <input onChange={handleName} placeholder={cars.name}/>
                    </div>
                </div>
                <div className="newcar-input-bg">
                    <div>
                        <p>Harga*</p>
                    </div>
                    <div>
                        <input onChange={handlePrice} placeholder={cars.price}/>
                    </div>
                </div>
                <div className="newcar-input-bg">
                    <div>
                        <p>Foto*</p>
                    </div>
                    <div>
                        <input onChange={handleImage} type="file" />
                    </div>
                </div>
                <div className="newcar-input-bg">
                    <div>
                        <p>Kategori*</p>
                    </div>
                    <div>
                        <select onClick={handleCategory}>
                            <option value="small">small</option>
                            <option value="Medium">medium</option>
                            <option value="large">large</option>
                        </select>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
        
        <div>
            <div>
                <Link to={"/discovery"}>
                    <button>cancel</button>
                </Link>
            </div>
            <div>
                <button onClick={handleEdit}>save</button>
            </div>
        </div>
    </div>
    );
}
 
export default EditPage;