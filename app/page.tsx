import Link from "next/link";
import HomeSlider from "../app/components/extrafiel/homeSlider";
import HomeSliderB from "../app/components/extrafiel/HomeSliderB";
import { IoGameController } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Head from 'next/head';
import HomeGames from "../app/components/HomeGames";
import TestHome from '../app/components/TestHome'
import ProductList from "./components/ProductList";
import ProductNew from "./components/ProductNew";

export const metadata = {title:'PC Games Market', description: 'This is the home page of the pc games market store'};

export default function Home() {
  return (
    <div style={{overflowX:'hidden',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',}}>

    <ProductNew />

    </div>
  );
}


