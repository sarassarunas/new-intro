import './Product.css'

function Product(props) {
    return (
        <>
        <div className='product d-flex border-top border-bottom align-items-top'>
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="description text-start p-3">
                <a className='link-underline link-underline-opacity-0' href="#">{props.title}</a>
                <div className="ratings my-3" title={'Rating: '+props.rating}>
                    <div className="active" style={{width: props.rating*20 + '%'}}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="inActive">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    
                </div>
                
                <p>{props.desc}</p>
            </div>
            <div className="buy py-3">
                <div className="price d-flex">
                    {props.discount>0 ? 
                        <>
                        <span className='newPrice text-danger px-1 fs-5 fw-semibold'>${(props.price*((100-props.discount)/100)).toFixed(2)}</span>
                        <span className='oldPrice text-secondary text-decoration-line-through'>${props.price}</span>
                        </>
                    :
                        <span className='fs-5 fw-semibold'>${props.price}</span>
                    }
                    
                </div>
                <button type="button" className="btn btn-warning px-4 my-4">Add to cart</button>
            </div>
        </div>
        </>
    );

} 
export default Product;