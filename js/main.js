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

    let quicklinks = `
        <a className="text-light mb-2" href="index.html"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
        <a className="text-light mb-2" href="index.html#aboutus"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
        <a className="text-light mb-2" href="icodal.html"><i className="bi bi-arrow-right text-primary me-2"></i>iCodal</a>
        <a className="text-light mb-2" href="index.html#meettheteam"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
        <a className="text-light mb-2" href="journals.html"><i className="bi bi-arrow-right text-primary me-2"></i>Journal</a>
        <a className="text-light" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdGnqu6QiiChc6fWGiMk-EAVwAvSxiLvuNK4Ou-JvxtnMdF-A/viewform"><i className="bi bi-arrow-right text-primary me-2"></i>Join Us</a>
    `;

    $("#quicklinks").replaceWith(quicklinks);

    let menuCode = `
    <!-- Navbar & Carousel Start -->
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
                                <a class="dropdown-item" href="icodal.html">
                                    Summary
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Political and Administrative Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="admincode.html">Administrative Code of 1987</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item icodalname" href="lgc.html">Local Government Code of 1991</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd807.html">Civil Service Decree</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ca63.html">Acquiring and Losing Citizenship (C.A.No. 63)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ca473.html">Revised Naturalization Law </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9139.html">Administrative Naturalization Law</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra530.html">Additional Provisions For Naturalization</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra2630.html">Republic Act No. 2630</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9225.html">Citizenship Retention and Reacquisition Act</a>
                                    </li>    
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8171.html">Republic Act No. 8171</a>
                                    </li>               
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra10590.html">Amending Overseas Voting Act</a>
                                    </li>   
                                    
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8749.html">Clean Air Act</a>
                                    </li>          
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9275.html">Clean Water Act</a>
                                    </li>    
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra7076.html">People Small Scale Mining Act</a>
                                    </li>           
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9175.html">Chain Saw Act</a>
                                    </li>                      
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd705.html">Revised Forestry Code</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd856.html">Sanitation Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd1151.html">Philippine Environmental Policy</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9003.html">Ecological Waste Management Act</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9729.html">Climate Change Act</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd1586.html">Environmental Impact Statement System</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="proc2146.html">Scope of Environmental Impact Statement System</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8550.html">Philippine Fisheries Code</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra7586.html">NIPAS Act</a>
                                    </li>      
                                    <li>
                                        <a class="dropdown-item icodalname" href="bp881.html">Omnibus Election Code</a>
                                    </li>     
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8436.html">Automated Elections System Act</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra7166.html">Synchronized National and Local Elections Act</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8189.html">Voter's Registration Act</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra7941.html">Party-List System Act</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9189.html">Overseas Voting Act</a>
                                    </li>                                                                                                                 
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Taxation  >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="nirc.html">National Internal Revenue Code</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="cmta.html">Customs Modernization and Tariff Act</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item icodalname" href="lgc.html#taxes">Book II Local Government Code</a>
                                    </li>   
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd1931.html">PD 1931, S1984</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="eo93.html">EO 93, S1986</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="rao2-2001.html">Revenue Administrative Order 2-2001</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra1125.html">Court of Tax Appeals Act</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra10963.html">TRAIN Law</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra11534.html">CREATE Law</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra11976.html">Ease of Paying Taxes Act</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="rr0240.html">Revenue Regulation 02-1940</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="rr0179.html">Revenue Regulation 01-1979</a>
                                    </li>     
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9480.html">R.A. No. 9480</a>
                                    </li>  
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra10754.html">R.A. No. 10754</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra11213.html">R.A. No. 11213</a>
                                    </li>                                         
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra11956.html">R.A. No. 11956</a>
                                    </li>    
                                                                                            
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Constitutions >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="MalolosConstitution.html">1899 (Malolos)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="1935Constitution.html">1935</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="1943Constitution.html">1943</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="1973Constitution.html">1973</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="FreedomConstitution.html">1986 (Freedom)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="1987Constitution.html">1987</a>
                                    </li>                                        
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Criminal Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="rpc.html">Revised Penal Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9344.html">Juvenile Justice and Welfare Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra3019.html">R.A. No. 3019 (Anti Graft and Corruption)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra6235.html">R.A. No. 6235 (Anti Hijacking Law)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra7610.html">R.A. No. 7610 (Anti Child Abuse)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8049.html">R.A. No. 8049 (Anti Hazing Act)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9208.html">R.A. No. 9208 (Anti Trafficking in Persons)</a>
                                    </li>                                    
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9745.html">R.A. No. 9745 (Anti Torture Act)</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd1602.html">P.D. No. 1602 (Illegal Gambling)</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9287.html">R.A. No. 9287 (Illegal Numbers Game)</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9165.html">R.A. No. 9165 (Dangerous Drugs Act)</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd1613.html">P.D. No. 1613 (Amending Arson Law)</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9262.html">R.A. No. 9262 (VAWC)</a>
                                    </li> 
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd1829.html">P.D. No. 1829 (Obstruction of Justice)</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Civil Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="civilcode.html">Civil Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="familycode.html">Family Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra11642.html">Domestic Administrative Adoption Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="irrdomesticadoption.html">IRR Domestic Adoption Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra11222.html">Simulated Birth Rectification Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="prd.html">Property Registration Decree</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="condo.html">The Condominium Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="subdivision.html">Subdivision and Condo Buyers Protection Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="maceda.html">Maceda Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="udha.html">Urban Development and Housing Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="water.html">Water Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra7942.html">Philippine Mining Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra11573.html">Republic Act No. 11573</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="pd603.html">Child and Youth Welfare Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ipra.html">Indigenous People Rights Act</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Remedial Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="dojdcn015.html">Rules on Preliminary Investigation and Inquest Proceedings</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="dojdcn028.html">Summary and Expedited Preliminary Investigation</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="crimpro.html">Revised Rules on Criminal Procedure</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="civilpro.html">2019 Revised Rules on Civil Procedure</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="evidence.html">2019 Revised Rules on Evidence</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="specpro.html">Special Proceedings</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="amparo.html">Writ of Amparo</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="habeasdata.html">Writ of Habeas Data</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="bp129.html">Judiciary Reorganization Act of 1980</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="jar.html">Judicial Affidavit Rule</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="notary.html">Rules on Notarial Practice</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="am200704sc.html">Rules on Remote Notarization</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="am030205.html">Rule on Guardianship of Minor</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="am020602sc.html">Rule on Adoption</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="am021111sc.html">Rule on Legal Separation</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="am021110sc.html">Rule on Nullity and Annulment of Marriage</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="childwitness.html">Rule on Examination of Child Witness</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="rulesexpedited.html">Rules on Expedited Procedures</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="elecevid.html">Rules on Electronic Evidence</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="dnaevid.html">Rule on DNA Evidence</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="useofpaper.html">Efficient Use of Paper Rule</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="am210722sc.html">Naturalization of Refugees and Stateless Persons</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="rpec.html">Rules of Procedure for Environmental Cases</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra876.html">The Arbitration Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra9285.html">Alternative Dispute Resolution Act of 2004</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="comelecrules.html">COMELEC Rules of Procedure</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="am021112sc.html">Rule of Provisional Orders</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8369.html">Family Courts Act</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Legal and Judicial Ethics >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="cpra.html">CPRA</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="oath.html">Lawyer's Oath</a>
                                    </li>
                                     <li>
                                        <a class="dropdown-item icodalname" href="codeethics.html">Code of Professional Ethics</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ethics.html">Rules of Court - Ethics</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="judicialethics.html">Code of Judicial Ethics</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Labor and Social Justice >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="labor.html">Labor Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="irrlabor.html">Omnibus Rules Implementing the Labor Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="owwa.html">Migrant Workers and Overseas Filipinos Act of 1995 (As Amended)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="sena.html">Single Entry Approach (SEnA)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra7277.html">Magna Carta for Persons with Disabilities</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="irrowwa.html">Omnibus Rules And Regulations Implementing The Migrant Workers And Overseas Filipinos Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="paternityleave.html">Paternity Leave Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="irrpaternity.html">IRR Paternity Leave Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra10911.html">Anti-Age Discrimination in Employment Act</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item icodalcategory" href="#">
                                    Commercial Law >
                                </a>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a class="dropdown-item icodalname" href="coc.html">Code of Commerce</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="corpcode.html">Revised Corporation Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8293.html">Intellectual Property Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="pca.html">Philippine Competition Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra10173.html">Data Privacy Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="src.html">Securities Regulations Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="nego.html">Negotiable Instruments Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ppsa.html">Personal Property Security Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="truthlending.html">Truth in Lending Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="adra.html">Access Devices Regulation Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="fca.html">Financing Company Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="fria.html">Financial Rehabilitation and Insolvency Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="bulksales.html">Bulk Sales Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="act1508.html">The Chattel Mortgage Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra8791.html">General Banking Law</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra10607.html">The Insurance Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="eo226s1987.html">Omnibus Investment Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra7042.html">Foreign Investment Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra5455.html">R.A. No. 5455</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="eca.html">Electronic Commerce Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="psa.html">Public Service Act</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="secmc82013.html">SEC Memorandum Circular 8 s2013</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="secmc212014.html">SEC Memorandum Circular 21 s2014</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="secmc62016.html">SEC Memorandum Circular 6 s2016</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="secmc142017.html">SEC Memorandum Circular 14 s2017</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="secmc92018.html">SEC Memorandum Circular 9 s2018</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="secmc132019.html">SEC Memorandum Circular 13 s2019</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="secmc232019.html">SEC Memorandum Circular 23 s2019</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="secmc222020.html">SEC Memorandum Circular 22 s2020</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item icodalname" href="ra2382.html">The Medical Act of 1959</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    <a href="journals.html" class="nav-item nav-link">Journals</a>
                    <a href="booth.html" class="nav-item nav-link">Booth</a>
                    <a href="index.html#aboutus" class="nav-item nav-link">About Us</a>
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

    let gtag = `
        <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-319HK34R9S"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-319HK34R9S');
            </script>
    `;

    $("head").prepend(gtag);

    let gsearch = `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body align-items-center justify-content-center">
                    <script async src="https://cse.google.com/cse.js?cx=341b242c50d434cc0">
                    </script>
                    <div class="gcse-search"></div>
                </div>
            </div>
        </div>
    `;

    $('#searchModal').empty();
    $('#searchModal').append(gsearch);

})(jQuery);

