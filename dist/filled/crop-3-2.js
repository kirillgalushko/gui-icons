import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(h, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    r("path", { d: "M18 6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z" }, null, -1)
  ]));
}
const m = { render: i };
export {
  m as default,
  i as render
};
