
function getValue()
{
  var male = document.getElementById("male");
  var female= document.getElementById("female");
  if (male.checked==true)
  alert("you checked: " + male.value);
  else if(female.checked==true)
  alert("you checked: " +female.value);

  else
  alert("please select a gender");
}
