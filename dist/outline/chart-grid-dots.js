import { openBlock as h, createElementBlock as a, createStaticVNode as p } from "vue";
const e = {
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
function d(o, t) {
  return h(), a("svg", e, t[0] || (t[0] = [
    p('<path d="M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M8 18h8"></path><path d="M18 20v1"></path><path d="M18 3v1"></path><path d="M6 20v1"></path><path d="M6 10v-7"></path><path d="M12 3v18"></path><path d="M18 8v8"></path><path d="M8 12h13"></path><path d="M21 6h-1"></path><path d="M16 6h-13"></path><path d="M3 12h1"></path><path d="M20 18h1"></path><path d="M3 18h1"></path><path d="M6 14v2"></path>', 18)
  ]));
}
const n = { render: d };
export {
  n as default,
  d as render
};
