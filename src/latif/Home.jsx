import latif from '../image/latif.png'
export const Home = () => {
    return(
        <div>
        <section class="home py-5" id="home">
          <div class="container-lg">
            <div class="row min-vh-100 align-items-center align-content-center">
                <div class="col-md-6 mt-5 mt-md-0">
                    <div class="home-img text-center">
                    <img class="w-75 mb-3" src={latif} alt="profile img"/>
                    </div>
                    
                    
                </div>
                <div class="col-md-6 mt-5 mt-md-0 order-md-first" data-aos="fade-down">
                    <div class="home-text">
                     <p class="text-muted mb-1">Hello i'm</p>
                    <h1 class="text-danger text-uppercase fs-1 fw-bold">Front End Developer</h1>
                    <h2 class="fs-4">Latif Budi Pamungkas</h2>
                    <p class="mt-4 text-muted">May I introduce my self my name Latif Budi Pamungkas,I was born in madiun on April 24, 1996 im 25th year old and i interested about art and design. </p>
                    <a href="#portofolio" class="btn btn-danger px-3 mt-3">My Work</a>
                    </div>
                    
                </div>
            </div>
          </div>
         </section>  
        </div>

    );
};