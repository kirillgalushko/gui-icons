import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function a(i, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 13a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.526 1.292a.98 .98 0 0 1 1.195 -.239a1 1 0 0 1 -.455 1.892a1 1 0 0 0 -.006 2a3 3 0 0 0 1.371 -5.673" }, null, -1)
  ]));
}
const m = { render: a };
export {
  m as default,
  a as render
};
