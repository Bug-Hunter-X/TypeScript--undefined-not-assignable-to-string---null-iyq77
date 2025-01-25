function printName(name: string | null | undefined): void {
  if (name === null || name === undefined) {
    console.log('Name is null or undefined');
  } else {
    console.log(name.toUpperCase());
  }
}

printName(null); // Works correctly
printName(undefined); // Works correctly
printName('John'); // Works correctly