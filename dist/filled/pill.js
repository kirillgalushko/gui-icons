import { openBlock as t, createElementBlock as l, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, e) {
  return t(), l("svg", o, e[0] || (e[0] = [
    n("path", { d: "M20.207 3.793a5.95 5.95 0 0 1 0 8.414l-8 8a5.95 5.95 0 0 1 -8.414 -8.414l8 -8a5.95 5.95 0 0 1 8.414 0m-7 1.414l-4.294 4.293l5.586 5.586l4.294 -4.292a3.95 3.95 0 1 0 -5.586 -5.586" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
