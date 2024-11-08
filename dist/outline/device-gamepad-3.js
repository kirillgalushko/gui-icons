import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
function h(r, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M9 12l-3 -3h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2z" }, null, -1),
    e("path", { d: "M15 12l3 -3h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2z" }, null, -1),
    e("path", { d: "M12 15l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1v-2z" }, null, -1),
    e("path", { d: "M12 9l-3 -3v-2a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2z" }, null, -1)
  ]));
}
const i = { render: h };
export {
  i as default,
  h as render
};
