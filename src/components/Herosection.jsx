import React from "react";
import BmwCar from "../assets/Untitled design.jpg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { CgBmw } from "react-icons/cg";
import { SlSpeedometer } from "react-icons/sl";
import { TbAutomaticGearbox, TbCar4Wd, TbEngine } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const Herosection = () => {
  return (
    <>
      <section className="hero-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="car-image">
                <img
                  src={BmwCar}
                  className="img-fluid rounded-4 mx-auto"
                  alt="bmw-series-3"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="car-content">
                <h1>BMW 3 Series</h1>
                <p className="d-flex align-items-center text-secondary">
                  <span className="fw-semibold text-black">4.3</span>
                  <FaStar color="orangered" className="mx-1" /> 85 Reviews
                </p>
                <p className="mb-0 mt-4">
                  ₹ 74.90 Lakh{" "}
                  <span className="text-primary">Get On-Road Price</span>
                </p>
                <p className="text-secondary">
                  Ex-Showroom Price in{" "}
                  <span className="text-primary">Navsari</span>
                </p>
                <button className="btn btn-orange text-white px-5 fw-semibold">
                  View June Offers
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-4 p-4 mt-5 border">
            <div className="specs-title">
              <h4>BMW 3 Series spes & features</h4>
            </div>

            <div className="row gx-5">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <ul className="list-unstyled mt-4">
                  <li className="d-flex justify-content-between fs-5">
                    <p className="text-secondary">
                      <TbEngine /> Engine
                    </p>
                    <p className="fw-semibold">2998 cc</p>
                  </li>
                  <li className="d-flex justify-content-between fs-5">
                    <p className="text-secondary">
                      <BsArrowCounterclockwise /> Torque
                    </p>
                    <p className="fw-semibold">500 Nm</p>
                  </li>
                  <li className="d-flex justify-content-between fs-5">
                    <p className="text-secondary">
                      <SlSpeedometer /> Top Speed
                    </p>
                    <p className="fw-semibold">253 Kmph</p>
                  </li>
                  <li className="d-flex justify-content-between fs-5">
                    <p className="text-secondary">
                      <CgBmw /> Global NCAp Safety Rating
                    </p>
                    <p className="fw-semibold">5 Star</p>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <ul className="list-unstyled mt-4">
                  <li className="d-flex justify-content-between fs-5">
                    <p className="text-secondary">
                      <AiOutlineThunderbolt /> Power
                    </p>
                    <p className="fw-semibold">368.78 bhp</p>
                  </li>
                  <li className="d-flex justify-content-between fs-5">
                    <p className="text-secondary">
                      <TbAutomaticGearbox /> Transmission
                    </p>
                    <p className="fw-semibold">Automatic</p>
                  </li>
                  <li className="d-flex justify-content-between fs-5">
                    <p className="text-secondary">
                      <TbCar4Wd /> Drive Type
                    </p>
                    <p className="fw-semibold">4WD</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-4 p-4 mt-3 border">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="title mb-4">
                  <h4>BMW 3 Series Latest updates</h4>
                </div>

                <ul className="list-unstyled fs-6 text-secondary">
                  <li className="mb-2">
                    <span className="fw-semibold text-black me-1">
                      Latest Updates:{" "}
                    </span>
                    The updated BMW M340i has been launched with subtle cosmetic
                    changes inside and out.
                  </li>
                  <li className="mb-2">
                    <span className="fw-semibold text-black me-1">Price: </span>
                    The BMW 3 Series M340i is priced at Rs 74.90 lakh
                    (ex-showroom Delhi).
                  </li>
                  <li className="mb-2">
                    <span className="fw-semibold text-black me-1">
                      Variants:{" "}
                    </span>
                    It is available in a single fully loaded version: M340i.
                  </li>
                  <li className="mb-2">
                    <span className="fw-semibold text-black me-1">
                      Engine and Transmission:{" "}
                    </span>
                    It comes with a 3.0-litre 6-cylinder turbo-petrol engine,
                    which makes 374 PS and 500 Nm. and is paired with an 8-speed
                    automatic transmission.
                  </li>
                  <li className="mb-2">
                    <span className="fw-semibold text-black me-1">
                      Features:{" "}
                    </span>
                    Features include a curved display setup (12.3-inch for
                    instrumentation and 10.25-inch for infotainment), a
                    panoramic roof, a 16-speaker 464-Watt Harman Kardon sound
                    system, ambient lighting, and a wireless phone charger.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;