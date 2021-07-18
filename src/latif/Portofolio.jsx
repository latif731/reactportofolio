import port1 from '../image/porto1.png';
import port2 from '../image/porto2.png';
import port3 from '../image/porto3.png';
import port4 from '../image/porto4.png';
export const Portofolio = () => {
    return (
        <div>
            <section class="portofolio" id="portofolio">
            <div class="container-lg">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title text-center">
                <h2 class="fw-bold mb-5">My Portofolio</h2>
              </div>
            </div>
            </div>
            </div>
            <div class="row p-5 mt-5 mb-5">
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col" data-aos="zoom-out-down" data-aos-delay="1000" data-aos-duration="1500">
              <div class="card">
                <img src={port1} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Business</h5>
                  <p class="card-text">website business for market</p>
                </div>
              </div>
            </div>
            <div class="col" data-aos="zoom-out-down"  data-aos-delay="1000" data-aos-duration="1500">
              <div class="card">
                <img src={port2} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Course</h5>
                  <p class="card-text">Website for private course at home</p>
                </div>
              </div>
            </div>
            <div class="col" data-aos="zoom-out-down"  data-aos-delay="1000" data-aos-duration="1500">
              <div class="card">
                <img src={port3} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Design</h5>
                  <p class="card-text">Website for interior</p>
                </div>
              </div>
            </div>
            <div class="col" data-aos="zoom-out-down"  data-aos-delay="1000 "data-aos-duration="1500">
              <div class="card">
                <img src={port4} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Education</h5>
                  <p class="card-text">Website for education</p>
                </div>
              </div>
            </div>
            </div>
            </div>

            </section>
        </div>
    )
}