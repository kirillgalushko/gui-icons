import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 21l18 0" }, null, -1),
    e("path", { d: "M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" }, null, -1),
    e("path", { d: "M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
