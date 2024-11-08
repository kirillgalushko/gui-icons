import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function h(i, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M12 3a1 1 0 0 1 1 1v4h3a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-3v4a1 1 0 0 1 -2 0v-4h-3a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h3v-4a1 1 0 0 1 1 -1" }, null, -1)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};
