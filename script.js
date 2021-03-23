function compute()
{
    p = parseInt(document.getElementById("principal").value);
    r = parseInt(document.getElementById("rate").value);
    y = parseInt(document.getElementById("years").value);
    document.getElementById("r1").innerHTML = p;
    document.getElementById("r2").innerHTML = (r * 0.21) + "%";
    document.getElementById("r4").innerHTML = 2020 + y;

    result = (p * y * r * 0.21)/100

    document.getElementById("r3").innerHTML = result;

    document.getElementById("result").style.display = "inline-block";
}

function updateValue(value) {
  document.getElementById("rate-value").innerHTML = value * 0.21 + "%";
}
        