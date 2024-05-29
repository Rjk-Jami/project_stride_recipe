import axios from "axios";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const AddRecipe = () => {
  const [categories, setCategories] = useState();
  const [recipes, setRecipes] = useState();
  let idValue = recipes && recipes.length+1
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      
      if (data?.status === 200) {
        console.log(data?.data);
        setCategories(data?.data);
      }
     
    }

    load();
  }, []);

  useEffect(()=>{
    async function load(){
    const recipesData = await axios.get("http://localhost:3000/recipes");
    if (recipesData?.status === 200) {
      console.log(recipesData?.data);
      setRecipes(recipesData?.data);
    }
  }
  load()
 
  },[])
  
 
  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;

    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };

    await axios.post("http://localhost:3000/recipes", recipeData)
    .then(res=>{
      if(res?.status === 201){
        console.log(res)
        Swal.fire("New Recipe Added");
        form.reset();
        idValue = idValue + 1
      }
    })
  };
  return (
    <div className="w-full px-16">
     <div className="flex justify-between items-center">
      <h1 className="text-4xl mb-4">Add Recipe</h1>
      <NavLink to={'/dashboard/manage-recipes'}>
        
        <div className="flex gap-2 items-center  z-40 m-5 hover:text-blue-600">
          <FaLongArrowAltLeft />
          <p>Go Back</p>
        </div>
      </NavLink>
      </div>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Id </label>
          <input required type="text" name="id" defaultValue={idValue} className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input required type="text" name="title" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input required
            type="number"
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea required name="description" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
