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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17a2 2 0 1 0 2 2"></path><path d="M17 17h-11v-11"></path><path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};
