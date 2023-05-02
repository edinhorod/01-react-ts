import { useState } from 'react'
import {Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/edinhorod.png',
      name: 'Edinho Rodrigues',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum quae eligendi labore, veniam iste magnam voluptas deserunt. Consequatur, maxime et quos quod soluta expedita beatae provident fugiat voluptas necessitatibus.' },
      {type: 'link', content: 'huts.com.br'}
    ],
    publishedAt: new Date('2023-04-27 16:21:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Edinho Rodrigues',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum quae eligendi labore, veniam iste magnam voluptas deserunt. Consequatur, maxime et quos quod soluta expedita beatae provident fugiat voluptas necessitatibus.' },
      {type: 'link', content: 'huts.com.br'}
    ],
    publishedAt: new Date('2023-04-10 16:21:00')
  },
];

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content as []}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App