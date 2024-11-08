import { openBlock as e, createElementBlock as a, createStaticVNode as h } from "vue";
const o = {
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
  return e(), a("svg", o, t[0] || (t[0] = [
    h('<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 21l0 .01"></path><path d="M3 9l0 .01"></path><path d="M21 9l0 .01"></path><path d="M8 20.1a9 9 0 0 1 -5 -7.1"></path><path d="M16 20.1a9 9 0 0 0 5 -7.1"></path><path d="M6.2 5a9 9 0 0 1 11.4 0"></path>', 7)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
