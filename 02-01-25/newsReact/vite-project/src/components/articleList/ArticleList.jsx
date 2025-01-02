import './ArticleList.css';

function ArticleList(props) {

    return (
        <>
            <div className="card">
                
                <img src={props.ImgUrl} alt="" />
                
            </div>
        </>
    )

}
export default ArticleList;