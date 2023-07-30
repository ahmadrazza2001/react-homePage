import React from "react";
import "./App.css";
import {
  FaGlobeAmericas,
  FaGraduationCap,
  FaSchool,
  FaChalkboardTeacher,
  FaUsers,
  FaMagic,
  FaWrench,
  FaCloudscale,
  FaUserLock,
  FaTrophy,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaHome,
  FaUserSecret,
  FaTelegramPlane,
  FaLaptopCode,
} from "react-icons/fa";

const App = () => {
  return (
    <>
      <div style={{ background: "#004170", padding: "10px" }}>
        <span style={{ color: "white", marginLeft: "10px" }}>
          <FaTrophy style={{ marginRight: "5px", fontSize: "20px" }} />
          Pakistan's No.1 School Management System
        </span>
        <span style={{ color: "white", marginRight: "10px", float: "right" }}>
          <FaEnvelope style={{ marginRight: "5px", fontSize: "20px" }} />
          info@eschool.pk
          <FaPhoneAlt style={{ marginLeft: "10px" }} />
          +92 000-00000
          <FaTwitter style={{ marginLeft: "20px" }} />
          <FaFacebookF style={{ marginLeft: "10px" }} />
        </span>
      </div>
      <nav
        className="navbar navbar-expand-lg bg-light navbar-light text-white"
        style={{ padding: "45px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <b> E-School</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ border: "none" }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-5 sm-icons">
              <li className="nav-item">
                <button
                  className="nav-link"
                  href="/"
                  style={{
                    background: "none",
                    border: "1px solid orange",
                    fontWeight: "600",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  <FaHome
                    style={{
                      position: "relative",
                      right: "5px",
                    }}
                  />
                  <span>Home</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  href="/"
                  style={{
                    background: "none",
                    border: "1px solid orange",
                    fontWeight: "600",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  <FaUserSecret
                    style={{
                      position: "relative",
                      right: "5px",
                    }}
                  />
                  <span>About Us</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  href="/"
                  style={{
                    background: "none",
                    border: "1px solid orange",
                    fontWeight: "600",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  <FaTelegramPlane
                    style={{
                      position: "relative",
                      right: "5px",
                    }}
                  />
                  <span>Contact Us</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  href="/"
                  style={{
                    background: "none",
                    border: "1px solid orange",
                    fontWeight: "600",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  <FaLaptopCode
                    style={{
                      position: "relative",
                      right: "5px",
                    }}
                  />
                  <span>Web Portal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "65vh" }}>
            <img
              src="https://res.cloudinary.com/sbcunueh/image/upload/v1663362173/samples/ecommerce/accessories-bag.jpg"
              className="d-block w-100"
              alt="image1"
            />
          </div>
          <div className="carousel-item" style={{ height: "65vh" }}>
            <img
              src="https://res.cloudinary.com/sbcunueh/image/upload/v1663362189/cld-sample-4.jpg"
              className="d-block w-100"
              alt="image2"
            />
          </div>
          <div className="carousel-item" style={{ height: "65vh" }}>
            <img
              src="https://res.cloudinary.com/sbcunueh/image/upload/v1663362169/samples/animals/three-dogs.jpg"
              className="d-block w-100"
              alt="image3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        style={{
          opacity: "90%",
          width: "100%",
          backgroundImage:
            'url("https://res.cloudinary.com/sbcunueh/image/upload/v1690658131/11910_n6soga.jpg")',
        }}
      >
        <div
          className="d-flex justify-content-center"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="d-flex justify-content-center mt-5">
            A Complete, End-to-End soultion for your institute
          </h1>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="d-flex justify-content-center">
            <p style={{ maxWidth: "60%", marginTop: "2%" }}>
              eSchool is a Complete, end-to-end Solution for your Institute
              (School, College, University, Academy, Coaching Center, etc).
              eSchool is an Online, Web/Cloud based System which enables you to
              manage your School efficiently. Its not only simplifies and
              automate the routine tasks, but also provides you more control,
              visibility and reporting with future trends & analytics.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p style={{ maxWidth: "60%", marginTop: "2%" }}>
              eSchool is a powerful educational system with all backend
              administration functions of the educational institute and online
              application to bring management, administration, parents, teachers
              and students on a common interactive platform. It significantly
              reduces staff time spent on administrative tasks, also helps to
              improve data consistency and efficiency.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p style={{ maxWidth: "60%", marginTop: "2%", marginBottom: "2%" }}>
              eSchool, a product of SW3 Solutions, is a result of our years of
              research in local education sector. We have developed this system
              in a very efficient manner so that we can customize it easily for
              any educational institute's specific requirements. We are working
              on few new add-on modules keeping in view the future needs of
              education sector.
            </p>
          </div>
        </div>
      </div>
      <div
        className="conatiner"
        style={{
          opacity: "90%",
          width: "100%",
          backgroundImage:
            'url("https://res.cloudinary.com/sbcunueh/image/upload/v1690659392/Untitled-1_sevumh.png")',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="d-flex justify-content-center mt-5 text-white">
            eSchool statistics summary
          </h1>
        </div>
        <div className="conatiner" style={{ marginTop: "3%" }}>
          <div className="row">
            <div className="container col-md-8 d-flex justify-content-center gap-5 pb-5">
              <div className="card align-items-center bg-transparent">
                <div className="text-center">
                  <FaGlobeAmericas style={{ fontSize: "100px" }} />
                  <h2>Multiple</h2>
                  <h4>Countries</h4>
                </div>
              </div>
              <div className="card align-items-center bg-transparent">
                <div className="text-center">
                  <FaSchool style={{ fontSize: "100px" }} />
                  <h2>350+</h2>
                  <h4>Schools</h4>
                </div>
              </div>
              <div className="card align-items-center bg-transparent">
                <div className="text-center">
                  <FaChalkboardTeacher style={{ fontSize: "100px" }} />
                  <h2>3,500+</h2>
                  <h4>Teachers</h4>
                </div>
              </div>
              <div className="card align-items-center bg-transparent">
                <div className="text-center">
                  <FaGraduationCap style={{ fontSize: "100px" }} />
                  <h2>350,000+</h2>
                  <h4>Students</h4>
                </div>
              </div>

              <div className="card align-items-center bg-transparent">
                <div className="text-center">
                  <FaUsers style={{ fontSize: "100px" }} />
                  <h2>35,000+</h2>
                  <h4>Parents</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          opacity: "90%",
          width: "100%",
          backgroundImage:
            'url("https://res.cloudinary.com/sbcunueh/image/upload/v1690658131/11910_n6soga.jpg")',
        }}
      >
        <div className="conatiner pb-5">
          <h1 className="d-flex justify-content-center pt-5">
            eSchool Features
          </h1>
          <p className="d-flex justify-content-center ">
            Get eSchool - Our solution is guaranteed to save your time, reduce
            expenses and boost efficiency.
          </p>
          <div class="row gap-2 justify-content-center mt-5">
            <div class="col-4">
              <div
                class="card text-black"
                style={{ background: "white", opacity: "60%" }}
              >
                <div className="card-body text-start d-flex">
                  <div className="col-md-4">
                    <FaMagic
                      style={{
                        fontSize: "80px",
                        background: "#D4D4D4",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "grey",
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h3>Customization</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iure aut vitae voluptas tenetur. Labore excepturi
                      obcaecati cumque commodi optio, earum voluptate
                      reprehenderit m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div
                class="card text-black"
                style={{ background: "white", opacity: "60%" }}
              >
                <div className="card-body text-start d-flex">
                  <div className="col-md-4">
                    <FaWrench
                      style={{
                        fontSize: "80px",
                        background: "#D4D4D4",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "grey",
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h3>Adaptivity</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iure aut vitae voluptas tenetur. Labore excepturi
                      obcaecati cumque commodi optio, earum voluptate
                      reprehenderit m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 mt-3">
              <div
                class="card text-black"
                style={{ background: "white", opacity: "60%" }}
              >
                <div className="card-body text-start d-flex">
                  <div className="col-md-4">
                    <FaCloudscale
                      style={{
                        fontSize: "80px",
                        background: "#D4D4D4",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "grey",
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h3>Scalability</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iure aut vitae voluptas tenetur. Labore excepturi
                      obcaecati cumque commodi optio, earum voluptate
                      reprehenderit m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 mt-3">
              <div
                class="card text-black"
                style={{ background: "white", opacity: "60%" }}
              >
                <div className="card-body text-start d-flex">
                  <div className="col-md-4">
                    <FaUserLock
                      style={{
                        fontSize: "80px",
                        background: "#D4D4D4",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "grey",
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h3>Security</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iure aut vitae voluptas tenetur. Labore excepturi
                      obcaecati cumque commodi optio, earum voluptate
                      reprehenderit m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          opacity: "90%",
          width: "100%",
          backgroundImage:
            'url("https://res.cloudinary.com/sbcunueh/image/upload/v1690722588/1111_o2bfv6.png")',
        }}
      >
        <div className="conatiner pb-5">
          <h1 className="d-flex justify-content-center text-white pt-5">
            eSchool Audience
          </h1>

          <div class="row col-md-12 justify-content-center mt-5">
            <div class="card" style={{ width: "20rem" }}>
              <img
                class="card-img-top"
                src="https://res.cloudinary.com/sbcunueh/image/upload/v1690721377/admin_staff_sckvwc.jpg"
                alt="Card image cap"
              />
              <div class="card-body text-black">
                <h5 class="card-title text-center">Administration</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-warning">
                  Learn more
                </a>
              </div>
            </div>

            <div class="card" style={{ width: "20rem" }}>
              <img
                class="card-img-top"
                src="https://res.cloudinary.com/sbcunueh/image/upload/v1690721268/Untitled-design-2-1_z58wyc.jpg"
                alt="Card image cap"
              />
              <div class="card-body text-black">
                <h5 class="card-title text-center">Teachers</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-warning">
                  Learn more
                </a>
              </div>
            </div>

            <div class="card" style={{ width: "20rem" }}>
              <img
                class="card-img-top"
                src="https://res.cloudinary.com/sbcunueh/image/upload/v1690721511/istockphoto-1159419939-612x612_ms1xto.jpg"
                alt="Card image cap"
              />
              <div class="card-body text-black">
                <h5 class="card-title text-center">Students</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-warning">
                  Learn more
                </a>
              </div>
            </div>

            <div class="card" style={{ width: "20rem" }}>
              <img
                class="card-img-top"
                src="https://res.cloudinary.com/sbcunueh/image/upload/v1690721633/Tips-for-Parents-Teaching-from-Home_ird4st.jpg"
                alt="Card image cap"
              />
              <div class="card-body text-black">
                <h5 class="card-title text-center">Parents</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-warning">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer
          class="text-white text-center text-md-start"
          style={{
            background: "#004170",
            paddingTop: "100px",
          }}
        >
          <div class="container p-4  justify-contetnt-center">
            <div class="row  justify-contetnt-center">
              <div class="col-lg-12 col-md-12 mb-md-0">
                <h3 class="text-white text-center">eSchool</h3>

                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
              </div>
            </div>
          </div>

          <div
            class="text-center p-5 mt-5"
            style={{ background: " rgba(0, 0, 0, 0.2)" }}
          >
            <span>© 2023 eSchool - All rights reserved</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
