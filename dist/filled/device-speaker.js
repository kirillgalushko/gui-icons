import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(i, e) {
  return t(), r("svg", o, e[0] || (e[0] = [
    n("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 9a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m0 -5a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" }, null, -1)
  ]));
}
const m = { render: a };
export {
  m as default,
  a as render
};
