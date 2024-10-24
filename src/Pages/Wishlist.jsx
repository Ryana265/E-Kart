import React from 'react'
import { Delete, Heart, ShoppingCart, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../Redux/slice/wishListSlice';

function Wishlist() {
  const {wishlist}=useSelector((state)=>state.WishListReducer)
  const dispatch=useDispatch()
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {wishlist.map((product) => (
          <div key={product.id} className="w-full rounded-lg border bg-white shadow">
            <div className="aspect-square">
              <Link to={`/view/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt="Product"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </Link>
            </div>
            <div className="p-3">
              <h3 className="text-blue-500 font-medium mb-1">{product.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-1">{product.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold">${product.price}</span>
                <div className="flex gap-1">
                  <button onClick={()=>dispatch(removeFromWishlist(product.id))} className="text-red-500 hover:bg-red-50 p-1.5 rounded">
                    <Trash className="h-4 w-4" />
                  </button>
                  <button className="text-orange-500 hover:bg-orange-50 p-1.5 rounded">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wishlist
