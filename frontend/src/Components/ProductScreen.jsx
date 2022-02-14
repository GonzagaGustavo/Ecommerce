import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductScreen() {
const [data, setData] = useState([])
const params = useParams()

    useEffect(() => {
        axios.post("/api/dataProducts", { id: params.id }).then((res) => {
            console.log(res.data)
            setData(res.data[0])
        })
    }, [])

  return (
    <div className='ProductScreen'>
        <div className='img-desc'>
        <img className='img-p' src={data.image} alt="" />
        <p>{data.descricao}</p>
        </div>
        <div className='info-p'>
            <h1>{data.name}</h1>
            <p className='prices'>R${data.price}</p>
            {data.countInStock > 0 ? (<p className='success'>Em estoque</p>) : (
                <p>Sem estoque</p>
            )}
            <button className='btn btn-primary'>Comprar!</button>
            </div>
    </div>
  )
}

export default ProductScreen