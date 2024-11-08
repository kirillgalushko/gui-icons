import { openBlock as t, createElementBlock as h, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(i, e) {
  return t(), h("svg", n, e[0] || (e[0] = [
    r("path", { d: "M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" }, null, -1)
  ]));
}
const l = { render: o };
export {
  l as default,
  o as render
};
