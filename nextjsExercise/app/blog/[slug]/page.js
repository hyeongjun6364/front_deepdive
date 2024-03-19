import React from 'react'

function BlogPostPage({params}) {
  return (
    <main>
        <h1>
            BlogPost{params.slug}
        </h1>
    </main>
  )
}

export default BlogPostPage