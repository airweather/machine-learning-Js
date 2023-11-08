function createRow(container, studentName, samples) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const rowLabel = document.createElement("div");
  rowLabel.innerHTML = studentName;
  rowLabel.classList.add("row-label");
  row.appendChild(rowLabel);
};
