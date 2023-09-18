import React from 'react'

type PProps = {
    title: string;
    thumbnail: string;
    images: string[];
    price: Number;
    category: string;
    tags: string[];
}

const Product = (props: PProps) => {
    const { title, thumbnail, images, price, category, tags } = props

  return (
    <>Product</div>
  )
}

export default Product