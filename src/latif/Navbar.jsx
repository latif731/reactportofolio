export const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-light fixed-top bg-light shadow-sm">
        <div class="container-lg">
          <a class="navbar-brand text-danger fw-bold fs-4" href="#home">Latif</a>
          <div class="dropdown">
            <button class="btn btn-secondary btn-danger px-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="uil uil-bars"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#home">Home</a></li>
              <li><a class="dropdown-item" href="#about">About me</a></li>
              <li><a class="dropdown-item" href="#education">Education</a></li>
              <li><a class="dropdown-item" href="#skill">Skill</a></li>
              <li><a class="dropdown-item" href="#portofolio">Portofolio</a></li>
              <li><a class="dropdown-item" href="#myslide">My slide</a></li>
              <li><a class="dropdown-item" href="#contact">Cotact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}