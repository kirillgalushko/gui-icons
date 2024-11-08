import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return t(), o("svg", l, e[0] || (e[0] = [
    r("path", { d: "M15 5h-6a7 7 0 1 0 0 14h6a7 7 0 0 0 7 -7l-.007 -.303a7 7 0 0 0 -6.993 -6.697z" }, null, -1)
  ]));
}
const m = { render: n };
export {
  m as default,
  n as render
};
