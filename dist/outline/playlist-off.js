import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M14 14a3 3 0 1 0 3 3"></path><path d="M17 13v-9h4"></path><path d="M13 5h-4m-4 0h-2"></path><path d="M3 9h6"></path><path d="M9 13h-6"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};
