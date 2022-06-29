import headerImage from "../assets/wallovens2.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import Header from "../components/Header/Header";
import { getCategories } from "../data/categories";


  function Categories() {
    return (
      <>
        <Header
          title="Find something for yourself!"
          image={headerImage}>
          The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
        </Header>
  
        <CategoryList categories={getCategories()} />
      </>
    );
  }
  
  export default Categories;