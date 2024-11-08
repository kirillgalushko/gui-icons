import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path><path d="M12 12h.01"></path><path d="M9 12h.01"></path><path d="M15 12h.01"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
