function compute()
{
    p = parseInt(document.getElementById("principal").value);

    if (p <= 0 || isNaN(p)) {
      alert("Principal should be a positive value!");
      document.getElementById("principal").focus();
    }
    else {
      r = parseFloat(document.getElementById("rate-value").value);
      y = parseInt(document.getElementById("years").value);
      document.getElementById("r1").innerHTML = p;
      document.getElementById("r2").innerHTML = r + "%";
      document.getElementById("r4").innerHTML = 2020 + y;

      result = (p * y * r)/100

      document.getElementById("r3").innerHTML = result;

      document.getElementById("result").style.display = "inline-block";
    }
}

function updateNumber(value) {
  document.getElementById("rate-value").value = value * 0.2;
}

function updateSlider(value) {
  document.getElementById("rate").value = value / 0.2;
}
        