import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
const l = {
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
function i(n, t) {
  return e(), r("svg", l, t[0] || (t[0] = [
    o('<circle cx="12" cy="12" r=".5" fill="currentColor"></circle><path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M12 3l0 2"></path><path d="M3 12l2 0"></path><path d="M12 19l0 2"></path><path d="M19 12l2 0"></path>', 6)
  ]));
}
const c = { render: i };
export {
  c as default,
  i as render
};
