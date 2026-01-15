// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'next/navigation'

// const Id = () => {
//   const params = useParams()
//   const [imageId, setImageId] = useState(0)
//   const [productDetail, setProductDetail] = useState(null)

//   const fetchProductDetail = async () => {
//     const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
//     setProductDetail(data)
//   }

//   useEffect(() => {
//     fetchProductDetail()
//   }, [])

//   if (!productDetail) {
//     return <div className="text-center text-gray-500">Loading...</div>
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Product Images */}
//         <div className="flex-1">
//           <img
//             src={productDetail.image}
//             alt={productDetail.title}
//             className="w-full h-96 object-cover rounded-lg shadow-md"
//           />
         
//         </div>

//         {/* Product Details */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">{productDetail.title}</h1>
//           <p className="text-xl text-pink-500 font-semibold mb-4">${productDetail.price}</p>
//           <p className="text-gray-700 mb-6">{productDetail.description}</p>
//           <div className="text-sm text-gray-500">
//             <span className="font-semibold">Category:</span> {productDetail.category.name}
//           </div>
//         <button className='bg-red-400 p-4' >Add to Cart</button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Id
'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'

const Id = () => {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [productDetail, setProductDetail] = useState(null)

  const fetchProductDetail = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    setProductDetail(data)
  }

  useEffect(() => {
    fetchProductDetail()
  }, [])

  if (!productDetail) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>
  }

  // Generate fake gallery thumbnails (since API gives 1 image)
  const images = [
    productDetail.image,
    productDetail.image + '?img=2',
    productDetail.image + '?img=3'
  ]

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT IMAGES */}
        <div className="flex-1">
          <img
            src={images[selectedImage]}
            alt={productDetail.title}
            className="w-full h-[450px] object-contain rounded-lg border shadow-sm"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 object-contain rounded border cursor-pointer transition ${
                  selectedImage === index ? 'border-pink-500' : 'border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT DETAIL */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{productDetail.title}</h1>
            <p className="text-2xl font-semibold text-pink-600 mb-4">${productDetail.price}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">{productDetail.description}</p>
            <p className="text-sm text-gray-500 mb-6">
              <span className="font-medium">Category:</span> {productDetail.category}
            </p>
          </div>

          <button className="bg-pink-500 text-white py-3 rounded-md text-lg font-medium hover:bg-pink-600 transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default Id
