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
    o('<path d="M3 3v18h18"></path><path d="M8 15.015v.015"></path><path d="M16 16.015v.015"></path><path d="M8 7.03v.015"></path><path d="M12 11.03v.015"></path><path d="M19 11.03v.015"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
