import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaLongArrowAltLeft } from "react-icons/fa";
const EditRecipe = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const price = parseFloat(form.price.value);
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };

    await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData)
    .then(res=>{
      console.log(res)
    })
  };
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  return (
    <div className="w-full px-16">
      <div className="flex justify-between items-center">
      <h1 className="text-4xl mb-4">Update Recipe</h1>
      <NavLink to={'/dashboard/manage-recipes'}>
        
        <div className="flex gap-2 items-center  z-40 m-5 hover:text-blue-600">
          <FaLongArrowAltLeft />
          <p>Go Back</p>
        </div>
      </NavLink>
      </div>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={recipeDetails?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            defaultValue={recipeDetails?.price}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.title === recipeDetails?.category}
                value={category?.title}
              >
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea
            defaultValue={recipeDetails?.description}
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Update Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
