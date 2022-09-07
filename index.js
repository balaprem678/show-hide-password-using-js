var show = flase;

function toggle(){
  if (show == true)
  {
    document.querySelector('#pswrd').type = "password";
    document.querySelector('#icon').className = "icofont-eye";
    show = false;
  }
  else{
    document.querySelector('#pswrd').type = "text";
    document.querySelector('#icon').className = "icofont-eye-blocked";
    show = true;
  }
}