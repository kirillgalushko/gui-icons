import { openBlock as t, createElementBlock as a, createElementVNode as e } from "vue";
const h = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(o, l) {
  return t(), a("svg", h, l[0] || (l[0] = [
    e("path", { d: "M8.707 2.293l3.293 3.292l3.293 -3.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-2.293 2.293h4.586a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h4.585l-2.292 -2.293a1 1 0 0 1 1.414 -1.414m10.293 5.707h-2a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-9a1 1 0 0 0 -1 -1" }, null, -1),
    e("path", { d: "M18 14a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1" }, null, -1),
    e("path", { d: "M18 11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1" }, null, -1)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
