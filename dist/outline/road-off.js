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
function n(a, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M4 19l3.332 -11.661"></path><path d="M16 5l2.806 9.823"></path><path d="M12 8v-2"></path><path d="M12 13v-1"></path><path d="M12 18v-2"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
