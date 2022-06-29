import Header from "../components/Header/Header";
import headerImage from "../assets/wallovens2.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";





function Home() {
  return (
    <>
      <Header className="Headerhome" title="Welcome to flowers shop"  image={headerImage} >
      <h4>A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae). The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs.</h4>
        
      </Header>

      
      <CategoryList categories={getCategories()}/>
       

 
        
    </>
  );
}

export default Home;