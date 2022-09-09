import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import banner3 from "../assets/images/banner3.jpg"
import banner4 from "../assets/images/banner4.jpg"
import banner5 from "../assets/images/banner5.jpg"
import banner6 from "../assets/images/banner6.jpg"
import banner7 from "../assets/images/banner7.jpg"
import banner8 from "../assets/images/banner8.jpg"
import banner9 from "../assets/images/banner9.jpg"
import Products from './Products'
var items = [
    {
        pic: banner1
    },
    {
        pic: banner2
    },
    {
        pic: banner3
    },
    {
        pic: banner4
    },
    {
        pic: banner5
    },
    {
        pic: banner6
    },
    {
        pic: banner7
    },
    {
        pic: banner8
    },
    {
        pic: banner9
    }
]
function Item(props) {
    return (
        <Paper>
            <img src={props.item.pic} alt='pic' width="100%" height="500px" />
        </Paper>
    )
}
export default function Home() {
    return (
        <>
            <div className='container-fluid'>
                <Carousel>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
                <h5 className='background text-center text-light p-2'>Latest Products Section</h5>
                <Products mc="All" sc="All" br="All" />
            </div>
        </>
    )
}