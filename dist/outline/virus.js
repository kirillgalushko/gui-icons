import { openBlock as h, createElementBlock as a, createStaticVNode as p } from "vue";
const e = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function d(o, t) {
  return h(), a("svg", e, t[0] || (t[0] = [
    p('<path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M12 7v-4"></path><path d="M11 3h2"></path><path d="M15.536 8.464l2.828 -2.828"></path><path d="M17.657 4.929l1.414 1.414"></path><path d="M17 12h4"></path><path d="M21 11v2"></path><path d="M15.535 15.536l2.829 2.828"></path><path d="M19.071 17.657l-1.414 1.414"></path><path d="M12 17v4"></path><path d="M13 21h-2"></path><path d="M8.465 15.536l-2.829 2.828"></path><path d="M6.343 19.071l-1.413 -1.414"></path><path d="M7 12h-4"></path><path d="M3 13v-2"></path><path d="M8.464 8.464l-2.828 -2.828"></path><path d="M4.929 6.343l1.414 -1.413"></path>', 17)
  ]));
}
const l = { render: d };
export {
  l as default,
  d as render
};
