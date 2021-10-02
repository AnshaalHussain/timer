const args = process.argv.slice(2);
const timer = function(x) {
  setTimeout( () => {
    process.stdout.write("\x07");
  }, x);
};

if (args.length === 0) {
  return;
}
for(item of args) {
  if (item === NaN || item < 0) {
    continue;
  }
  let newItem = Number(item)
  timer(newItem * 1000);
};


