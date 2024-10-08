import React from 'react';
import { FaLeftLong, FaRightLong } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { IoIosEye } from 'react-icons/io';
import { Link } from 'react-router-dom';
import imgDiary from '../../../../src/assets/diary-concept-illustration_114360-4158.jpg';

const Signup = () => {
    return (
        <div className='flex justify-between items-center min-h-screen'>
            <div className='flex-1 max-w-full mx-auto'>
                <img src={imgDiary} alt="" />
            </div>
            <div className="flex-1">
                <div className=" shrink-0 w-full max-w-sm shadow-xl bg-base-100 my-10 mx-auto">
                    <form className="card-body bg-base-200">
                        <div className="flex justify-center">
                            <h2 className="border-b-2 py-2 border-blue-800 text-lg text-center w-36">REGISTER</h2>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input rounded-none input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="file" placeholder="Photo URL" name="photo" className="input rounded-none input-bordered py-2" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input rounded-none input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input placeholder="******" name="password" className="input rounded-none input-bordered" required />
                            {/* type={show ? 'text' : 'password'} */}
                            {/* <span className="absolute right-8 top-[54px]" onClick={() => { setShow(!show) }}>{show ? <IoIosEye /> : <IoIosEyeOff />}</span> */}
                            <div className="flex flex-col justify-center items-center gap-2 mt-4">
                                <button className="bg-blue-950 w-1/2 px-6 py-3 text-white font-semibold text-lg">Register</button>
                                <a href="#" className="label-text-alt link link-hover text-center text-base font-semibold w-1/2">Forgot password?</a>
                            </div>
                        </div>
                        {/* <div>
                            {
                                regError ? <p className="text-red-700 text-center">{regError}</p> : undefined
                            }
                            {
                                success ? <p className="text-green-700 text-center">{success}</p> : undefined
                            }
                        </div> */}
                        <div>
                            <button className="bg-[#d3d3d3] w-full py-2 text-black font-semibold text-xs flex justify-center gap-2 items-center"><span className="text-xl"><FcGoogle /></span>LOG IN WITH GOOGLE</button>
                        </div>
                        <p className="text-xs text-center">Already Have an Account? Please <Link className="text-blue-800 hover:underline" to="/login">Login</Link></p>
                    </form>
                </div>
                <div className='flex justify-center items-center gap-8 my-8'>
                    <Link to='/'><button type="button" class="btn bg-[#264348] text-white w-28"><FaLeftLong></FaLeftLong> Previous</button></Link>
                    <Link to='/signin'><button type="button" class="btn bg-[#264348] text-white w-28">Next <FaRightLong></FaRightLong></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;