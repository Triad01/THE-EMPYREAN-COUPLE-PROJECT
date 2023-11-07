"use strict";
// DOM SELECTIONS ===================================
const section__orders = document.querySelector(".section__orders");
const section__headings = document.querySelector(".section__headings");

const DUMMY_ORDERS = [
  {
    id: "#adaoif",
    name: "Brendan Criag",
    date: "4th Oct, 2006",
    payment_status: "Paid",
    total: "$500",
    payment_method: "credit card",
    order_status: "Delivered",
  },
  {
    id: "#aadlmd",
    name: "Kathryn Mckain",
    date: "10th Feb, 2023",
    payment_status: "Awaiting Authorization",
    total: "$100",
    payment_method: "Master card",
    order_status: "Processing",
  },
  {
    id: "#fgfasd",
    name: "Brendan Criag",
    date: "4th Dec, 2011",
    payment_status: "Failed",
    total: "$700",
    payment_method: "visa card",
    order_status: "Shipped",
  },
  {
    id: "#adfdld",
    name: "Brendan Criag",
    date: "4th Apr, 2012",
    payment_status: "Failed",
    total: "$200",
    payment_method: "virtual card",
    order_status: "Cancelled",
  },
  {
    id: "#fgfagv",
    name: "Oleg vikorigh",
    date: "4th Nov, 2023",
    payment_status: "Paid",
    total: "$200",
    payment_method: "visa card",
    order_status: "Shipped",
  },
  {
    id: "#adfdatr",
    name: "Brendan Criag",
    date: "4th Oct, 2006",
    payment_status: "Paid",
    total: "$900",
    payment_method: "virtual card",
    order_status: "Delivered",
  },
  {
    id: "#fgfagv",
    name: "Oleg vikorigh",
    date: "4th Nov, 2023",
    payment_status: "Paid",
    total: "$200",
    payment_method: "visa card",
    order_status: "Shipped",
  },
  {
    id: "#adfdatr",
    name: "Brendan Criag",
    date: "4th Oct, 2006",
    payment_status: "Paid",
    total: "$900",
    payment_method: "virtual card",
    order_status: "Delivered",
  },
];

DUMMY_ORDERS.forEach((order) => {
  section__headings.insertAdjacentHTML(
    "afterend",
    `  <tr class="section__order--details">
    <th>
      <div class="id_box">
        <input type="checkbox" />
        <p class="order__id">${order.id}</p>
      </div>
    </th>
    <th>${order.name}</th>
    <th>${order.date}</th>
    <th class="payment_status">${order.payment_status}</th>
    <th>${order.total}</th>
    <th>${order.payment_method}</th>
    <th class="order_status">${order.order_status}</th>
  </tr>
    `
  );
});

const payment_status = document.querySelectorAll(".payment_status");
const order_status = document.querySelectorAll(".order_status");

// =====PAYMENT STATUS STYLES ========================
payment_status.forEach((status) => {
  if (status.textContent === "Paid") {
    status.classList.add("paid");
  } else if (status.textContent === "Failed") {
    status.classList.add("failed");
  } else if (status.textContent === "Awaiting Authorization") {
    status.classList.add("awaiting_authorization");
  }
});

// ===ORDER STATUS STYLES =======================================
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
