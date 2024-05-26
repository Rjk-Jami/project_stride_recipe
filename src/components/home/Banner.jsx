// import banner1 from "../../assets/image_01.jpeg";
import { NavLink } from "react-router-dom";
import banner2 from "../../assets/banner.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-[400px] "
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="md:w-1/2 w-full text-center">
          <h1 className="mb-5 text-5xl text-white font-bold">Welcome to<br></br>Tasty Delights!</h1>
          <p className="mb-5 ">
          Your go-to destination for discovering mouthwatering recipes, cooking tips, and culinary inspiration. Whether you are a seasoned chef or a kitchen novice, we have something for everyone. Dive into our extensive collection of recipes and embark on a delicious journey!
          </p>
          <NavLink to={'/'} className="btn btn-primary">Explore Recipes</NavLink>
        </div>
      </div>
    </div>
  );
}
