import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection,addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
const [sexo, setSexo,] = useState('')
const [nombre, setNombre,] = useState('')
const [talla, setTalla,] = useState('')
const  [stock, setStock] = useState(0)
const  [precio, setPrecio] = useState(0)
const navigate = useNavigate()
const productsCollection = collection(db,"productos")
const store  = async (e) =>{
  e.preventDefault()
  await addDoc(productsCollection,{nombre: nombre,precio:precio, sexo:sexo, stock: stock, talla:talla})
  navigate('/')
}


  return (
    <div className='container'>
      <div className='row'>
      <div className='colr'>
         <h1>Crear producto</h1>
         <form onSubmit={store}>
          <div className='mb-3'>
            <label className='form-label'>Nombre</label>
            <input 
                value={nombre}
                onChange={ (e)=>setNombre(e.target.value)}
                type="text"
                className='form-control'
                />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Precio</label>
            <input 
                value={precio}
                onChange={ (e)=>setPrecio(e.target.value)}
                type="number"
                className='form-control'
                />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Sexo</label>
            <input 
                value={sexo}
                onChange={ (e)=>setSexo(e.target.value)}
                type="text"
                className='form-control'
                />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Talla</label>
            <input 
                value={talla}
                onChange={ (e)=>setTalla(e.target.value)}
                type="text"
                className='form-control'
                />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Stock</label>
            <input 
                value={stock}
                onChange={ (e)=>setStock(e.target.value)}
                type="number"
                className='form-control'
                />
          </div>
           <button type='submit' className='btn btn-primary'>Tienda</button>
          
         </form>
      </div>
      </div>
      </div>
  )
}

export default Create