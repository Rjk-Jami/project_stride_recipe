import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState();

  useEffect(() => {
    async function load() {
      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);
  console.log(recipeDetails);
  return (
    <div className="hero min-h-screen bg-base-200 relative">
        <NavLink to={'/dashboard/manage-recipes'}>
        
        <div className="flex gap-2 items-center absolute left-0 top-0 z-40 m-5 hover:text-blue-600">
          <FaLongArrowAltLeft />
          <p>Go Back</p>
        </div>
      </NavLink>
      <div className=" text-center">
        <div className="max-w-md">
            <div className="cursor-pointer mx-auto w-40 h-40 m-5 border border-black">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="DEMO" />
            </div>
          <h1 className="text-3xl font-bold">Name: {recipeDetails?.title}</h1>
          <div className="h-[1px] bg-black w-full mt-2"></div>
          <p className="py-6">{recipeDetails?.description}</p>
          <div className="flex w-full justify-around">
            <div className="">
              <p>category:  <span className="font-bold">{recipeDetails?.category}</span></p>
            </div>
            <div className="">
                <p>Price: <span className="font-bold">{recipeDetails?.price}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
