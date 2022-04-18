let spinner = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|";
let delay = 0;
for (let char of spinner) {
  setTimeout(() => {
    process.stdout.write('\r');
    process.stdout.write(char);
  }, delay);
  delay += 100;
}