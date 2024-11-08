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
    o('<path d="M13 9l3 -1l-1 3m-1 3l-6 2l2 -6"></path><path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73"></path><path d="M12 3v2"></path><path d="M12 19v2"></path><path d="M3 12h2"></path><path d="M19 12h2"></path><path d="M3 3l18 18"></path>', 7)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
