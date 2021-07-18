import SDN from '../image/Tutwuri-Handayani-SD.png';
import SMP from '../image/smp wonoasri.png';
import SMA from '../image/SMAN 1 MEJAYAN.png';
export const Education =() => {
    return (
        <div>
            <section class= "education py-5" id="education">
            <div class="container-lg py-4 ">
            <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title text-center">
                <h2 class="fw-bold mb-5">Education</h2>
              </div>
            </div>
            </div>
            <div class="row text-center">
            <div class="col-md-6 col-lg-4">
            <div class="activity-item shadow-sm p-4 rounded-3 bg-white">
            <div class="icon my-3 text-danger fs-2" data-aos="flip-left"data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <img src={SDN} alt=""></img>
            <h3 class="fs-5 py-2">SDN Jatirejo</h3>
            <p class="text-muted">2002 - 2008 </p>
            </div>
            </div>
            </div>
            <div class="col-md-6 col-lg-4">
            <div class="activity-item shadow-sm p-4 rounded-3 bg-white">
            <div class="icon my-3 text-danger fs-2" data-aos="flip-right"data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <img src={SMP} alt=""></img>
            <h3 class="fs-5 py-2">SMPN 1 Wonoasri</h3>
            <p class="text-muted">2008 - 2011 </p>
            </div>
            </div>
            </div>
            <div class="col-md-6 col-lg-4">
            <div class="activity-item shadow-sm p-4 rounded-3 bg-white">
            <div class="icon my-3 text-danger fs-2" data-aos="flip-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <img src={SMA} alt=""></img>
            <h3 class="fs-5 py-2">SMAN 1 Mejayan</h3>
            <h5 class="text-muted">Social class</h5>
            <p class="text-muted">2011 - 2014 </p>
            </div>
            </div>
            </div>

            </div>
            
            </div>
            
            </section>
        </div>
    )
}