

const showContact=()=>{
    document.getElementById('contactForm').style = "display: inline-flex;";
    document.getElementById('skill').style = "display: none";
    document.getElementById('cont').style = "display: none;";
    document.getElementById('proj').style="display: none;";
    document.getElementById('icoStyle').style.display='none';
    document.getElementById('blogHead').style.display='none';
    document.getElementById('eduBlog').style.display='none';
    
}   
const showMain=()=>{
    document.getElementById('contactForm').style = "display: none;";
    document.getElementById('skill').style = "display: block";
    document.getElementById('cont').style = "display: inline-flex;";
    document.getElementById('proj').style="display: block;";
    document.getElementById('icoStyle').style.display='block';
    document.getElementById('blogHead').style.display='block';
    document.getElementById('eduBlog').style.display='flex';
}

const dayNight=()=>{
  document.querySelector('.page').classList.toggle('body-light');
   
}
