import slide1 from '../image/frontend1.png'
import slide2 from '../image/frontend2.jpg'
import slide3 from '../image/frontend3.jpg'
export const Slide = () => {
    return (
        <div>
        <div class="container-fluid carousel-container py-5" id="myslide">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <h2 class="fw-bold mb-5">My Slide</h2>
            </div>
          </div>
      </div>
        <div class="container">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slide1} class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={slide2} class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={slide3} class="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        </div>
        </div>
    )
}