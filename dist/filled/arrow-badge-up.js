import { openBlock as t, createElementBlock as l, createElementVNode as r } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(i, e) {
  return t(), l("svg", o, e[0] || (e[0] = [
    r("path", { d: "M11.375 6.22l-5 4a1 1 0 0 0 -.375 .78v6l.006 .112a1 1 0 0 0 1.619 .669l4.375 -3.501l4.375 3.5a1 1 0 0 0 1.625 -.78v-6a1 1 0 0 0 -.375 -.78l-5 -4a1 1 0 0 0 -1.25 0z" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
