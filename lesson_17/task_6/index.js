
function bind(fn, context){
  // обрезаем ненужные аргументы
  let bindArgs = [].slice.call(arguments, 2);
  return function() {
    // здесь все аргументы будут необходимы
    let fnArgs = [].slice.call(arguments);
    // собираем все 
    return fn.apply(context, bindArgs.concat(fnArgs));
  };
};

