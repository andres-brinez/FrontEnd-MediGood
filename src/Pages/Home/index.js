import Categories from "../../Components/Categories";
import HeaderHome from "../../Components/Header/Home";
import "./style.css"

function Home() {
  return <>
    <HeaderHome/>
    <div class="banner">
      <img src="img/home/banner.png" alt="Banner/" />
    </div>
    <main class="containerMain">
   <Categories/>
    </main>
  </>
}

export default Home;