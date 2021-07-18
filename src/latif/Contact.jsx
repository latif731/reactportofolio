export const Contact = () => {
    return (
        <div>
           <div class="contact py-5" data-aos="zoom-in" data-aos-duration="2000" id="contact"> 
          <div class="container-lg py-4">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="section-title text-center">
                  <h2 class="fw-bold mb-5">Contact Me</h2>
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="contact-item d-flex">
                <div class="icon fs-4 text-danger">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="text ms-3">
                   <h3 class="fs-5">Email</h3>
                   <p class="text-muted">platifbudi@gmail.com</p> 
                </div>
              </div>
              <div class="contact-item d-flex">
                <div class="icon fs-4 text-danger">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="text ms-3">
                   <h3 class="fs-5">Watsapp</h3>
                   <p class="text-muted">08155057065</p> 
                </div>
              </div>
              <div class="contact-item d-flex">
                <div class="icon fs-4 text-danger">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="text ms-3">
                   <h3 class="fs-5">Address</h3>
                   <p class="text-muted">Ds.Jatirejo Rt.12/Rw.02 Kec.Wonoasri Kab.Madiun</p> 
                </div>
              </div>
            </div>
            <div class="col-md-7">
            <div class="contact-form">
              <form>
                <div class="row">
                  <div class="col-lg-6 mb-4">
                    <input type="text" placeholder="Your Name" class="form-control form control-lg fs-6 border-0 shadow-sm"></input>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <input type="text" placeholder="Your Email" class="form-control form control-lg fs-6 border-0 shadow-sm"></input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 mb-4">
                    <input type="text" placeholder="Subject" class="form-control form control-lg fs-6 border-0 shadow-sm"></input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 mb-4">
                    <textarea type="text" placeholder="Your Message" class="form-control form control-lg fs-6 border-0 shadow-sm"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <button type="submit" class="btn btn-danger px-3">Send Message</button>
                  </div>
                </div>

              </form>

            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
    )
}