import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc,updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'


const Edit = () => {
  const [sexo, setSexo,] = useState('')
const [nombre, setNombre,] = useState('')
const [talla, setTalla,] = useState('')
const  [stock, setStock] = useState(0)
const  [precio, setPrecio] = useState(0)

const navigate = useNavigate()
const {id} = useParams()
const update = async(e)=> {
  e.preventDefault()
  const product = doc(db,"productos",id)
  const data = {nombre: nombre,precio:precio, sexo:sexo, stock: stock, talla:talla}
  await updateDoc(product, data)
  navigate('/')
}

const getProductById = async (id) =>{
const product = await getDoc(doc(db,"productos",id) )
if(product.exists()){
   //console.log(product.data())
   setNombre(product.data().nombre)
   setPrecio(product.data().precio)
   setSexo(product.data().sexo)
   setStock(product.data().stock)
   setTalla(product.data().talla)
}else{
 console.log('El producto no existe')
}

}

useEffect(()=>{
  getProductById(id)

},[])
 return (
  <div className='container'>
  <div className='row'>
  <div className='colr'>
     <h1>Editar producto</h1>
     <form onSubmit={update}>
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
       <button type='submit' className='btn btn-primary'>Actualizar</button>
      
     </form>
  </div>
  </div>
  </div>
  )
}

export default Edit