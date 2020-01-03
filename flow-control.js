//function basicTeenager(age) {
  //if (basicTeenager > 12 && < 20)
  //return("You are a teenager!")
//}
//basicTeenager(13);
function basicTeenager(age) {
  if (age > 12 && age < 20)
    return("You are a teenager!")
  basicTeenager(13)
}

function teenager(age) {
  if (age > 12 && age < 20)
    return("You are a teenager!")
} else {
    return("You are not a teenager")
  teenager(11)
}

function ageChecker(age) {
  if (age > 12 && age < 20)
    return("You are a teenager!")
}  else if (age < 13) {
    return("You are a kid")
}  else {
    return("You are a grownup")
  ageChecker(24)
  }

  basicTeenager(13)
}

}

function ternaryTeenager(age) {

}

function switchAge(age) {

}
