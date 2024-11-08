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
function r(i, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M20.993 11.63a9 9 0 0 1 -9.362 9.362l9.362 -9.362z" }, null, -1),
    e("path", { d: "M12 3a9.001 9.001 0 0 1 8.166 5.211l-11.955 11.955a9 9 0 0 1 3.789 -17.166z" }, null, -1),
    e("path", { d: "M12 12l-6 6" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
