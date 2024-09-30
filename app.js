var userinput = +prompt("Enter Value")
var userName = prompt("Enter your Name")



for (var i = 1; i <= userinput; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(j, " ")

    }
    document.write("<hr>")
}
for (var a = 1; a <= userinput; a++) {
    for (var b = 1; b <= a; b++) {
        document.write(userName, " ")
    }
    document.write("<hr>")
}
