import { openBlock as t, createElementBlock as o, createElementVNode as h } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(r, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    h("path", { d: "M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-2 2.928h-2.5a2.5 2.5 0 0 0 0 5h1a.5 .5 0 1 1 0 1h-2.5a1 1 0 0 0 0 2h2.5a2.5 2.5 0 1 0 0 -5h-1a.5 .5 0 0 1 0 -1h2.5a1 1 0 0 0 0 -2" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
