import { openBlock as t, createElementBlock as l, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(i, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    r("path", { d: "M12 3a3 3 0 0 1 2.616 4.47l3.274 3.742a3 3 0 1 1 -1.505 1.318l-3.275 -3.743l-.11 .042v6.342a3.001 3.001 0 1 1 -2 0v-6.342l-.111 -.041l-3.274 3.742a3 3 0 1 1 -1.505 -1.318l3.273 -3.742a3 3 0 0 1 2.617 -4.47" }, null, -1)
  ]));
}
const m = { render: o };
export {
  m as default,
  o as render
};
