import React from 'react'
import { Link } from 'react-router-dom'
import DateTimeDisplay from "../hooks/DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";
import CountdownTimer from "../hooks/CountdownTimer";


const Body = () => {
    const THREE_DAYS_IN_MS = 165 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    // console.log("three" + THREE_DAYS_IN_MS);
    // console.log("Now" + NOW_IN_MS);
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    // const ExpiredNotice = () => {
    //     return (
    //         <div className="expired-notice">
    //             <span>Expired!!!</span>
    //             <p>Please select a future date and time.</p>
    //         </div>
    //     );
    // };

    // const ShowCounter = ({ days, hours, minutes, seconds }) => {
    //     return (
    //         <div className="show-counter">
    //             <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
    //             <p>:</p>
    //             <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
    //             <p>:</p>
    //             <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
    //             <p>:</p>
    //             <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    //         </div>
    //     );
    // };

    // const CountdownTimer = ({ targetDate }) => {
    //     const [days, hours, minutes, seconds] = useCountdown(targetDate);
    //     // console.log(days);

    //     if (days + hours + minutes + seconds <= 0) {
    //         return <ExpiredNotice />;
    //     } else {
    //         return (
    //             <ShowCounter
    //                 days={days}
    //                 hours={hours}
    //                 minutes={minutes}
    //                 seconds={seconds}
    //             />
    //         );
    //     }
    // };
    return (
        <>
            <div className='container-fluid'>
                <div className='row' style={{ marginTop: '94px' }}>
                    <div className='col-12 p-0'>
                        <div style={{ backgroundSize: 'cover', backgroundImage: 'url(images/bd-1.jpeg)', height: '800px' }}>
                            <div className="mask text-light d-flex justify-content-center flex-column text-center " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '800px' }}>
                                <div className='d-flex flex-column position-relative top-25 mt-5 pt-5'>
                                    <p className=" fw-bold text-warning display-7">Delhi | 17th Aug 2024</p>
                                    <p className=" fw-bold text-white display-5">The Biggest Battle Of The Brains Is Here</p>
                                    <p className="text-center fw-bold display-1">Delhi Memory Championship<br />2024</p>
                                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                                    <p className=" h1 my-3">Become a Sponsor</p>
                                    <Link className='text-warning text-decoration-none h4 my-3 '>
                                        Contact Us
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd section */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 d-lg-block d-none'>
                            <div className='d-flex justify-content-between'>
                                <div className='p-5'>
                                    <p className='fw-semibold text-center fs-7' style={{ color: 'rgb(151, 151, 151)' }}>About Wmc</p>
                                    <p className='' style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} >DMC Is The Delhi Cup Of Memory Sports In Which Memory Athletes From Several Schools, Cities And States Attempt To Memorize & Recall Different Forms Of Information, Under Certain Guidelines. The First WMC Took Place In London In The Year 1991.</p>
                                    <p style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }}>The DMC Has Memory Athletes Participating Across 4 Categories:-</p>
                                    <ol style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} className="list-group list-group-numbered">
                                        <li style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} class="list-group-item border border-0">Kids (Age 0-12)</li>
                                        <li style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} class="list-group-item border border-0">Juniors (Age 13-18)</li>
                                        <li style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} class="list-group-item border border-0">Adults (Age 19-60)</li>
                                        <li style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} class="list-group-item border border-0">Seniors (Age 60+)</li>
                                    </ol>
                                </div>
                                <div className=' w-100 h-100' style={{ marginTop: '130px' }}>
                                    <img className='img-fluid  rounded ' src="images/bd-2.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-12 d-lg-none d-block mt-4'>
                            <div className='d-flex flex-column align-items-center' style={{}}>
                                <p className='fw-semibold text-center fs-7' style={{ color: 'rgb(151, 151, 151)' }}>About Wmc</p>
                                <p className='text-center' style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} >DMC Is The Delhi Cup Of Memory Sports In Which Memory Athletes From Several Schools, Cities And States Attempt To Memorize & Recall Different Forms Of Information, Under Certain Guidelines. The First WMC Took Place In London In The Year 1991.</p>
                                <p className='text-center' style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }}>The DMC Has Memory Athletes Participating Across 4 Categories:-</p>
                                <ol style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} className=" text-center list-group list-group-numbered">
                                    <li style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} class="list-group-item border border-0">Kids (Age 0-12)</li>
                                    <li style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} class="list-group-item border border-0">Juniors (Age 13-18)</li>
                                    <li style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} class="list-group-item border border-0">Adults (Age 19-60)</li>
                                    <li style={{ color: 'rgb(74, 78, 105)', fontWeight: '500' }} class="list-group-item border border-0">Seniors (Age 60+)</li>
                                </ol>
                                <div className=' w-100 h-100 my-5 '>
                                    <img className='img-fluid  rounded ' src="images/bd-2.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd section end */}

                {/* 3rd section start */}
                <div className='container mt-5'>
                    <div className='row'>
                        <div style={{}} className='col-lg-12 d-lg-block d-none' >
                            <p className='fw-semibold text-center fs-7' style={{ color: 'rgb(151, 151, 151)' }}>DMC 2024 WILL WITNESS</p>
                            <p className='fw-semibold text-center' style={{ color: 'rgb(151, 151, 151)', fontSize: '50px', color: 'rgb(24, 44, 84)' }}>8 DISCIPLINES OVER 1 DAYS</p>
                            <div className='d-flex justify-content-evenly'>
                                <div>
                                    <div className='d-flex justify-content-center justify-content-lg-start'>
                                        <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                            <i className="fa-solid fa-location-dot text-white fs-5 p-3" />
                                        </div>
                                        <p className='fs-4 fw-semibold mt-4 ms-lg-2 ms-sm-4' style={{ color: 'rgb(74, 78, 105)' }}>15 Minutes Numbers</p>
                                    </div>
                                    <div className='d-flex justify-content-center justify-content-lg-start'>
                                        <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                            <i className="fa-solid fa-calendar-days text-white fs-5 p-3" />
                                        </div>
                                        <p className='fs-4 fw-semibold mt-4 ms-lg-2 ms-sm-4' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Fictional Dates</p>
                                    </div>
                                    <div className='d-flex justify-content-center justify-content-lg-start'>
                                        <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                            <i className="fa-solid fa-address-book text-white fs-5 p-3" />
                                        </div>
                                        <p className='fs-4 fw-semibold mt-4 ms-lg-2 ms-sm-4' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Name & Faces</p>
                                    </div>
                                    <div className='d-flex justify-content-center justify-content-lg-start'>
                                        <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                            <i className="fa-solid fa-file text-white fs-5 p-3" />
                                        </div>
                                        <p className='fs-4 fw-semibold mt-4 ms-lg-2 ms-sm-4' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Random Words</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-center justify-content-lg-start'>
                                        <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                            <i className="fa-solid fa-location-dot text-white fs-5 p-3" />
                                        </div>
                                        <p className='fs-4 fw-semibold mt-4 ms-lg-2 ms-sm-4' style={{ color: 'rgb(74, 78, 105)' }}>10 Minutes Cards</p>
                                    </div>
                                    <div className='d-flex justify-content-center justify-content-lg-start'>
                                        <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                            <i className="fa-solid fa-calendar-days text-white fs-5 p-3" />
                                        </div>
                                        <p className='fs-4 fw-semibold mt-4 ms-lg-2 ms-sm-4' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Binary Numbers</p>
                                    </div>
                                    <div className='d-flex justify-content-center justify-content-lg-start'>
                                        <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                            <i className="fa-solid fa-address-book text-white fs-5 p-3" />
                                        </div>
                                        <p className='fs-4 fw-semibold mt-4 ms-lg-2 ms-sm-4' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Random Images</p>
                                    </div>
                                    <div className='d-flex justify-content-center justify-content-lg-start'>
                                        <div className='bg-warning my-4' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                            <i className="fa-solid fa-file text-white fs-5 p-3" />
                                        </div>
                                        <p className='fs-4 fw-semibold mt-4 ms-lg-2 ms-sm-4' style={{ color: 'rgb(74, 78, 105)' }}>Speed Cards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 d-lg-none d-block'>
                            <div className='d-flex flex-column justify-content-center'>
                                <p className='fw-semibold text-center fs-7' style={{ color: 'rgb(151, 151, 151)' }}>DMC 2024 WILL WITNESS</p>
                                <p className='fw-semibold text-center' style={{ color: 'rgb(151, 151, 151)', fontSize: '50px', color: 'rgb(24, 44, 84)' }}>8 DISCIPLINES OVER 1 DAYS</p>
                                <div className='d-flex justify-content-center'>
                                    <div className='d-flex flex-column'>
                                        <div className='d-flex justify-content-start my-4'>
                                            <div className='bg-warning ' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                                <i className="fa-solid fa-location-dot text-white fs-5 p-3" />
                                            </div>
                                            <p className='fs-4 fw-semibold ms-4' style={{ color: 'rgb(74, 78, 105)' }}>15 Minutes Numbers</p>
                                        </div>
                                        <div className='d-flex justify-content-start my-4'>
                                            <div className='bg-warning' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                                <i className="fa-solid fa-solid fa-calendar-days text-white fs-5 p-3" />
                                            </div>
                                            <p className='fs-4 fw-semibold ms-4' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Fictional Dates</p>
                                        </div>
                                        <div className='d-flex justify-content-start my-4'>
                                            <div className='bg-warning' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                                <i className="fa-solid fa-address-book text-white fs-5 p-3" />
                                            </div>
                                            <p className='fs-4 fw-semibold ms-4' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Name & Faces</p>
                                        </div>

                                        <div className='d-flex justify-content-start my-4'>
                                            <div className='bg-warning ' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                                <i className="fa-solid fa-solid fa-calendar-days text-white fs-5 p-3" />
                                            </div>
                                            <p className='fs-4 fw-semibold ms-4 ' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Random Words</p>
                                        </div>
                                        <div className='d-flex justify-content-start my-4'>
                                            <div className='bg-warning ' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                                <i className="fa-solid fa-file text-white fs-5 p-3" />
                                            </div>
                                            <p className='fs-4 fw-semibold ms-4 ' style={{ color: 'rgb(74, 78, 105)' }}>10 Minutes Cards</p>
                                        </div>
                                        <div className='d-flex justify-content-start my-4'>
                                            <div className='bg-warning ' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                                <i className="fa-solid fa-location-dot text-white fs-5 p-3" />
                                            </div>
                                            <p className='fs-4 fw-semibold ms-4 ' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Binary Numbers</p>
                                        </div>
                                        <div className='d-flex justify-content-start my-4'>
                                            <div className='bg-warning ' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                                <i className="fa-solid fa-file text-white fs-5 p-3" />
                                            </div>
                                            <p className='fs-4 fw-semibold ms-4 ' style={{ color: 'rgb(74, 78, 105)' }}>5 Minutes Random Images</p>
                                        </div>
                                        <div className='d-flex justify-content-start my-4'>
                                            <div className='bg-warning ' style={{ borderRadius: '50%', height: '50px', width: '50px' }}>
                                                <i className="fa-solid fa-location-dot text-white fs-5 p-3" />
                                            </div>
                                            <p className='fs-4 fw-semibold ms-4  ' style={{ color: 'rgb(74, 78, 105)' }}>Speed Cards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd sectidivon end */}

                {/* 4th sectiion start */}
                <div className='container-fluid'>
                    <div className='row bg-warning'>
                        <div className='col-12 text-center'>
                            <p className=' fw-bold ' style={{ fontSize: '50px' }}>WHY DMC 2024</p>
                            <div className='row py-3'>
                                <p style={{ fontSize: '18px', fontWeight: '500px' }}>
                                    DMC 2024 will be a truly grand and historic event happening for the first time in Delhi.
                                    DMC 2024 is approved by the International Association of Memory and Memory Sports Federation of India. <br /> The event will be organised by WhiteForest Academy.
                                </p>
                            </div>
                            <div className='row pb-3'>
                                <p style={{ fontSize: '18px', fontWeight: '500px' }}>
                                    International Association of Memory (IAM) is the global governing body for Memory Sports headquartered in<br /> Germany which connects various National Memory Sport Federations. IAM is a worldwide federation with an <br /> overarching vision of bringing memory sports to everyone.
                                </p>
                            </div>
                            <div className='row'>
                                <p style={{ fontSize: '18px', fontWeight: '500px' }}>
                                    Memory Sport Federation of India (MSFI) is India’s governing body for memory sports. Headquartered in Mumbai<br /> which connects various state, city memory sports federations. MSFI is the Federation of India with the ultimate<br /> vision of bringing memory sports to everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4th section end */}

                {/* 5th section start */}
                <div className='row'>
                    <div className='col-12'>
                        <img className='img-fluid' src="images/bd-3.png" alt="bd-3" />
                    </div>
                </div>
                {/* 5th section end */}

                {/* 6th section start */}
                <div className='container'>
                    <div className='row'>
                        <div className='d-flex flex-column align-items-center'>
                            <p className='h5' style={{ fontWeight: '600px', color: 'rgb(121, 121, 121)', fontStyle: 'normal' }}>REGISTRATION DETAILS</p>
                            <p className='h2 text-center' style={{ fontSize: '50px', fontWeight: '800px', color: 'rgb(24, 44, 84)', fontStyle: 'normal' }}>Registration Fees</p>
                            <h2 className='my-3 text-center' style={{ fontSize: '35px', fontWeight: '700px', color: 'rgb(74, 78, 105)', fontStyle: 'normal' }}>4250+ Taxes (18% GST)</h2>
                            <Link style={{ fontSize: '20px', fontWeight: '500px', color: 'rgb(255, 255, 255)', fontStyle: 'normal' }} className='btn btn-rounded bg-warning my-3' >Register Now</Link>
                        </div>
                    </div>
                </div>
                {/* 6th section end */}

                {/* 7th section start */}
                <div className='container mt-5'>
                    <div className='row'>
                        <p className='display-2 fw-bold text-center'>Meet Our Team</p>
                        <div className='col-lg-12 d-lg-block d-none'>
                            <div className='d-flex justify-content-center'>
                                <div className='bg-warning rounded w-25 h-25'>
                                    <img className='img-fluid p-3' src="images/bd-4.png" alt="bd4" />
                                    <p className='fs-2 fw-bold text-white text-center'>Monika Thomas</p>
                                </div>
                                <div className='bg-warning ms-3 rounded w-25 h-25'>
                                    <img className='img-fluid p-3' src="images/bd-4.png" alt="bd4" />
                                    <p className='fs-2 fw-bold text-white text-center'>Monika Thomas</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-sm-12 d-sm-block d-lg-none'>
                            <div className='d-flex justify-content-center'>
                                <div className='bg-warning rounded w-25 h-25'>
                                    <img className='img-fluid p-3' src="images/bd-4.png" alt="bd4" />
                                    <p className='fs-5 fw-bold text-white text-center'>Monika Thomas</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 my-4 d-block d-lg-none'>
                            <div className='d-flex justify-content-center'>
                                <div className='bg-warning rounded w-25 h-25'>
                                    <img className='img-fluid p-3' src="images/bd-4.png" alt="bd4" />
                                    <p className=' fs-5 fw-bold text-white text-center'>Monika Thomas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* 7th section end */}


                {/* 8th section start */}

                <div className='row my-4 my-5 pb-3'>
                    <p className='h1 d-inline-flex justify-content-center my-3 text-center display-3 fw-bold'>Our Partners & Sponsors</p>
                    <div className='row'>
                        <div className='col-lg-4 overflow-hidden ps-5 col-sm-12 '>
                            <Link>
                                <img className='img-fluid text-center' src="images/bd-5.png" alt="bd-5" />
                            </Link>
                            <p className='h4 d-lg-none d-block text-center text-dark my-3'>GRAVIT INFOSYSTEMS</p>
                        </div>
                        <div className='col-lg-4 col-sm-12 text-center ps-5'>
                            <Link>
                                <img className='img-fluid ' src="images/bd-6.png" alt="bd-6" />
                            </Link>
                            <p className='h4 d-lg-none d-block text-center my-3'>Partner 2</p>
                        </div>
                        <div className='col-lg-4 text-center col-sm-12 ps-5'>
                            <Link>
                                <img className='img-fluid' src="images/bd-6.png" alt="bd-6" />
                            </Link>
                            <p className='h4 d-lg-none d-block text-center my-3'>Partner 3</p>
                        </div>
                    </div>
                    <div className='row text-center'>
                        <div className='col-lg-4 d-lg-block d-none'>
                            <p className='h4'>GRAVIT INFOSYSTEMS</p>
                        </div>
                        <div className='col-lg-4 d-lg-block d-none'>
                            <p className='h4'>Partner 2</p>
                        </div>
                        <div className='col-lg-4 d-lg-block d-none'>
                            <p className='h4'>Partner 3</p>
                        </div>
                    </div>
                    <div className='row text-center mt-5'>
                        <p className='h3 ms-4'>Become Our Partner & Sponsor</p>
                        <Link className='text-decoration-none h5 mt-3 text-warning'><p>Contact Us</p></Link>
                    </div>
                </div>
            </div >
            {/* 8th section end */}

            {/* 9th section start */}
            <div className='container'>
                <div className='row gx-3'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <img className='img-fluid' src="images/g1.jpg" alt="g1" />
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 my-3 my-md-0 my-lg-0'>
                        <img className='img-fluid' src="images/g2.jpeg" alt="g2" />
                    </div>
                    <div className='col-lg-4 mt-md-3 mt-lg-0 col-md-12 col-sm-12'>
                        <img className='img-fluid' src="images/g3.jpeg" alt="g3" />
                    </div>
                </div>
                <div className='row gx-3 my-3'>
                    <div className='col-lg-4 col-md-6 col-sm-12 '>
                        <img className='img-fluid' src="images/g4.jpg" alt="g4" />
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 my-3 my-md-0 my-lg-0'>
                        <img className='img-fluid' src="images/g5.jpg" alt="g5" />
                    </div>
                    <div className='col-lg-4 col-md-12 mt-lg-0 mt-md-3 col-sm-12 '>
                        <img className='img-fluid' src="images/g6.jpg" alt="g6" />
                    </div>
                </div>
                <div className='row gx-3 my-3'>
                    <div className='col-lg-4 col-md-6 col-sm-12 '>
                        <img className='img-fluid' src="images/g7.jpg" alt="g7" />
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 my-md-0 my-3 my-lg-0'>
                        <img className='img-fluid' src="images/g8.jpg" alt="g8" />
                    </div>
                    <div className='col-lg-4 col-md-12 mt-md-0 my-md-3 col-sm-12'>
                        <img className='img-fluid' src="images/g9.jpg" alt="g9" />
                    </div>
                </div>
            </div>
            {/* 9th section end */}

            {/* 10th section start */}
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='bg-image' style={{ backgroundImage: 'url(images/bd-bd.jpg)', height: '450px', backgroundSize: 'cover' }}>
                            <div className=" text-light d-flex justify-content-center flex-column text-center p-5" style={{ height: '450px', backgroundColor: 'rgba(240, 173, 78, 0.7)' }}>
                                <div className='d-flex flex-column align-items-center '>
                                    <p className=" text-dark h2">The Biggest Battle Of The Brains Is Here</p>
                                    <p className="text-center text-dark fs-1 fw-bold  mt-4">LET'S MEET FOR THE <br />DELHI MEMORY <br /> CHAMPIONSHIP 2024</p>
                                    <p className=" h1  text-dark">Registrations Have Started</p>
                                    {/* <Link className='text-dark btn-rounded text-decoration-none h4 btn btn-warning w-25 '>
                                            Register Now
                                        </Link> */}
                                    <div className='row justify-content-center'>
                                        <Link className='btn btn-rounded h-100 w-100 btn-warning display-4 fw-bold'>Register Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 10th section end */}



        </>
    )
}

export default Body