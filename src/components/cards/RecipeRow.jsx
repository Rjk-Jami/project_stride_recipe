import { Link, NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe , setRecipes}) {
  const handleDelete = async (id) => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const response = await axios.delete(`http://localhost:3000/recipes/${id}`);

      if (response?.status === 200) {
        const newResponse = await axios.get("http://localhost:3000/recipes");
        if (newResponse?.status === 200) {
          setRecipes(newResponse?.data);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    }
  } catch (error) {
    console.error("Error deleting the recipe:", error);
    Swal.fire({
      title: "Error!",
      text: "There was an error deleting your file. Please try again later.",
      icon: "error",
    });
  
}
    
  };
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4 items-center">
        <NavLink to={`/dashboard/recipeDetails/${recipe?.id}`} className=" text-lg">
          <FaEye />
        </NavLink>
        <Link to={`/dashboard/edit-recipe/${recipe?.id}`} className=" text-lg">
          <FaEdit />
        </Link>
        <button onClick={() => handleDelete(recipe?.id)} className=" text-lg">
          <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
}
