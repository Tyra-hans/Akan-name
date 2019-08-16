
function getValue()
{
  console.log("working")
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;

  if(day<0 || day>31|| day.checked ==false){
    alert("enter valid day");
  }else if(month<0 || month>31 ||month.checked==false){
    alert("enter valid month");
  }else if(year<1950 ){
    alert("enter valid year");
  }
  else if (male.checked ==false && female.checked ==false) {
    alert("oops! select gender")
  }
  var daysOfTheWeek = ["Sunday","Monday" , "Tuesday","Wednesday", "Thursday" ,"Friday", "Saturday" ];
  var maleNames= ["Kwasi" ,"Kwadwo","Kwabena", "Kwaku" , "Yaw","Koffi", "Kwame"];
  var femaleNames =["Akosua","Adwoa","Abenaa","Akua","yaa", "Afua", "Ama"];
  var century =year.slice(0,2);
  var birthday = Math.floor(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )% 7)
  console.log(birthday);
  if (male==true && birthday==0) {
    


  }

}

  //else if (month<0 || month>32|| month.checked!==true || month=NaN)
  //alert("enter valid month");
