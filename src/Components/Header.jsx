import React,{useState,useEffect} from 'react'
import { Truck, Heart, ShoppingCart, Search } from 'lucide-react';
import { searchProducts } from '../Redux/slice/productSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';


function Header() {
  const dispatch=useDispatch()
  const [wishListCount,setWishListCount]=useState(0)
  const {wishlist}=useSelector((state)=>state.WishListReducer)
useEffect(()=>{
  setWishListCount(wishlist?.length)
},[wishlist])
  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 py-4 px-6 flex items-center justify-between shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
        <Truck className="text-white h-6 w-6" />
        <Link to={"/"} className="text-white text-xl font-bold tracking-wide">E-Cart</Link>
      </div>

       {/* Search Bar Section */}
       <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..." 
              className="w-full py-2 px-4 rounded-full bg-white/20 text-white placeholder-white focus:bg-white focus:text-gray-900 focus:outline-none transition-colors duration-200"
              onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))}
            />
            <Search className="absolute top-2 right-3 text-white h-5 w-5" />
          </div>
        </div>

      {/* Right Section - Wishlist and Cart */}
      <div className="flex items-center space-x-6">
        {/* Wishlist Button */}
        <Link to={"/wishlist"} className="flex items-center space-x-2 text-white hover:bg-white/20 py-2 px-4 rounded-full transition-all duration-200">
          <Heart className="h-5 w-5 text-pink-200" fill="currentColor" />
          <span className="font-medium">WishList</span>
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white rounded-full px-2.5 py-0.5 text-sm font-bold shadow-md">
            {wishListCount}
          </span>
        </Link>

        {/* Cart Button */}
        <button className="flex items-center space-x-2 text-white hover:bg-white/20 py-2 px-4 rounded-full transition-all duration-200">
          <ShoppingCart className="h-5 w-5 text-cyan-200" />
          <span className="font-medium">Cart</span>
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white rounded-full px-2.5 py-0.5 text-sm font-bold shadow-md">
            0
          </span>
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Header
