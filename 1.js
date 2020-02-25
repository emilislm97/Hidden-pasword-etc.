function goster() {
    let x = document.getElementById("exampleInputPassword1").type;

    if (x == "password") {
        document.getElementById("exampleInputPassword1").type = 'text'
    } else {
        document.getElementById("exampleInputPassword1").type = 'password'
    }

    let z = document.getElementById("i1").className;
    if(z=="fas fa-eye-slash"){
        document.getElementById("i1").className="fas fa-eye"
    }else{
        document.getElementById("i1").className="fas fa-eye-slash"
    }
}
function olc() {
    let y = document.getElementById("exampleInputPassword1").value;

    if (y.length <= 4) {
        document.getElementById("s1").innerHTML = "zeif sifre"
    } else if (y.length <= 8) {
        document.getElementById("s1").innerHTML = "normal sifre"
    } else {
        document.getElementById("s1").innerHTML = "guclu sifre"
    }


}