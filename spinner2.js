const animation = ['\r-   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r-   ', '\r\\   ', '\r|\n'];
const spin = function(arr) {
  let period = 100;
  for(const elem of arr) {
    setTimeout(() => {
      process.stdout.write(elem);
    }, period);
    period += 200;
  }
};

spin(animation);