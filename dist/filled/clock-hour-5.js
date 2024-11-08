import { openBlock as l, createElementBlock as t, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return l(), t("svg", r, e[0] || (e[0] = [
    o("path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6 3.66v5.022l.003 .054l.02 .135l.005 .025a1 1 0 0 0 .056 .165l.04 .082l.04 .065l2.004 3.007a1 1 0 1 0 1.664 -1.11l-1.832 -2.748v-4.697a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
