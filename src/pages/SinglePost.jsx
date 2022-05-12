import React, {useState, useEffect} from 'react'
import {useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { client } from '../client'
import Nav from '../components/Nav/Nav'
import { urlFor } from '../client'
import BlockContent from '@sanity/block-content-to-react'
import '../App.scss'
import './SinglePost.scss'
import Footer from './Footer'

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([])
  const [category, setCategory] = useState([])
  const {slug} = useParams()

  useEffect(() => {
    client.fetch(
      `*[slug.current == "${slug}"] {
        title,
        excerpt,
        body,
        read,
        categorias,
        publishedAt,
        mainImage{
          asset -> {
            _id,
            url
          },
          alt
        },
        "name": author->name,
        "authorImage": author->image,
        "bio": author->bio
      }`
    ).then((data)=> {
      console.log(data);
      setSinglePost(data[0])
    })
  }, [slug])

  useEffect(() => {
    client
    .fetch(
        `*[_type == "category"] {
        title,
    }`
    )
    .then((data)=> {
      console.log(data)
      setCategory(data)
    })
  }, [])

  
  return (
    
    <>
    <Nav/>
      <section className='singlePost container'>
        {console.log(singlePost.authorImage)}
        <div className='singlePost__container'>
          <div className='singlePost__category'>
            {singlePost.categorias}
          </div>

          <article className='singlePost__content'>
            <h1>{singlePost.title}</h1>
            <p>{singlePost.excerpt}</p>
            <div className='singlePost__article__details'>
            {singlePost.categorias} | {singlePost.name} | {singlePost.publishedAt} | {singlePost.read}
            </div>

            <div className='singlePost__details'>
              <div className='singlePost__author'>
              {singlePost.authorImage && (
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  className="singlePost__authorImg"
                  alt=""
                />
              )}
              <span className='singlePost__name'>{singlePost.name}</span>                
              </div>

              <div className='singlePost__author__bio'>
                <p>
               
                  {singlePost.bio !== undefined && (
                    <BlockContent className='singlePost__block__content' blocks={singlePost.bio} projectId={process.env.REACT_APP_SANITY_ID} dataset="production"/>
                  )}
              

                </p>
              </div>
            </div>
            {console.log(singlePost.mainImage)}
            
            {singlePost.mainImage && singlePost.mainImage.asset && (
              <img
                src={singlePost.mainImage.asset.url}
                className="singlePost__mainImg"
              />
            )}

              <div>
                {singlePost.body !== undefined && (
                  <BlockContent className='singlePost__block__content' blocks={singlePost.body} projectId={process.env.REACT_APP_SANITY_ID} dataset="production"/>
                )}
              </div>

              <Link to='/blog'>
                <button className='btn__singlePosts'>
                  Read more posts >>
                </button>
              </Link>
              
          </article>
        </div>
        
        

      </section>
      <Footer/>
    </>
  )
}

export default SinglePost