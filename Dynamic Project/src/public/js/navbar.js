function navbar(){
    return `
        <section id="brandLogo">
            <img id="huberbergMenu" src="https://internshala.com/static/images/icons/hamburger-menu-key-new.svg" alt="menu">
            <img id="intershalaLogo" src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="brandLogo">
        </section>
        <section id="services">
            <ul>
                <li>
                    <span>Internships<img id="upDownArrow" src="/images/icons/down-arrow-solid-24.png" alt="dropDownArrow"></span>
                    <ul>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Location</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?work_form_home=work_form_home">Work From Home</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Bangalore">Internship in Bangalore</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Delhi">Internship in Delhi</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Pune">Internship in Pune</a></li>
                            </ul>
                        </li>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Profile</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul">Computer Science Internship</li>
                                <li class=" navbar_ul_ul_ul">Marketing Internship</li>
                                <li class=" navbar_ul_ul_ul">Finance Internship</li>
                            </ul>
                        </li>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Category</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul">Engineering Internship</li>
                                <li class=" navbar_ul_ul_ul">MBA Internship</li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?part_time=true">Part-Time Jobs/Internship</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <span>Online Trainings</span><span class="hotText">OFFER</span><img id="upDownArrow" src="/images/icons/down-arrow-solid-24.png" alt="dropDownArrow">
                    <ul>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Programming</p>
                            <ul id="navbar_nested_dropDown">
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?work_form_home=work_form_home">Web Development</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Bangalore">Ethical Hacking</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Delhi">Core Java</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Pune">Blockchain</a></li>
                            </ul>
                        </li>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Business & Management</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul">Digital Marketing</li>
                                <li class=" navbar_ul_ul_ul">Advance Excel</li>
                                <li class=" navbar_ul_ul_ul">Business Communication Skills</li>
                            </ul>
                        </li>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Core Engineering</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul">AutoCAD</li>
                                <li class=" navbar_ul_ul_ul">Autocad 3D</li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?part_time=true">Fusion 360</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>Fresher Jobs</li>
            </ul>
            <ul id="login_btn">
                <li><button id="logIn_button">Login</button></li>
            </ul>
            <ul id="register_btn">
                <li>
                    <span id="register_button">Register<img id="upDownArrow" src="/images/icons/down-arrow-solid-24.png" alt="dropDownArrow"></span>
                    <ul>
                        <li class=" navbar_ul_ul_ul" id="register_as_student">As a student</li>
                        <li class=" navbar_ul_ul_ul" id="register_as_employer">As an employer</li>
                    </ul>
                </li>
            </ul>
        </section>
`
}
function huberberg(){
    return `<div id="huberberg">
    <ul>
        <li>Internships</li>
        <li>Online Trainings<span class="hotText">OFFER</span></li>
        <li>WFH Internships</li>
        <li>Fressher Jobs</li>
        <li>Contact US</li>
    </ul>
    <div></div>
    <ul>
        <li>Register - As a Student</li>
        <li>Register - As an Employer</li>
        <li><button id="huberbergLogin_button">Login</button></li>
    </ul>
</div>`
}