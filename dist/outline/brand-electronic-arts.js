import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
const h = {
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
  return e(), r("svg", h, t[0] || (t[0] = [
    o('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3"></path><path d="M17 14h-2"></path><path d="M6.5 12h3.5"></path><path d="M8 9h3"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
