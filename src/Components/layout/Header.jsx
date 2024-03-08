import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            {/* position-fixed */}

            <nav className=" w-100 border border-4 border-dark  border-end-0 border-top-0 border-start-0 position-fixed z-1 top-0 navbar navbar-expand-lg bg-body">
                <div className="container">
                    <div className='d-flex justify-content-between'>
                        <Link className=' d-inline w-50'>
                            <img src="images/wf-logo.png" className='navbar-brand img-fluid ' alt="logo" />
                        </Link>

                        <button className="  navbar-toggle d-lg-none d-block h-25 mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>



                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav fs-5">
                            <li className="nav-item  mx-4">
                                <Link className="nav-link active ">HOME</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link active ">ABOUT US</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link active ">COURSES</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link active ">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </>
    )
}

export default Header