import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const { signIn, goggle, github } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleGoggle = () => {
    goggle()
      .then(result => {
        const goggleUser = result.user
        console.log(goggleUser)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleGithub = () => {
    github()
      .then(result => {
        const githubUser = result.user
        console.log(githubUser)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div className="max-w-md  mx-auto my-10 bg-white p-5 rounded-md shadow-md "  style={{ backgroundImage: `url(https://img.freepik.com/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg?w=900&t=st=1683043134~exp=1683043734~hmac=7df8d0b1425453a069fe1f46d67450b93fb590fffffba414587c3541dc491504")`}} >
      <h2 className="text-2xl font-bold mb-5">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" className="border-gray-400 border-2 p-2 w-full rounded-md focus:outline-none focus:border-blue-400" required />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" placeholder="********" className="border-gray-400 border-2 p-2 w-full rounded-md focus:outline-none focus:border-blue-400" required />
        </div>
        <div className="mb-5">
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">Login</button>
        </div>
        <p>Don't have an account? <Link to='/register' className='text-red-400 underline'>Register</Link> </p>
      </form>
      <div className='ml-[100px]'>
        <button className='flex items-center btn btn-outline  p-5 mt-4' onClick={handleGoggle}><FaGoogle></FaGoogle><span className='ml-2'>Sign in with Google</span> </button>
        <button className='flex items-center btn btn-outline  p-5 mt-4' onClick={handleGithub}><FaGithub></FaGithub><span className='ml-2'>Sign in with Github</span></button>
      </div>
    </div>
  );
};

export default Login;