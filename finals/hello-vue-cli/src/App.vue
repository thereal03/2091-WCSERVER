<template>

  <div id="app">

<div class="resume">
   <div class="resume_left">
     <div class="resume_profile">
       <img src="./assets/daryll.jpg" alt="profile_pic">
     </div>
     <div class="resume_content">
       <div class="resume_item resume_info">
         <div class="title">
           <p class="bold">Daryll Medina</p>
           <p class="regular">Information Web Developer</p>
         </div>
<ul>
           <li>
             <div class="icon">
               <i class="fas fa-map-signs"></i>
             </div>
             <div class="data">
               San Fernando, Pampanga <br /> Philippines
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-mobile-alt"></i>
             </div>
             <div class="data">
               0916-665-4688
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-envelope"></i>
             </div>
             <div class="data">
               daryllmedina6@gmail.com
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-github"></i>
             </div>
             <div class="data">
               Daryll Medina (thereal03)
             </div>
           </li>
         </ul>
       </div>
       <div class="resume_item resume_skills">
         <div class="title">
           <p class="bold">skill's</p>
         </div>
         <ul>
           <li>
             <div class="skill_name">
               HTML
             </div>
             <div class="skill_progress">
               <span style="width: 80%;"></span>
             </div>
             <div class="skill_per">80%</div>
           </li>
           <li>
             <div class="skill_name">
               CSS
             </div>
             <div class="skill_progress">
               <span style="width: 70%;"></span>
             </div>
             <div class="skill_per">70%</div>
           </li>
           <li>
             <div class="skill_name">
               Python
             </div>
             <div class="skill_progress">
               <span style="width: 90%;"></span>
             </div>
             <div class="skill_per">90%</div>
           </li>
           <li>
             <div class="skill_name">
               JS
             </div>
             <div class="skill_progress">
               <span style="width: 60%;"></span>
             </div>
             <div class="skill_per">60%</div>
           </li>
           <li>
             <div class="skill_name">
               Java
             </div>
             <div class="skill_progress">
               <span style="width: 88%;"></span>
             </div>
             <div class="skill_per">88%</div>
           </li>
         </ul>
       </div>
       <div class="resume_item resume_social">
         <div class="title">
           <p class="bold">Social</p>
         </div>
         <ul>
           <li>
             <div class="icon">
               <i class="fab fa-facebook-square"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Facebook</p>
               <p>@darylltimothy.medina</p>
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-youtube"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Youtube</p>
               <p>@daryllmedina2956</p>
             </div>
           </li>
         </ul>
       </div>
     </div>
  </div>
  <div class="resume_right">
    <div class="resume_item resume_about">
        <div class="title">
           <p class="bold">Objective</p>
         </div>
        <p>To obtain a challenging position in a dynamic organization where I can utilize my skills and experience to contribute to the company's growth and success, while also furthering my professional development.</p>
    </div>
    <div class="resume_item resume_work">
        <div class="title">
           <p class="bold">Education</p>
         </div>
        <ul>
            <li>
                <div class="date">2009 - 2015</div> 
                <div class="info">
                     <p class="semi-bold">St. Ann Colleges</p> 
                  <p>Elementary School</p>
                </div>
            </li>
            <li>
              <div class="date">2015 - 2021</div>
              <div class="info">
                     <p class="semi-bold">Holy Angel University</p> 
                  <p>Junior and Senior High School</p>
                </div>
            </li>
            <li>
              <div class="date">2021 - Present</div>
              <div class="info">
                     <p class="semi-bold">Holy Angel University</p> 
                  <p>Bachelor of Science in Information Technology<br></p>
                </div>
            </li>
        </ul>
    </div>
<div class="resume_item resume_about">
        <div class="title">
           <p class="bold">Training and Seminars</p>
         </div>
        <p>- Cicso Network Administration<br>- Red Hat Academy Linux<br>- Web Development Training</p>
    </div>
<div class="resume_item resume_about">
        <div class="title">
           <p class="bold">Technologies</p>
         </div>
        <p>- Computer Literacy<br>- Knowledge in basic coding<br></p>
    </div>
    <div class="resume_item resume_about">
        <div class="title">
           <p class="bold">Skills</p>
         </div>
        <p>- Problem-solving abilities<br>- Multitasking<br>- Adaptability</p>
    </div>
  </div>
