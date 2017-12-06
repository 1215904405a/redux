export default function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {  //类似迭代累加   函数从右往左执行，右边函数返回结果是左边函数的参数，最右边函数参数一般是react组件
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
