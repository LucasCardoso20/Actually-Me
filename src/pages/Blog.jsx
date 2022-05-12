import React, {useState, useEffect} from 'react'
import { client } from '../client'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import './Blog.scss'
import Footer from './Footer'
const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          excerpt,
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
    })
  }, [])
  

  return (
    <>
    <Nav/>
    <section className="posts container">
      <div className='posts__container'>
        {posts.map((item, index)=> (
          <article key={index} >
            <Link to={`/blog/${item.slug.current}`} className='posts__card__container'>
              <div className='posts__content'>
                <h4 className='posts__title'>{item.title}</h4>
                <p>{item.excerpt}</p>
              </div>

              <div className='posts__image'>
                <img src={item.mainImage.asset.url} alt={item.title}/>
              </div>
              
            </Link>
          </article>
          
        ))}
      </div>
    </section>
    <Footer/>
    </>
    
  )
}

export default Blog