"use strict";
// const section__orders = document.querySelector(".section__orders");

// const DDUMMY_ORDERS = [
//   {
//     id: "#adafdf",
//     name: "Brendan Criag",
//     date: "4th October, 2006",
//     payment_status: "Paid",
//     total: "$500",
//     payment_method: "credit card",
//     order_status: "Delivered",
//   },
//   {
//     id: "#aadrtd",
//     name: "Kathryn Mckain",
//     date: "10th November, 2023",
//     payment_status: "awaiting authorization",
//     total: "$1000",
//     payment_method: "Master card",
//     order_status: "Processing",
//   },
//   {
//     id: "#fgfasd",
//     name: "Brendan Criag",
//     date: "4th october, 2011",
//     payment_status: "payment_failed",
//     total: "$2000",
//     payment_method: "visa card",
//     order_status: "Shipped",
//   },
//   {
//     id: "#adfdfad",
//     name: "Brendan Criag",
//     date: "4th october, 2012",
//     payment_status: "payment_failed",
//     total: "$2000",
//     payment_method: "virtual card",
//     order_status: "Cancelled",
//   },
//   {
//     id: "#fgfagv",
//     name: "Oleg vikorigh",
//     date: "4th october, 2023",
//     payment_status: "paid",
//     total: "$200",
//     payment_method: "visa card",
//     order_status: "Shipped",
//   },
//   {
//     id: "#adfdatr",
//     name: "Brendan Criag",
//     date: "4th october, 2006",
//     payment_status: "Paid",
//     total: "$900",
//     payment_method: "virtual card",
//     order_status: "Delivered",
//   },
// ];

// Dummy_ORDERS.forEach((order) => {
//   section__orders.insertAdjacentHTML(
//     "afterend",
//     `  <div class="section__order">
//     <div>
//       <input type="checkbox" />
//       <p>${order.id}</p>
//     </div>
//     <div>${order.name}</div>
//     <div>${order.date}</div>
//     <div>${order.payment_status}</div>
//     <div>${order.total}</div>
//     <div>${order.payment_method}</div>
//     <div>${order.order_status}</div>
//   </div>
//     `
//   );
// });

const payment_status = document.querySelectorAll(".payment_status");
const order_status = document.querySelectorAll(".order_status");

// =====PAYMENT STATUS STYLES ===============.
payment_status.forEach((status) => {
  if (status.textContent === "Paid") {
    status.classList.add("paid");
  } else if (status.textContent === "Failed") {
    status.classList.add("failed");
  } else if (status.textContent === "Awaiting Authorization") {
    status.classList.add("awaiting_authorization");
  }
});

// ===ORDER STATUS STYLES =========================

order_status.forEach((status) => {
  if (status.textContent === "Delivered") {
    status.classList.add("delivered");
  } else if (status.textContent === "Processing")
    status.classList.add("processing");
  else if (status.textContent === "Shipped") {
    status.classList.add("shipped");
  } else if (status.textContent === "Cancelled") {
    status.classList.add("cancelled");
  }
});
