import { openBlock as t, createElementBlock as o, createElementVNode as e } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(i, l) {
  return t(), o("svg", r, l[0] || (l[0] = [
    e("path", { d: "M11.852 2.011l.058 -.007l.09 -.004l.075 .003l.126 .017l.111 .03l.111 .044l.098 .052l.104 .074l.082 .073l3 3a1 1 0 1 1 -1.414 1.414l-1.293 -1.292v7.585a1 1 0 0 1 -2 0v-7.585l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414l3 -3q .053 -.054 .112 -.097l.11 -.071l.114 -.054l.105 -.035z" }, null, -1),
    e("path", { d: "M12 16a3 3 0 1 1 0 6a3 3 0 0 1 0 -6" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};