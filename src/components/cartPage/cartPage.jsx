import '../cartPage/cartPage.css'
import binDark from '../catalog/imgCatalog/binDark.png'
import darkLike from '../catalog/imgCatalog/darkLike.png'
import { useParams } from 'react-router-dom'
import { store } from '../../app/store'

export default function cartPage() {
    const { id } = useParams();
    const product = store.products.find(product => product.id === parseInt(id))

    return (
        <div className="catalog-inform-blog">
            <div className="catalog-blog">
                {
                    <article key={product.id}>
                        <div className="element">
                            <img src={product.img} alt="" className='catalog' />
                            <h2 className="catalog-title">{product.name}</h2>
                            <div className="catalog-btn">
                                <h2 className="price">{product.price}</h2>
                                <div className="btn-form">
                                    <img src={darkLike} alt="cat" />
                                    <img src={binDark} alt="cat" />
                                </div>
                            </div>
                        </div>
                    </article>
                }
            </div>
        </div>
    )
}
