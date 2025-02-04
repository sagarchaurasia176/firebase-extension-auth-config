import { signIn } from '../signIn';
import { FaGoogle } from 'react-icons/fa';

const SignInWithPopup: React.FC = () => {
  return (
    <div className=" flex  justify-center  p-4 flex-col text-white items-center h-screen">
      <div className="text-center  p-2 text-2xl font-bold mb-4  transition duration-1000 ease-in-out">
        <strong className=' text-balance text-black  underline '>
          Sign In to Your  Account
        </strong>
      </div>
      <div className=''>
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
