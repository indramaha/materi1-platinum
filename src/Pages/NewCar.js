import { Link } from "react-router-dom";
import "./NewCar.css"
import { useState } from "react";

const NewCar = () => {

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

    console.log(image)
    
    return ( 
        <div className="newcar-section">
            <h1>newcars</h1>
            <div className="newcar-form-bg">
                <div className="newcar-form">
                    <div className="newcar-input-bg">
                        <div>
                            <p>Nama/Tipe Mobil*</p>
                        </div>
                        <div>
                            <input onChange={handleName}/>
                        </div>
                    </div>
                    <div className="newcar-input-bg">
                        <div>
                            <p>Harga*</p>
                        </div>
                        <div>
                            <input onChange={handlePrice}/>
                        </div>
                    </div>
                    <div className="newcar-input-bg">
                        <div>
                            <p>Foto*</p>
                        </div>
                        <div>
                            <input onChange={handleImage} type="file"/>
                        </div>
                    </div>
                    <div className="newcar-input-bg">
                        <div>
                            <p>Kategori*</p>
                        </div>
                        <div>
                            <select onChange={handleCategory}>
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
                    <button>save</button>
                </div>
            </div>
        </div>
     );
}
 
export default NewCar;