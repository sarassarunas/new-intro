import { useState, useEffect } from 'react'
import ArticleList from './components/articleList/ArticleList.jsx';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [refresh, setRefresh] = useState(false);
  let [phrase, setPhrase] = useState(``);
  let [data, setData] = useState([]);
  
  
  useEffect(() => {
    console.log(data);
    

      fetch(`https://newsapi.org/v2/everything?q=${phrase}&apiKey=ec4089cd4fef4a73a9c45c2132ca14b1`)
    .then(resp => resp.json())
    .then(resp => setData(resp.articles));
  }, [refresh]);
  
    

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setPhrase(e.target.value)}/>
        <button onClick={() => setRefresh(!refresh)}>Ieskoti</button>
      </div>
      <div className="list">
          {data ? data.slice(0,20).map(
            (item, id) =>
              <ArticleList
                ImgUrl={item.urlToImage}
                key={id}
              />
          ):
          <span>iveskite paieska</span>
          }
      </div>
    </>
  )
}

export default App
