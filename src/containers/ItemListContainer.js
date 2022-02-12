import React, { useEffect , useState  } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';
import { db } from '../firebase';
import { collection , getDocs , query , where} from "firebase/firestore"
import { toast } from 'react-toastify';

const ItemListContainer = () => {
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const { id } = useParams()

useEffect(()=>{
  const productsCollection = collection(db, "products")
  let request

  if(id){
    const filter = where("categorie" , "==" , id)
    const queryCat = query(productsCollection, filter)
    request = getDocs(queryCat)
  }else {
    request = getDocs(productsCollection)
  }
  request
    .then((result)=>{
      setProducts(result.docs.map(doc=>({id : doc.id,...doc.data()})))
      setLoading(false)
    })
    .catch((error)=>{
      toast.error(error)
    })

  },[id])
  return(
    <div>
      {loading
              ? <Loader/> 
              : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer;
