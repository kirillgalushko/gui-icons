import { openBlock as h, createElementBlock as e, createStaticVNode as p } from "vue";
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
function o(d, t) {
  return h(), e("svg", a, t[0] || (t[0] = [
    p('<path d="M4 4h16"></path><path d="M4 8v.01"></path><path d="M20 8v.01"></path><path d="M4 12v.01"></path><path d="M20 12v.01"></path><path d="M4 16v.01"></path><path d="M15 12h-6"></path><path d="M12 9v6"></path><path d="M20 16v.01"></path><path d="M4 20v.01"></path><path d="M8 20v.01"></path><path d="M12 20v.01"></path><path d="M16 20v.01"></path><path d="M20 20v.01"></path>', 14)
  ]));
}
const n = { render: o };
export {
  n as default,
  o as render
};
