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
    o('<path d="M12 8h4v4m0 4h-8v-8"></path><path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405"></path><path d="M16 16l3.3 3.3"></path><path d="M16 8l3.3 -3.3"></path><path d="M8 8l-3.3 -3.3"></path><path d="M8 16l-3.3 3.3"></path><path d="M3 3l18 18"></path>', 7)
  ]));
}
const p = { render: r };
export {
  p as default,
  r as render
};
