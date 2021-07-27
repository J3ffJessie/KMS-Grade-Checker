function calculateGrade()
{
   let avg=document.getElementById("currentGrade").value;
   let total=document.getElementById("gradeWanted").value;
   let weight=document.getElementById("weight0").value;
   let final=(total-avg*(100.0-weight)/100.0)/(weight/100.0);
   final = final.toFixed(2);
   document.getElementById("final0").value=final;
   let p=final;
   if( p>100 ) p=100;
};