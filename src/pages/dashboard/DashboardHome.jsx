import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function DashboardHome() {
  const { user, googleLogin, EmailPassLogin, createUser, logout, authLoading } =
    useAuth();
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };
  console.log(user);

  return (
    // <div>
    //   <p>Email: {user?.email}</p>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div className="hero min-h-screen bg-base-200 relative">
      <div className=" text-center">
        <div className="max-w-md">
          <div className="cursor-pointer mx-auto w-40 h-40 m-5 border border-black">
            <img
            className="m-auto h-full"
              src={user?.photoURL ? user?.photoURL : "https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="DEMO"
            />
          </div>
          <h1 className="text-2xl text-black font-bold">Name: {user?.displayName}</h1>
          <h1 className="text-3xl text-gray-800 font-bold">Email: {user?.email}</h1>

          <div className="h-[1px] bg-black w-full mt-2"></div>
          <p className="py-6"></p>
          <div className="flex w-full justify-around">
            <div className="">
              <p>
                category: <span className="font-bold"></span>
              </p>
            </div>
            <div className="">
              <p>
                Price: <span className="font-bold"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
