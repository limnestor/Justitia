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
    <marquee><b style="color: red;">This website is still under construction and many contents are still work in progress.  No guarantee or warranty provided.</b></marquee>

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
                                    Administrative Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="admincode.html">Administrative Code of 1987</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item" href="lgc.html">Local Government Code of 1991</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="pd807.html">Civil Service Decree</a>
                                    </li>                                     
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Taxation  >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item" href="nirc.html">National Internal Revenue Code</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item" href="cmta.html">Customs Modernization and Tariff Act</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item" href="lgc.html#taxes">Book II Local Government Code</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item" href="pd1931.html">PD 1931, S1984</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item" href="eo93.html">EO 93, S1986</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item" href="rao2-2001.html">Revenue Administrative Order 2-2001</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item" href="ra1125.html">Court of Tax Appeals Act</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item" href="ra10963.html">TRAIN Law</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item" href="ra11534.html">CREATE Law</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item" href="ra11976.html">Ease of Paying Taxes Act</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item" href="rr0240.html">Revenue Regulation 02-1940</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item" href="rr0179.html">Revenue Regulation 01-1979</a>
                                    </li>     
                                    <li>
                                        <a class="dropdown-item" href="ra9480.html">R.A. No. 9480</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item" href="ra10754.html">R.A. No. 10754</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra11213.html">R.A. No. 11213</a>
                                    </li>                                         
                                    <li>
                                        <a class="dropdown-item" href="ra11956.html">R.A. No. 11956</a>
                                    </li>                                                            
                                </ul>
                            </li>
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
                                        <a class="dropdown-item" href="ra9344.html">Juvenile Justice and Welfare Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra3019.html">R.A. No. 3019 (Anti Graft and Corruption)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra6235.html">R.A. No. 6235 (Anti Hijacking Law)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra7610.html">R.A. No. 7610 (Anti Child Abuse)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra8049.html">R.A. No. 8049 (Anti Hazing Act)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra9208.html">R.A. No. 9208 (Anti Trafficking in Persons)</a>
                                    </li>                                    
                                    <li>
                                        <a class="dropdown-item" href="ra9745.html">R.A. No. 9745 (Anti Torture Act)</a>
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
                                    <li>
                                        <a class="dropdown-item" href="prd.html">Property Registration Decree</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="condo.html">The Condominium Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="subdivision.html">Subdivision and Condo Buyers Protection Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="maceda.html">Maceda Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="udha.html">Urban Development and Housing Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="water.html">Water Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra7942.html">Philippine Mining Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra8293.html">Intellectual Property Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra11573.html">REPUBLIC ACT NO. 11573</a>
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
                                        <a class="dropdown-item" href="evidence.html">2019 Revised Rules on Evidence</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="specpro.html">Special Proceedings</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="bp129.html">Judiciary Reorganization Act of 1980</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="jar.html">Judicial Affidavit Rule</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="childwitness.html">Rule on Examination of Child Witness</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="rulesexpedited.html">Rules on Expedited Procedures</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="elecevid.html">Rules on Electronic Evidence</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="dnaevid.html">Rule on DNA Evidence</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="useofpaper.html">Efficient Use of Paper Rule</a>
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
                                    Labor and Social Justice>
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
                                        <a class="dropdown-item" href="sena.html">Single Entry Approach (SEnA)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra7277.html">Magna Carta for Persons with Disabilities</a>
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
                                        <a class="dropdown-item" href="pca.html">Philippine Competition Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="src.html">Securities Regulations Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="nego.html">Negotiable Instruments Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ppsa.html">Personal Property Security Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="truthlending.html">Truth in Lending Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="adra.html">Access Devices Regulation Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="fca.html">Financing Company Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="fria.html">Financial Rehabilitation and Insolvency Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="bulksales.html">Bulk Sales Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="act1508.html">The Chattel Mortgage Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra8791.html">General Banking Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="ra10607.html">The Insurance Code</a>
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
                    <a href="index.html#aboutus" class="nav-item nav-link">About Us</a>
                    <a href="journals.html" class="nav-item nav-link">Journals</a>
                    <a href="booth.html" class="nav-item nav-link">Booth</a>
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
        nav: false,
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

