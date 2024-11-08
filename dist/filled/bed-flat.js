import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
const a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function h(o, t) {
  return l(), n("svg", a, t[0] || (t[0] = [
    e("path", { d: "M5 8a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" }, null, -1),
    e("path", { d: "M18 7a4 4 0 0 1 4 4v2a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" }, null, -1),
    e("path", { d: "M21 15a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2z" }, null, -1)
  ]));
}
const i = { render: h };
export {
  i as default,
  h as render
};
