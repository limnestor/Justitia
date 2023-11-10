(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    //$(window).on("load", function () {

    let menuCode = `<!-- Navbar & Carousel Start -->
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 navbar-purple-background">
            <a href="index.html" class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Justitia</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link">Home</a>

                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">iCodal</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="#">
                                    Constitutions >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="MalolosConstitution.html">1899 (Malolos)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="1935Constitution.html">1935</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="1973Constitution.html">1973</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="FreedomConstitution.html">1986 (Freedom)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="1987Constitution.html">1987</a>
                                    </li>                                        
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Criminal Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="rpc.html">Revised Penal Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="1973Constitution.html">Special</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Civil Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="civilcode.html">Civil Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="familycode.html">Family Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra11642.html">Domestic Adoption Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="irrdomesticadoption.html">IRR Domestic Adoption Act</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Remedial Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="crimpro.html">Revised Rules on Criminal Procedure</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="civilpro.html">2019 Revised Rules on Civil Procedure</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="bp129.html">Judiciary Reorganization Act of 1980</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Legal and Judicial Ethics >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="cpra.html">CPRA</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="oath.html">Lawyer's Oath</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Labor >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="labor.html">Labor Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="irrlabor.html">Omnibus Rules Implementing the Labor Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="owwa.html">Migrant Workers and Overseas Filipinos Act of 1995 (As Amended)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="irrowwa.html">Omnibus Rules And Regulations Implementing The Migrant Workers And Overseas Filipinos Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="paternityleave.html">Paternity Leave Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="irrpaternity.html">IRR Paternity Leave Act</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Commercial Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="corpcode.html">Revised Corporation Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="secmc82013.html">SEC Memorandum Circular 8 s2013</a>
                                    </li>
                                     <li>
                                        <a class="dropdown-item" href="secmc212014.html">SEC Memorandum Circular 21 s2014</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="secmc62016.html">SEC Memorandum Circular 6 s2016</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="secmc142017.html">SEC Memorandum Circular 14 s2017</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="secmc92018.html">SEC Memorandum Circular 9 s2018</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="secmc132019.html">SEC Memorandum Circular 13 s2019</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="secmc232019.html">SEC Memorandum Circular 23 s2019</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="secmc222020.html">SEC Memorandum Circular 22 s2020</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                    <a href="#aboutus" class="nav-item nav-link">About Us</a>
                    <a href="service.html" class="nav-item nav-link">Journals</a>
                    <a href="gai.html" class="nav-item nav-link">Ask MechaCounsel</a>
                </div>
                <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal"
                         data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
            </div>
        </nav>
    </div>
    <!-- Navbar & Carousel End -->`;

    $("#menuHere").replaceWith(menuCode);

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

