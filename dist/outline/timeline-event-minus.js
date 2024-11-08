import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const n = {
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
function r(i, t) {
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M10 20h-6"></path><path d="M14 20h6"></path><path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z"></path><path d="M10 8h4"></path>', 5)
  ]));
}
const l = { render: r };
export {
  l as default,
  r as render
};