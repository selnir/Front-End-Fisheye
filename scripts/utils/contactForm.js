const formData = document.querySelectorAll(".formData");
const form=document.querySelector("form");

const unvalid_first= document.querySelector(".unvalid_first");
const unvalid_family= document.querySelector(".unvalid_family");
const unvalid_email= document.querySelector(".unvalid_email");
const unvalid_msg= document.querySelector(".unvalid_msg");


var firstname=document.forms["reserve"].elements["first"];
var familyname=document.forms["reserve"].elements["last"];
var e_mail=document.forms["reserve"].elements["email"];
var msg=document.forms["reserve"].elements["Msg"];
var idphoto=document.forms["reserve"].elements["idphoto"];




function displayModal() {
    const modal = document.getElementById("contact_modal");
    const body=document.querySelector("body");
    const closebtn=document.getElementById("close_modal");
	  modal.style.display = "block";
    unvalid_first.style.display="none";
    unvalid_family.style.display="none";
    unvalid_email.style.display="none";
    unvalid_msg.style.display="none";

    closebtn.focus();
  
  }


function closeModal() {
    const modal = document.getElementById("contact_modal");
    const body_modal=document.querySelector("body");

    modal.style.display = "none";
    document.forms["reserve"].reset();


}
function validate(){

    //general test of the cheking form ( name email etc)
      
    
      if (((checkfirst(firstname) & checkfam (familyname) &  checkemail(e_mail) & checkmsg(msg)) == true))
      {
        console.log(firstname.value);
        console.log(familyname.value);
        console.log(e_mail.value);
        console.log(msg.value);
        idphoto.value=getIDphotographer();
        return true;
      }
      else {return false;}

    }
    //check of the fisrtname
    function checkfirst(arg)
    {
      if (arg.value.length<2)
      {
        unvalid_first.style.display="block";
        return false;
      }
      else ((arg.value.length>2))
      {    
        unvalid_first.style.display="none";
    
        return true;
      }
    }
    //check of the family name
    function checkfam(arg)
    {
      if (arg.value.length<2)
      {
        unvalid_family.style.display="block";
        return false;
    
      }
      else ((arg.value.length>2))
      {    
        unvalid_family.style.display="none";
        return true;
      }
    }

    //check email if the form
    function checkemail(arg){
    
      var reg=/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    
      if (reg.test(arg.value)==false)
      {
        unvalid_email.style.display="block";
        return false;
      }
      else{
        unvalid_email.style.display="none";
        return true;
    
       }
    }
   function checkmsg(arg){

    if (!arg.value.replace(/\s+/, '').length)
    {
      unvalid_msg.style.display="block";
      return false;

    }else
    {    
      
    unvalid_msg.style.display="none";
    return true;

    }
    }