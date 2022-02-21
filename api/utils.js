const getFibonnacci = (sended) => {
  let found = false;
  let fibonacci = [];
  for(let i = 0; found == false; i++) {
    if(i == 0 || i == 1) {
      fibonacci.push(i);
    } else {
      fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
    if(i == sended) {
      found = true;
    }
  }
  return fibonacci[fibonacci.length-1];
}

module.exports = { getFibonnacci };
