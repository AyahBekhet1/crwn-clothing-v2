import { useContext ,useState , useEffect} from 'react';
import { CategoriesContext } from '../../context/categories.context';
import {CategoryContainer ,CategoryTitle} from './category.styles.jsx'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component';

const Category =()=>{

    const {title} =useParams()
    const { categoriesMap } = useContext(CategoriesContext);
    const [products , setProducts] = useState(categoriesMap[title])
    

    useEffect(()=>{

        setProducts(categoriesMap[title])

    },[categoriesMap , title])

    return(

        <>
        <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
        {
            products?.map(product=><ProductCard product={product} key={product.id} />)
        }
        </CategoryContainer>
        </>
    )
}

export default Category