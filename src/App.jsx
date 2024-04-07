import React from 'react'
import NavBar from "./components/NavBar";
import HeadArea from "./components/HeadArea";
import  Feat_Test from "./components/Feat_Test";
import ContentArea from "./components/ContentArea";

import './index.css'

function App() {
  let btnData=[
    {
      text: "Start Bootstrap",
      isBtn:false,
      isnavHead:true,
      icon:"",
    },
    {
      text: "Sign up",
      isBtn:true,
      isnavHead:true,
      icon:"",
    },
  ];
  let headUp=[
    {
      hTxt: "Generate more leads with a professional landing page!",
      // isBtn:false,
      btnTxt:"Submit",
      inTxt:"Email Adaress",
      isHead:true,
      // isInput:false,
    },
  ];

  let headDown=[
    {
      fTxt: "Ready to get started? Sign up now!",
      // isBtn:false,
      isHead:false,
      btnTxt:"Submit",
      inTxt:"Email Adaress",
    },
  ];
  let featureData=[
    {
      Txt: "Fully Responsive",
      // isBtn:false,
      Desc:"This theme will look great on any device, no matter the size!",
      icon:"fa fa-folder fticons",
      isFeature:true,
    },
    {
      Txt: "Bootstrap 5 Ready",
      // isBtn:false,
      Desc:"Featuring the latest build of the new Bootstrap 5 framework!",
      icon:"fa fa-file-text fticons",
      isFeature:true,
    },
    {
      Txt: "Easy to Use",
      // isBtn:false,
      Desc:"Ready to use with your own content, or customize the source files!",
      icon:"fa fa-th-list fticons",
      isFeature:true,
    },
  ];
  let tmData=[  
    {
      Txt: "Margaret E.",
      // isBtn:false,
      Desc:"This is fantastic! Thanks so much guys!",
      icon:"assets/tm.png",
      isFeature:false,
    },
    {
      Txt: "Fred S.",
      // isBtn:false,
      Desc:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
      icon:"assets/tm.png",
      isFeature:false,
    },
    {
      Txt: "Sarah W.",
      // isBtn:false,
      Desc:"Thanks so much for making these free resources available to us!",
      icon:"assets/tm.png",
      isFeature:false,
    },
  ];
  let ContentData=[  
    {
      Id:1,
      Txt: "Fully Responsive Design",
      Desc:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      src:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
      isImgOnly:false,
    },
    {
      Id:2,
      Txt: "Updated For Bootstrap 5",
      // isBtn:false,
      Desc:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      src:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",
      isFeature:false,
    },
    {
      Id:3,
      Txt: "Easy to Use & Customize",
      // isBtn:false,
      Desc:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      src:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",
      isFeature:false,
    },
  ];
  let navDown=[
    {
      text:"About",
      isBtn:false,
      isnavHead:false,
      icon:"",
      islast:false,
      isIcon:false,
    },
    {
      text:"Contact",
      isBtn:false,
      isnavHead:false,
      icon:"",
      islast:false,
      isIcon:false,
    },
    {
      text:"Terms of Use",
      isBtn:false,
      isnavHead:false,
      icon:"",
      islast:false,
      isIcon:false,
    },
    {
      text:"Privacy Policy",
      isBtn:false,
      isnavHead:false,
      icon:"",
      islast:true,
      isIcon:false,
    },
  ];
  let navIcon=[
    {
      isBtn:false,
      isnavHead:false,
      icon:"fa fa-facebook navIconStyle",
      islast:false,
      isIcon:true,
    },
    {
      isBtn:false,
      isnavHead:false,
      icon:"fa fa-twitter navIconStyle",
      islast:false,
      isIcon:true,
    },
    {
      isBtn:false,
      isnavHead:false,
      icon:"fa fa-instagram navIconStyle",
      islast:false,
      isIcon:true,
    },
  ];
  return (
    <>
      <div className="LandingAll">
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
          {
              btnData.map((navData) => {
                return <NavBar navdetails={navData}/>
              })
          }
          </div>
        </nav>
        {/* Header area*/}
        <header className="headImg">
          <div className='container position-relative'>
          {
            headUp.map((hfData) => {
              return <HeadArea headdetails={hfData}/>
            })
          }
          </div>
        </header>
        <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {
                featureData.map((ftData) => {
                  return <Feat_Test ftdetails={ftData}/>
                })
            }
        </div></div>
        </section>
        <section className="showcase">
        <div className="container-fluid p-0">
            {
                ContentData.map((caData) => {
                  return <ContentArea contentdetails={caData}/>
                })
            }
        =</div>
        </section>
        <section className="testimonials text-center bg-light">
        <div className="container">
          <div className="row">
          <h2 className="mb-5">What people are saying...</h2>
            {
                tmData.map((testData) => {
                  return <Feat_Test ftdetails={testData}/>
                })
            }
        </div></div>
        </section>
        <header className="headImg">
          <div className='container position-relative'>
          {
            headDown.map((hfData) => {
              return <HeadArea headdetails={hfData}/>
            })
          }
          </div>
        </header>
        <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                      <ul class="list-inline mb-2">
                          {
                              navDown.map((navDData) => {
                                return <NavBar navdetails={navDData}/>
                              })
                          }  
                      </ul>
                      <p class="text-muted small mb-4 mb-lg-0">© Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                          {
                              navIcon.map((navIcons) => {
                                return <NavBar navdetails={navIcons}/>
                              })
                          } 
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
      </div>
      </>
  )
}

export default App
