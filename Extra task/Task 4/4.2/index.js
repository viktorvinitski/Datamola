const add = (arg1, arg2) => {
  if (arg2 === undefined) {
    return (arg3) => arg3 + arg1;
  }
  return (arg1 = arg1 + arg2);
};

const sub = (arg1, arg2) => {
  if (arg2 === undefined) {
    return (arg3) => arg3 - arg1;
  }
  return (arg1 = arg1 - arg2);
};

const mul = (arg1, arg2) => {
  if (arg2 === undefined) {
    return (arg3) => arg3 * arg1;
  }
  return (arg1 = arg1 * arg2);
};

const div = (arg1, arg2) => {
  if (arg2 === undefined) {
    return (arg3) => arg3 / arg1;
  }
  return (arg1 = arg1 / arg2);
};

const pipe = (...args) => {
  const func = (param) => {
    let emptyArr = param;
    args.forEach((item) => (emptyArr = item(emptyArr)));
    return emptyArr
  };
  return func;
};

let a = add(1,2);
console.log(a);
let b = mul(a, 10);
console.log(b);
let sub1 = sub(1);
let c = sub1(b);
console.log(c);
let d = mul(sub(a,1))(c);
console.log(d);
let doSmth = pipe(add(d), sub(c), mul(b), div(a))
console.log(doSmth(0));
pipe(add(1), mul(2))(3)
let x = pipe(add(1), mul(2))(3);
console.log(x);
