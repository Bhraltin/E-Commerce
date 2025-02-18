import Layout from "../../layout/Layout"
import CategoryPick from "./CategoryPick"
import HeroSlider from "./HeroSlider"
import ProductList from "./ProductList"
import Slider from "./Slider"

export default function HomePage () {
    return (
        <>
      <Layout >
      <HeroSlider/>
      <CategoryPick/>
      <ProductList/>
   <Slider/>
      </Layout> 
        </>
    )
}