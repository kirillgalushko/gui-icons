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
function r(h, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925z" }, null, -1),
    e("path", { d: "M12 12h9l-1.914 4.912a1.7 1.7 0 0 1 -2.925 .428z" }, null, -1),
    e("path", { d: "M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428z" }, null, -1),
    e("path", { d: "M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
