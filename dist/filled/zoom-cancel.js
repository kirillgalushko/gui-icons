import { openBlock as t, createElementBlock as l, createElementVNode as o } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(a, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    o("path", { d: "M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-5.293 4.22a1 1 0 0 0 -1.414 1.415l1.292 1.293l-1.292 1.293a1 1 0 0 0 1.414 1.414l1.293 -1.292l1.293 1.292a1 1 0 0 0 1.414 -1.414l-1.292 -1.293l1.292 -1.293a1 1 0 1 0 -1.414 -1.414l-1.293 1.292z" }, null, -1)
  ]));
}
const m = { render: r };
export {
  m as default,
  r as render
};