</div>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Montserrat", sans-serif;
}

body {
  background: #585c68;
  font-size: 14px;
  line-height: 22px;
  color: #555555;
}

.bold {
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
}

.semi-bold {
  font-weight: 500;
  font-size: 16px;
}

.resume {
  width: 800px;
  height: auto;
  display: flex;
  margin: 50px auto;
}

.resume .resume_left {
  width: 280px;
  background: #0d6788;
}

.resume .resume_left .resume_profile {
  width: 100%;
  height: 280px;
}

.resume .resume_left .resume_profile img {
  width: 100%;
  height: 100%;
}

.resume .resume_left .resume_content {
  padding: 0 25px;
}

.resume .title {
  margin-bottom: 20px;
}

.resume .resume_left .bold {
  color: #fff;
}

.resume .resume_left .regular {
  color: #b1eaff;
}

.resume .resume_item {
  padding: 25px 0;
  border-bottom: 2px solid #002d3d;
}

.resume .resume_left .resume_item:last-child,
.resume .resume_right .resume_item:last-child {
  border-bottom: 0px;
}

.resume .resume_left ul li {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.resume .resume_left ul li:last-child {
  margin-bottom: 0;
}

.resume .resume_left ul li .icon {
  width: 35px;
  height: 35px;
  background: #fff;
  color: #043a4e;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 16px;
  position: relative;
}

.resume .icon i,
.resume .resume_right .resume_hobby ul li i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.resume .resume_left ul li .data {
  color: #b1eaff;
}

.resume .resume_left .resume_skills ul li {
  display: flex;
  margin-bottom: 10px;
  color: #b1eaff;
  justify-content: space-between;
  align-items: center;
}

.resume .resume_left .resume_skills ul li .skill_name {
  width: 25%;
}

.resume .resume_left .resume_skills ul li .skill_progress {
  width: 60%;
  margin: 0 5px;
  height: 5px;
  background: #009fd9;
  position: relative;
}

.resume .resume_left .resume_skills ul li .skill_per {
  width: 15%;
}

.resume .resume_left .resume_skills ul li .skill_progress span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
}

.resume .resume_left .resume_social .semi-bold {
  color: #fff;
  margin-bottom: 3px;
}

.resume .resume_right {
  width: 520px;
  background: #c8dafc;
  padding: 25px;
}

.resume .resume_right .bold {
  color: #043a4e;
}

.resume .resume_right .resume_work ul,
.resume .resume_right .resume_education ul {
  padding-left: 40px;
  overflow: hidden;
}

.resume .resume_right ul li {
  position: relative;
}

.resume .resume_right ul li .date {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
}

.resume .resume_right ul li .info {
  margin-bottom: 20px;
}

.resume .resume_right ul li:last-child .info {
  margin-bottom: 0;
}

.resume .resume_right .resume_work ul li:before,
.resume .resume_right .resume_education ul li:before {
  content: "";
  position: absolute;
  top: 5px;
  left: -25px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 2px solid #043a4e;
}

.resume .resume_right .resume_work ul li:after,
.resume .resume_right .resume_education ul li:after {
  content: "";
  position: absolute;
  top: 14px;
  left: -21px;
  width: 2px;
  height: 115px;
  background: #043a4e;
}

.resume .resume_right .resume_hobby ul {
  display: flex;
  justify-content: space-between;
}

.resume .resume_right .resume_hobby ul li {
  width: 80px;
  height: 80px;
  border: 2px solid #043a4e;
  border-radius: 50%;
  position: relative;
  color: #043a4e;
}

.resume .resume_right .resume_hobby ul li i {
  font-size: 30px;
}

.resume .resume_right .resume_hobby ul li:before {
  content: "";
  position: absolute;
  top: 40px;
  right: -52px;
  width: 50px;
  height: 2px;
  background: #043a4e;
}

.resume .resume_right .resume_hobby ul li:last-child:before {
  display: none;
}
</style>
