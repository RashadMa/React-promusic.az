import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../../redux/actions/productActions'

function CategoryDetail() {
    const {id:categoryId} = useParams()
    const {items} = useSelector((state) => state.productListReducer)
    const dispatch = useDispatch()


    React.useEffect(()=> {
        getProducts()(dispatch)
    },[dispatch])

    const filter = () => {
     return items?.filter((item)=> item.categoryId === Number(categoryId))
    }
    const products = filter()


    // const handleChange = React.useMemo(()=>  items?.filter((item)=> item.categoryId === Number(categoryId)), [categoryId, items])
    
  return (
   <>
   {items ? (
        <div>
        {products?.length ? products.map((item) => (
            <h1 key={item.id} onClick={()=>console.log(categoryId)}>{item.name}</h1>
        )) : <h1>Empty</h1>}
    </div>
   ) : <h1>Loading...</h1>}

   </>
  )
}

export default CategoryDetail