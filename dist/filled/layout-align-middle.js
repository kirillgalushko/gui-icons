import { openBlock as t, createElementBlock as h, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(l, e) {
  return t(), h("svg", o, e[0] || (e[0] = [
    n("path", { d: "M13 5a3 3 0 0 1 3 3v3h4a1 1 0 0 1 0 2h-4v3a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-3h-4a1 1 0 0 1 0 -2h4v-3a3 3 0 0 1 3 -3z" }, null, -1)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};
