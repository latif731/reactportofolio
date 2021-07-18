
import { Navbar } from './latif/Navbar';
import { Home } from './latif/Home';
import { About } from './latif/About';
import { Skill } from './latif/Skill';
import { Education } from './latif/Education';
import { Portofolio } from './latif/Portofolio';
import { Slide } from './latif/Slide'; 
import { Contact } from './latif/Contact';
import { Footer } from './latif/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import 'bootstrap';
import './latif.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);
  return (
    <div>
          <head>
            <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />"
    <link rel ="stylesheet" href="css/font-awesome.min.css"/>
    <link rel ="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/latif.css"/>
    <title>Document</title>
        </head>
      < Navbar />
      < Home />
      < About />
      < Skill />
      < Education />
      < Portofolio />
      < Slide />
      < Contact />
      < Footer />
    </div>
  );
}

export default App;
