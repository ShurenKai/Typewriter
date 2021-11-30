const sentence = "hello there from lighthouse labs";
let delay = 0
let increment = 50;
let i = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay)
  delay += increment;
  i++
  if(i === (sentence.length)){
    setTimeout(() => {
      process.stdout.write('\n')
    }, delay)
  }
};

// setTimeout(() => {
//   process.stdout.write(char);
// }, 1000)
