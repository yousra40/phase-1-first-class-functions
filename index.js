function receivesAFunction(callback) {
  return callback();
}

const returnsANamedFunction = () => receivesAFunction;

const returnsAnAnonymousFunction = () => {
  return function () {
    console.log(`This is an anonymous function!`);
  };
};
