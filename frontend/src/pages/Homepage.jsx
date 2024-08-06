import React from 'react';
import Header from '../components/Header';
import Contactus from '../components/Contactus';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Homepage.css';
import carImage1 from '../assets/images/slider-image-1-1920x700.jpg';
import carImage2 from '../assets/images/slider-image-2-1920x700.jpg';
import carImage3 from '../assets/images/slider-image-3-1920x700.jpg';

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="container mt-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={carImage1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={carImage2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={carImage3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="jumbotron mt-5">
          <h1 className="display-4">RefubredRides.com</h1>
          <p className="lead">Your one-stop destination for buying and selling cars.</p>
          <hr className="my-4" />
          <p>Whether you're looking to buy a new car or sell your current one, our platform offers a seamless experience.</p>
          <div className="mt-4">
            <a href="/buy" className="btn btn-primary btn-lg mr-3">View Cars for Sale</a>
            <a href="/sell" className="btn btn-success btn-lg ml-3">Post Your Car for Sale</a>
          </div>
        </div>

        <div className="mt-5">
          <h2>Why Choose Us?</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Wide selection of cars from trusted sellers</li>
            <li className="list-group-item">Easy and secure transaction process</li>
            <li className="list-group-item">Detailed car listings with multiple images</li>
            <li className="list-group-item">Responsive customer support</li>
          </ul>
        </div>

        <div className="mt-5">
          <h2>Our Car Brands</h2>
          <div className="row">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand, index) => (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt={brand} />
                  <div className="card-body">
                    <h5 className="card-title">{brand}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Contactus />
      </div>
    </div>
  );
};

export default HomePage;
