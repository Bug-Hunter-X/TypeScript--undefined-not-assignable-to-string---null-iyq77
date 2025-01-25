function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

printName(null); // This works fine
printName(undefined); // This will throw an error because undefined is not assignable to string | null