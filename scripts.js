function getValue()
{
  //this is to find out if the code works to this point
  console.log("working")
  // this is to get the data from the form
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  // form validation
  if (day == ""){
    alert("enter valid day");
    return false;
  }else if(day<0 || day>31){
    alert("enter valid day");
     console.log(day);
     return false;
  }else if (day==null){
      alert("enter valid day");
      return false;
  }if(month<0){
    alert("enter valid month");
    return false;
  }else if (month>12) {
    alert("enter valid month");
    return false;
  }else if (month==null) {
    alert("enter valid month");
    return false;
  }else if (month=="") {
    alert("enter valid month");
    return false;
    console.log(month);
  } if(year<1940 ){
    alert("enter valid year");
    return false;
  } if (male!==true && female!==true){
    alert("oops! select gender");
    return false;
  }

  var century =year.slice(0,2);
  // formula for day of birth
  var birthday = Math.floor(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )% 7);
  console.log(birthday);
  // values for names
  var maleNames=["Sunday: Kwasi","Monday: Kwadwo","Tuesday: Kwabena","Wednesday: Kwaku","Thursday:  Yaw",
  "Friday: Kofi","Saturday: Kwame"];
  var femaleNames=["Sunday: Akosua","Monday: Adwoa", "Tuesday: Abenaa", "Wednesday: Akua", "Thursday:  Yaa",
  "Friday: Afua", "Saturday: Ama"];
  var maleImages=["css/AKAN0.jpeg","css/akan1.jpeg"];
  // output male values
  if( birthday==0 && male==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ maleNames[0];
  }else if( birthday==1 && male==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ maleNames[1];
  }else if( birthday==2 && male==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ maleNames[2];
  }else if( birthday==3 && male==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ maleNames[3];
  }else if( birthday==4 && male==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ maleNames[4];
  }else if( birthday==5 && male==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ maleNames[5];
  }else if( birthday==6 && male==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ maleNames[6];
  }
  // output female values
  if( birthday==0 && female==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ femaleNames[0];
  }else if( birthday==1 && female==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ femaleNames[1];
  }else if( birthday==2 && female==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ femaleNames[2];
  }else if( birthday==3 && female==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ femaleNames[3];
  }else if( birthday==4 && female==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ femaleNames[4];
  }else if( birthday==5 && female==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ femaleNames[5];
  }else if( birthday==6 && female==true) {
    document.getElementById("result").innerHTML="Here is your result: "+ femaleNames[6];
  }
  document.getElementById("resetform").reset();
}
