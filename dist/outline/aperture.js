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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M3.6 15h10.55"></path><path d="M6.551 4.938l3.26 10.034"></path><path d="M17.032 4.636l-8.535 6.201"></path><path d="M20.559 14.51l-8.535 -6.201"></path><path d="M12.257 20.916l3.261 -10.034"></path>', 6)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
