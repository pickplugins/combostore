"use client";
// TEMPORARY: outside-click test for the Sales filters popover. Made-up data only.
import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import { useCounterStore } from "../../store/useCounterStore";

const log = [];
const json = (data, status = 200) => Promise.resolve(new Response(JSON.stringify(data), { status }));
if (typeof window !== "undefined" && !window.__stub) {
  window.__stub = true;
  window.fetch = (url, init) => {
    const u = String(url);
    if (u.includes("get_stats_all")) return json({ orders: [], expenses: [], purchases: [] });
    if (u.includes("get_products")) return json({ posts: [{ id: 77, title: "Test Product", variations: [] }], total: 1, max_pages: 1 });
    return json({}, 401);
  };
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const byText = (text) => Array.from(document.querySelectorAll("div,button,span,h1"))
  .filter((el) => el.textContent.trim() === text && !Array.from(el.children).some((c) => c.textContent.trim() === text));
const trigger = () => Array.from(document.querySelectorAll(".h-9")).find(e => e.textContent.includes("Sales filters") && !e.textContent.includes("These filters"));
const panel = () => Array.from(document.querySelectorAll("div")).find(e => e.className?.includes?.("sm:w-[600px]"));
/* What a real press does: pointerdown first, then the click. */
const press = async (el) => {
  el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
  el.click();
  await wait(500);
};
const state = (name) => log.push(`${name}: open=${Boolean(panel())} button="${trigger()?.textContent.trim()}"`);
const type = async (placeholder, text) => {
  const input = document.querySelector(`input[placeholder="${placeholder}"]`);
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(input, text);
  input.dispatchEvent(new Event("input", { bubbles: true }));
  await wait(800);
};

async function run() {
  await wait(4000);
  state("start");
  await press(trigger()); state("button opens");
  await press(byText("These filters apply to Sales Performance only.")[0]); state("press inside panel");
  await press(byText("Completed")[0]); state("open dropdown inside");
  await press(document.querySelector(".scroll-thin div")); state("pick dropdown option (removed or re-rendered)");
  await type("Search product", "test");
  await press(byText("Test Product")[0]); state("pick product (result disappears)");
  await press(panel().querySelector('[aria-label^="Clear"]')); state("clear product (x disappears)");
  await press(byText("Store Overview")[0]); state("press page title OUTSIDE");
  await press(trigger()); state("button reopens");
  await press(trigger()); state("button closes");
  await press(trigger()); state("button reopens");
  await press(byText("Sales Performance")[0]); state("press widget OUTSIDE");
  await press(trigger()); state("button reopens");
  await press(panel().querySelector(".bg-red-400")); state("red X closes");
}

export default function Page() {
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState("");
  useEffect(() => {
    useCounterStore.setState({ token: "preview", currencySymbole: "৳", currencyPosition: "before" });
    setReady(true);
    run().catch(e => log.push("TEST ERROR " + e.message)).then(() => setResult(log.join("\n")));
  }, []);
  return <div>{ready && <Dashboard />}<pre id="wiring-result" style={{ display: "none" }}>{result}</pre></div>;
}
