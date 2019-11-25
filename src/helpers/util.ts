export function isDate(val: any): val is Date {
  return Object.prototype.toString.call(val) === '[Object Date]';
}

export function isObject(val: any): val is Object {
  //typeof val === 'object' null的类型也是object
  return val !== null && typeof val === 'object';
}
