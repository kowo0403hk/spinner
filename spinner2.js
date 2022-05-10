const spinner = (msInterval) => {
  let spin = ['|', '/', '-', '\\', '|']
  let ms = 100;
  for (const item of spin) {
    setTimeout(() => {
      process.stdout.write(`\r${item}   `);
    }, ms);
    ms += msInterval;
  }
};
spinner(200);