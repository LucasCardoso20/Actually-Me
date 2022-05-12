import React, {useState, useEffect} from 'react'
import { client } from '../../client'
import { Link } from 'react-router-dom'
import '../../App.scss'
import './FeaturedPosts.scss'
const FeaturedPosts = () => {
  const [posts, setPosts] = useState([])
  const [features, setFeatures] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          excerpt,
          slug,
          body,
          "name": author->name,
          "authorImage": author->image,
          released,
          mainImage{
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
    )
    .then((data)=> {
      console.log(data);
      setPosts(data)
      setFeatures(data.filter((content)=> content.released ))
    })
  }, [])



  return (
    <section className="features container">
      <div className='features__container'>
        {features.map((item, index)=> (
          <article key={index} >
            <Link to={`/blog/${item.slug.current}`} className='features__card__container'>
              <div className='features__content'>
                <h4 className='features__title'>{item.title}</h4>
                <p>{item.excerpt}</p>
              </div>

              <div className='features__image'>
                <img src={item.mainImage.asset.url} alt={item.title}/>
              </div>
              
            </Link>
          </article>
          
        ))}
      </div>
    </section>
  )
}

export default FeaturedPosts