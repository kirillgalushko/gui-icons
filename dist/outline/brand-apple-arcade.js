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
function r(a, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" }, null, -1),
    e("path", { d: "M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z" }, null, -1),
    e("path", { d: "M12 7l0 6" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
