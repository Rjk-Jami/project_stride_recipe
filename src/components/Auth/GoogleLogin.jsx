import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  const [signInWithGoogle ,user] = useSignInWithGoogle(auth);
  console.log(user)
  return (
    <div className="w-1/2 mx-auto flex justify-center flex-col items-center">
      <div className="divider divider-neutral">or</div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-circle"
      >
       <FcGoogle className="text-3xl"/>

      </button>
    </div>
  );
}
