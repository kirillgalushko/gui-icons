import { openBlock as e, createElementBlock as h, createStaticVNode as r } from "vue";
const a = {
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
function o(p, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    r('<path d="M3 20l9 -7"></path><path d="M12 3v10l9 7"></path><path d="M17 12v.015"></path><path d="M17 4.015v.015"></path><path d="M21 8.015v.015"></path><path d="M12 19.015v.015"></path><path d="M3 12.015v.015"></path><path d="M7 8.015v.015"></path><path d="M3 4.015v.015"></path>', 9)
  ]));
}
const n = { render: o };
export {
  n as default,
  o as render
};
