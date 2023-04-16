import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";

export default function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product)

  useEffect(() => {
    (async () => {
      const res = await fetch("https://mern-food-ordering-app.vercel.app/product")
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  }, [])

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}