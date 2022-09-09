import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftNav from './LeftNav'


export default function AdminAddProduct() {
    var [product, setproduct] = useState({
        name: "",
        maincategory: "Male",
        subcategory: "Jeans",
        brand: "Adidas",
        color: "",
        size: "",
        baseprice: "",
        discount: "",
        finalprice: "",
        stock: "In Stock",
        description: "This is Sample Product",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    var navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setproduct((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0]
        setproduct((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        product.finalprice=product.baseprice-product.baseprice*product.discount/100
        alert(
            `
                Name             : ${product.name}
                Maincategory     : ${product.maincategory}
                Subcategory      : ${product.subcategory}
                Brand            : ${product.brand}
                Color            : ${product.color}
                Size             : ${product.size}
                Base Price       : ${product.baseprice}
                Discount         : ${product.discount}
                Final Price      : ${product.finalprice}
                Stock            : ${product.stock}
                Description      : ${product.description}
                Pic1             : ${product.pic1}
                Pic2             : ${product.pic1}
                Pic3             : ${product.pic1}
                Pic4             : ${product.pic1}
            `
        )
        navigate("/admin-product")
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Add Product Page</h5>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={getData} name='name' placeholder='Enter Product Name' />
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Maincategory</label>
                                <select name='maincategory' onChange={getData} className='form-select'>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='kids'>Kids</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Subcategory</label>
                                <select name='subcategory' onChange={getData} className='form-select'>
                                    <option value='Jeans'>Jeans</option>
                                    <option value='Tshirt'>Tshirt</option>
                                    <option value='Shirt'>Shirt</option>
                                    <option value='Trouser'>Trouser</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Brand</label>
                                <select name='brand' onChange={getData} className='form-select'>
                                    <option value='Adidas'>Adidas</option>
                                    <option value='Nike'>Nike</option>
                                    <option value='Mufti'>Mufti</option>
                                    <option value='Tommy Hilfiger'>Tommy Hilfiger</option>
                                    <option value='Zara'>Zara</option>
                                    <option value='Gucci'>Gucci</option>
                                    <option value='Polo'>Polo</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Stock</label>
                                <select name='stock' onChange={getData} className='form-select'>
                                    <option value='In Stock'>In Stock</option>
                                    <option value='Out Of Stock'>Out Of Stock</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Color</label>
                                <input type="text" className="form-control" onChange={getData} name='color' placeholder='Enter Product Color' />
                            </div>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Size</label>
                                <input type="text" className="form-control" onChange={getData} name='size' placeholder='Enter Product Size' />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Base Price</label>
                                <input type="number" className="form-control" onChange={getData} name='baseprice' placeholder='Enter Product Base Price' />
                            </div>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Discount</label>
                                <input type="number" min={0} className="form-control" onChange={getData} name='discount' placeholder='Enter Discount on Product Base Price' />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea type="text" className="form-control" onChange={getData} name='description' rows={5} placeholder='Enter Description' />
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic1</label>
                                <input type="file" className="form-control" onChange={getFile} name='pic1' />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic2</label>
                                <input type="file" className="form-control" onChange={getFile} name='pic2' />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic3</label>
                                <input type="file" className="form-control" onChange={getFile} name='pic3' />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic4</label>
                                <input type="file" className="form-control" onChange={getFile} name='pic4' />
                            </div>
                        </div>
                        <button type="submit" className="btn background text-light w-100">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

