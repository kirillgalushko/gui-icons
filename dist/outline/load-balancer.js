import { openBlock as a, createElementBlock as e, createStaticVNode as h } from "vue";
const p = {
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
function o(d, t) {
  return a(), e("svg", p, t[0] || (t[0] = [
    h('<path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 16v3"></path><path d="M12 10v-7"></path><path d="M9 6l3 -3l3 3"></path><path d="M12 10v-7"></path><path d="M9 6l3 -3l3 3"></path><path d="M14.894 12.227l6.11 -2.224"></path><path d="M17.159 8.21l3.845 1.793l-1.793 3.845"></path><path d="M9.101 12.214l-6.075 -2.211"></path><path d="M6.871 8.21l-3.845 1.793l1.793 3.845"></path>', 11)
  ]));
}
const r = { render: o };
export {
  r as default,
  o as render
};
