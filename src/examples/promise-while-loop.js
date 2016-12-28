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
  }
}

export default functions;