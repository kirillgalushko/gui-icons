import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M7 20l10 0"></path><path d="M6 6l6 -1l6 1"></path><path d="M12 3l0 17"></path><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>', 5)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
