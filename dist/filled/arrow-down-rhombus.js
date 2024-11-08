import { openBlock as e, createElementBlock as t, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, l) {
  return e(), t("svg", r, l[0] || (l[0] = [
    o("path", { d: "M12.707 2.293l2.5 2.5a1 1 0 0 1 0 1.414l-2.207 2.207v10.17l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-10.171l-2.207 -2.208a1 1 0 0 1 0 -1.414l2.5 -2.5a1 1 0 0 1 1.414 0" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
