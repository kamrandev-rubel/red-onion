import React from 'react';
import signupLogo from '../../../images/logo2.png'

const SignUp = () => {
    
    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <div>
                <div>
                    <img src={signupLogo} className='w-52 mx-auto mb-24' alt="" />
                </div>
                <div className='mx-auto'>
                    <form>
                        <input type="text" name="" id="" className='h-[70px] w-[480px] block bg-gray-100 outline-none mb-[28px] text-xl rounded-lg px-4 text-gray-900' placeholder='Name' required />
                        <input type="email" name="" id="" className='h-[70px] w-[480px] block bg-gray-100 outline-none mb-[28px] text-xl rounded-lg px-4 text-gray-900' placeholder='Email' required />
                        <input type="password" name="" id="" className='h-[70px] w-[480px] block bg-gray-100 outline-none mb-[28px] text-xl rounded-lg px-4 text-gray-900' placeholder='Password' required />
                        <input type="password" name="" id="" className='h-[70px] w-[480px] block bg-gray-100 outline-none mb-[28px] text-xl rounded-lg px-4 text-gray-900' placeholder='Confirm Password' required />
                        <input type="button" value="Sign Up" className='h-[70px] w-[480px] block bg-red-500 outline-none mb-[28px] text-2xl rounded-lg text-white hover:bg-red-600 cursor-pointer'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;