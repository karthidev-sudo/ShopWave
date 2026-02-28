import React from "react";
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-indigo-500/10 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-2xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text tracking-tight flex items-center gap-2 transition-transform hover:scale-105"
          >
            ShopWave
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Link
              to={"/"}
              className="text-slate-300 hover:text-white font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 ease-in-out"
            >
              Home
            </Link>

            {user && (
              <Link
                to={"/cart"}
                className="relative group text-slate-300 hover:text-white font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 ease-in-out flex items-center"
              >
                <ShoppingCart
                  className="inline-block mr-1.5 group-hover:text-cyan-400 transition-colors"
                  size={20}
                />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 sm:-top-1 sm:-right-2 bg-rose-500 text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold border-2 border-[#0B0F19] shadow-sm transition-transform group-hover:scale-110">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}

            {isAdmin && (
              <Link
                to="/secret-dashboard"
                className="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 border border-indigo-500/20 px-3 py-2 rounded-xl font-medium transition-all duration-300 ease-in-out flex items-center gap-1.5"
              >
                <Lock size={16} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {/* Auth Buttons */}
            <div className="flex items-center gap-2 ml-2 pl-2 sm:ml-4 sm:pl-4 border-l border-white/10">
              {user ? (
                <button
                  className="text-slate-300 hover:text-rose-400 hover:bg-rose-500/10 py-2 px-4 rounded-xl flex items-center transition-all duration-300 ease-in-out font-medium"
                  onClick={logout}
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline ml-2">Log Out</span>
                </button>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="text-slate-300 hover:text-white hover:bg-white/5 py-2 px-4 rounded-xl flex items-center transition-all duration-300 ease-in-out font-medium"
                  >
                    <LogIn className="mr-2" size={18} />
                    Login
                  </Link>
                  <Link
                    to={"/signup"}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 py-2 px-5 rounded-xl flex items-center transition-all duration-300 ease-in-out font-medium transform hover:-translate-y-0.5"
                  >
                    <UserPlus className="mr-2" size={18} />
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;