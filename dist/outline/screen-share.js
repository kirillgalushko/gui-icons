import { openBlock as e, createElementBlock as h, createStaticVNode as r } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(a, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    r('<path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"></path><path d="M7 20l10 0"></path><path d="M9 16l0 4"></path><path d="M15 16l0 4"></path><path d="M17 4h4v4"></path><path d="M16 9l5 -5"></path>', 6)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};