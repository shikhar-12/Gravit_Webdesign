import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5  text-center text-lg-start'>
                        <div className='d-flex flex-column align-items-center align-items-lg-start'>
                            <img className='w-50' src="images/wf-logo.png" alt="" />
                            <p className='fs-7 fw-semibold'>WhiteForest is an endeavour dedicated to the forest of 100 trillion neural connections inside a human brain. It offers Brain Training, Memory Mastery and Super Learning skills to students, teachers, parents, and professionals. Starting with 1 student in 2019 over the years WhiteForest has evolved to serve and train many schools, colleges, and Corporates.</p>
                        </div>
                    </div>
                    {/* 2nd section */}
                    <div className='col-lg-3 d-lg-block d-none text-center text-lg-start'>
                        <Link className='fs-7 fw-bold  text-dark'>Quick Link</Link>
                        <ul className='mt-2 d-flex flex-column'>
                            <li className='list-group mt-3 fs-7'><Link className='text-decoration-none text-dark fw-semibold'>Home</Link></li>
                            <li className='list-group my-2 fs-7'><Link className='text-decoration-none text-dark fw-semibold'>Delhi Memory Championship</Link></li>
                            <li className='list-group my-2 fs-7'><Link className='text-decoration-none text-dark fw-semibold'>Gallery</Link></li>
                            <li className='list-group my-2 fs-7'><Link className='text-decoration-none text-dark fw-semibold'>About Us</Link></li>
                            <li className='list-group my-2 fs-7'><Link className='text-decoration-none text-dark fw-semibold'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 d-lg-none d-block text-center'>
                        <Link className='fs-7 fw-bold  text-dark'>Quick Link</Link>
                        <ul className='mt-2 d-flex flex-column align-items-center'>
                            <li className='list-group mt-3 fs-7 me-4'><Link className='text-decoration-none text-dark fw-semibold'>Home</Link></li>
                            <li className='list-group my-2 fs-7'><Link className='text-decoration-none text-dark fw-semibold'>Delhi Memory Championship</Link></li>
                            <li className='list-group my-2 fs-7 me-4'><Link className='text-decoration-none text-dark fw-semibold'>Gallery</Link></li>
                            <li className='list-group my-2 fs-7 me-4'><Link className='text-decoration-none text-dark fw-semibold'>About Us</Link></li>
                            <li className='list-group my-2 fs-7 me-4'><Link className='text-decoration-none text-dark fw-semibold'>Contact Us</Link></li>
                        </ul>
                    </div>
                    {/* 2nd section end */}
                    {/* 3rd section */}
                    <div className='col-lg-4 d-lg-block d-none text-center text-lg-start'>
                        <Link className='fs-7 fw-bold  text-dark'>Our Location</Link>
                        <div className='d-flex justify-content-center justify-content-lg-start'>
                            <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                <i className="fa-solid fa-location-dot text-white fs-5 p-3" />
                            </div>
                            <p className='fs-7 fw-semibold mt-3 ms-lg-2 ms-sm-4'>White Forest Academy <br /> Green Park <br /> New Delhi 110016</p>
                        </div>

                        <div className='d-flex  justify-content-center justify-content-lg-start'>
                            <div className='bg-warning my-3 me-lg-0 me-5' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                <i className="fa-solid fa-phone text-white fs-5 p-3" />
                            </div>
                            <p className='fs-7 fw-semibold ms-lg-2  my-4 '>+91 88105 69514</p>
                        </div>
                        <div className='d-flex justify-content-center justify-content-lg-start'>
                            <div className='bg-warning mt-3 ms-lg-0 ms-5' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                <i className="fa-solid fa-envelope text-white fs-5 p-3" />
                            </div>
                            <p className='fs-7 fw-semibold ms-2 my-4'>domc@whiteforest.academy</p>
                        </div>
                    </div>
                    <div className='d-lg-none d-block text-center'>
                        <Link className='fs-7 fw-bold  text-dark'>Our Location</Link>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                <i className="fa-solid fa-location-dot text-white fs-5 p-3" />
                            </div>
                            <p className='fs-7 fw-semibold'>White Forest Academy <br /> Green Park <br /> New Delhi 110016</p>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='bg-warning my-3' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                <i className="fa-solid fa-phone text-white fs-5 p-3" />
                            </div>
                            <p className='fs-7 fw-semibold'>+91 88105 69514</p>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='bg-warning my-3' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                <i className="fa-solid fa-envelope text-white fs-5 p-3" />
                            </div>
                            <p className='fs-7 fw-semibold'>domc@whiteforest.academy</p>
                        </div>
                    </div>
                    {/* 3rd section end */}

                </div>
                <div className='row me-3'>
                    <div className='col-12 '>
                        <p className='fw-bold py-2 text-center'>
                            Copyright 2024 WhiteForest. All Rights Reserved | Maintained and managed by Gravit InfoSystems
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer