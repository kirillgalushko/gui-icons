import { openBlock as n, createElementBlock as h, createElementVNode as e } from "vue";
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
function l(r, t) {
  return n(), h("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12 8h8.5a1.5 1.5 0 0 1 0 3h-7.5" }, null, -1),
    e("path", { d: "M13.5 11h2a1.5 1.5 0 0 1 0 3h-2.5" }, null, -1),
    e("path", { d: "M14.5 14a1.5 1.5 0 0 1 0 3h-1.5" }, null, -1),
    e("path", { d: "M13.5 17a1.5 1.5 0 1 1 0 3h-4.5a6 6 0 0 1 -6 -6v-2v.208a6 6 0 0 1 2.7 -5.012l.3 -.196q .718 -.468 5.728 -3.286a1.5 1.5 0 0 1 2.022 .536c.44 .734 .325 1.674 -.28 2.28l-1.47 1.47" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
