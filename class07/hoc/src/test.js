function compose (f, g) {
    return function(x) {
      return f(g(x));
    };
};

function plusOne (x) {
    return x + 1;
}

function square (x) {
    return x * x;
}

const rs = compose(square, plusOne)(1);
console.log(rs);

