// Make A Navbar in HTML
let navbarAllWeb = `
        <div class="container gap-2 py-1">
            <a class="navbar-brand fs-3 fw-bold text-uppercase" href="index.html">Mentor</a>
            <button class="navbar-toggler border-0 order-1" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars fs-4"></i>
            </button>
            <div class="collapse navbar-collapse full-screen-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto my-4 my-lg-0 align-items-center  gap-3">
                    <li class="nav-item">
                        <a class="nav-link" id="index" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="about" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="courses" href="courses.html">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="trainers" href="trainers.html">Trainers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="events" href="events.html">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pricing" href="pricing.html">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <a href="courses.html" class="btn start-nav rounded-5 text-white ms-auto ms-lg-3" >Get Start</a>
        </div>
`;
document.getElementById("nav").innerHTML = navbarAllWeb;


// Make a Footer in HTML
let footer = `
    <div class="container py-5">
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6 footer-about">
                        <h6>Mentor</h6>
                        <p>A108 Adam Street <br> New York, NY 535022 </p>
                        <ul>
                            <li>
                                <span>Phone:</span> +1 5589 55488 55
                            </li>
                            <li>
                                <span>Email:</span> info@example.com
                            </li>
                        </ul>
                        <ul class="d-flex align-items-center gap-3 links">
                            <li>
                                <a href="#" title="#">
                                    <i class="fab fa-twitter circle-icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="#">
                                    <i class="fab fa-facebook circle-icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="#">
                                    <i class="fab fa-instagram circle-icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="#">
                                    <i class="fab fa-linkedin circle-icon"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links">
                        <h6>Our Services</h6>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-12 footer-newsletter">
                        <h6>Our Newsletter</h6>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                        <form>
                            <div class="newsletter-form">
                                <input type="email" name="email" placeholder="info@example.com" required="">
                                <input type="submit" value="Subscribe">
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <div class="container copyright text-center py-4">
                <p>© Copyright <span class="px-1 fw-bold">Bootslander</span> All Rights Reserved </p>
                <div class="credits">
                    Designed by <a href="#">BootstrapMade</a>
                </div>
            </div>
`;

document.getElementById("footer").innerHTML = footer;


// Change Icon
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const icon = this.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

//  Animation scroll
AOS.init({
  duration: 1000,
  delay: 200,
  once: false,
  mirror: true,
  easing: "ease-in-out",
});
