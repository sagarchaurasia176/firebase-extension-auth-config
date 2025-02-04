import { signIn } from '../signIn';
import { FaGoogle } from 'react-icons/fa';

const SignInWithPopup: React.FC = () => {
  return (
    <div className=" flex  justify-center  p-4 flex-col text-white items-center h-screen">
      <div className="text-center  p-2 text-2xl font-bold mb-4  transition duration-1000 ease-in-out">
        <strong className=' p-4'>
          <span className=" bg-white p-3 text-black">Welcome to TC-Analyzer:</span> 
          <span className="bg-red-200 p-3 text-black"> Sign in to continue</span>
        </strong>
      </div>
      <div className=' p-3'>
      <button
        onClick={signIn}
        className="bg-black  px-12 py-3 rounded-xl  cursor-pointer  text-white font-bold py-2 px-4 rounded flex items-center  transition duration-300"
      >
        <FaGoogle/>
        &nbsp;
        Sign In with Google
      </button>
      </div>
    
    </div>
  );
};

export default SignInWithPopup;
