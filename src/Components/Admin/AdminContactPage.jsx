import React from 'react'
import LeftNav from './LeftNav'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';

export default function AdminContactPage() {
    function deleteRecord(_id){
        alert("Deleted"+_id)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Contact Us List Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Amit Yadav</td>
                                <td>amityadav222001@gmail.com</td>
                                <td>9889991068</td>
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/1`}><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ankit Yadav</td>
                                <td>ankityadav222@gmail.com</td>
                                <td>8433020226</td>
                                <td>Done</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/2`}><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Aman Yadav</td>
                                <td>amanyadav2221@gmail.com</td>
                                <td>9935608895</td>
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/3`}><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Akansh Singhal</td>
                                <td>akansh2001@gmail.com</td>
                                <td>9004852062</td>
                                <td>Done</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/4`}><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

