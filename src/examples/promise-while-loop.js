const functions = {

  loopCounter(count=10) {
    console.log('start');

    const action = (i) => {
      console.log('do action', i);
      return { done: i >= count-1, value: i+1 };
    };

    const loop = (promise, fn) => {
      return promise.then(fn).then(wrapper => {
        return !wrapper.done ? loop(Promise.resolve(wrapper.value), fn) : wrapper.value;
      });
    };

    loop(Promise.resolve(0), action).then(result => {
      console.log('end: ', result);
    });
  },

  loopWhile(action, init, condition) {
    console.log('start');

    const loop = (promise, fn) => {
      return promise.then(fn).then(_ => {
        if (condition()) {
          return loop(Promise.resolve(action), fn);
        } else {
          return;
        }
      });
    };

    return loop(Promise.resolve(init()), action).then(_ => {
      console.log('end: ');
    });
  }
}

export default functions;