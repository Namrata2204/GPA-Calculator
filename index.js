function add() {
  var course = $("#course").val();
  var grade = $("#grade").val();
  var credits = $("#credits").val();
  var entercourse = "<tr><td>" + course + "</td><td>" + grade + "</td><td>"+ credits +"</td></tr>";
  $("table tbody").append(entercourse);
  $("#course").val("");
  $("#grade").val("-");
  $("#credits").val("0");

}

function calculate() {
  var sum=0;
  var p=0;
  var len=$("table tbody tr td").length/3;
  var total=0;
  for(var k=1;len>0;len--)
  {
    var pointer=$("table tbody tr td")[k].innerHTML;
    var cred=parseInt($("table tbody tr td")[k+1].innerHTML);
    if(pointer=="A+"){
      p=10;
    }
    else if (pointer=="A") {
      p=9;
    }
    else if (pointer=="B") {
      p=8;
    }
    else if (pointer=="C") {
      p=7;
    }
    else if (pointer=="D") {
      p=6;
    }
    else if (pointer=="E") {
      p=5;
    }
    else if (pointer=="F") {
      p=0;
    }
    sum=sum+(p*cred);
    k=k+3;
    total=total+cred;
  }
  var answer=sum/total;
  answer=answer.toFixed(3).toString();
  $(".ans").val(answer);

}
