function burger() {
  let a = prompt("do you like to add meatball?");
  let b = prompt("do you like to add tomatto?");
  if (a == "yes" && b == "yes") {
    alert("your order: one burger with extra meatball and exrea tomatto");
  } else if (a == "no" && b == "yes") {
    alert("your order: one burger with extra tomatto");
  } else if (a == "yes" && b == "no") {
    alert("your order: extra meatball ");
  } else {
    alert("invalid answer");
  }
}

function pizza() {
  let c = prompt("do you like to add extra?");
  if (c == "no") {
    alert("your order: one pizza without extra ");
  } else if (c == "yes") {
    let d = prompt("do you like to add olives?");
    let e = prompt("do you loke to add onion?");
    if (d == "yes" && e == "yes") {
      alert("your order: one pizza with olives and onion");
    } else if (d == "no" && e == "yes") {
      alert("your order: one pizza with onion");
    } else if (d == "yes" && e == "no") {
      alert("your order: one pizza with olives");
    } else {
      alert("invalid answer");
    }
  }
}
