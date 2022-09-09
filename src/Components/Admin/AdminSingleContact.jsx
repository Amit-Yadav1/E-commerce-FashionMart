import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LeftNav from './LeftNav'


export default function AdminSingleContact() {
    var [Status,setstatus]=useState("Active")
    var { _id } = useParams()
    function deleteRecord(_id) {
        alert("Deleted" + _id)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Single Contact Us Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>Amit Yadav</td>
                            </tr>
                            <tr>
                                <th>Email Id</th>
                                <td>amityadav222001@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>9889991068</td>
                            </tr>
                            <tr>
                                <th>Subject</th>
                                <td>This is Sample Subject</td>
                            </tr>
                            <tr>
                                <th>Message</th>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad provident perferendis dolorum!
                                    Sint aut quibusdam voluptatum delectus iusto dolor totam sunt sequi temporibus numquam at
                                    nihil ullam commodi fuga aspernatur, ab adipisci doloremque harum laudantium cumque quam
                                    praesentium dicta iure voluptas? Officiis iusto tenetur sunt maxime? Temporibus minima, vero
                                    dicta consectetur unde exercitationem nostrum quibusdam quos ducimus autem illum id
                                    doloribus expedita earum aperiam suscipit ab saepe eum? Asperiores doloribus blanditiis
                                    aliquam aliquid impedit laboriosam, consequatur exercitationem totam rerum minus pariatur
                                    maiores nam reiciendis laudantium odio, incidunt nisi nulla rem ex aspernatur earum
                                    provident praesentium. Quod vero maxime molestias earum.</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>{new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>{Status}</td>
                            </tr>
                            <tr>
                               {
                                   Status==="Active"?
                                   <th colSpan={2}><button className='btn background text-light btn-sm w-100' onClick={()=>setstatus("Done")}>Change Status To Done</button></th>
                                   :
                                   <th colSpan={2}><button className='btn background text-light btn-sm w-100' onClick={()=>setstatus("Done")}>Delete</button></th>
                               }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}