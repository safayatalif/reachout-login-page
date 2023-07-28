import { FcGoogle } from 'react-icons/fc'
import logo from "../../assets/logo.png"

const Login = () => {
    return (
        <div className='flex justify-center items-center bg-[#EFF4FA]'>
            <div className='flex w-full flex-col max-w-md rounded-md p-10 bg-white my-12  text-gray-900'>
                <div className=' text-center'>
                    <img className='w-10/12 mx-auto ' src={logo} alt="" />
                </div>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Login to your account your credentials
                    </p>
                </div>
                <div className='flex justify-center items-center space-x-2 border rounded-full p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Login with Google</p>
                </div>
                <div className='flex items-center py-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Or Login with Email
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <form
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address <span className='text-rose-500 font-bold'>*</span>
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-full border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password <span className='text-rose-500 font-bold'>*</span>
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-full border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                        <div className='flex justify-between px-2'>
                            <div>
                                <input type="checkbox" name="" value="Remember Me" id="" />
                                <label className='text-xs px-2'>Remember Me</label>
                            </div>
                            <button className='text-xs hover:underline hover:text-rose-500 text-blue-500'>
                                Forgot password?
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-[#23B574] w-full rounded-full py-3 text-white'
                        >
                            Login
                        </button>
                    </div>
                </form>



                <p className='p-6 text-sm text-center'>
                    No Register?{' '}
                    <a
                        href='#'
                        className='hover:underline hover:text-rose-500 text-blue-500'
                    >
                        Create a Account
                    </a>
                    .
                </p>
            </div>
        </div>
    )
}

export default Login