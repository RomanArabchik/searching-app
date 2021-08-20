const debounce = (fn, ms) => {
  let timeout;
  return function() {
    const fnCall = () =>{fn.apply(this, arguments)};
    clearTimeout(timeout);
    setTimeout(fnCall, ms);
  }
}

export default debounce;