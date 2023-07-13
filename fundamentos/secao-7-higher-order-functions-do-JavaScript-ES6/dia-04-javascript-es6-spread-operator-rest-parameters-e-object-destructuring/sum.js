const sum = (...numbers) => {
  let total = 0;
  numbers.forEach((number) => (
    total += number
  ));
  console.log(total);
};

sum(4, 5, 6);