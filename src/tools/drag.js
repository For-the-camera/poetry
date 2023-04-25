let dragingEl;
export function drag(
  container,
  options = {
    dragClass: ".dragable",
  }
) {
  const drageableList = container.querySelectorAll(options.dragClass);
  drageableList.forEach((el) => {
    el.setAttribute("draggable", "true");
    el.addEventListener("dragstart", (event) => {
      dragingEl = event.target;
      event.dataTransfer.setData(
        "parent",
        event.target.parentElement.className
      );
    });
  });
}
export function drop(
  container,
  options = {
    dropClass: ".drop",
    copy: false,
    condition: () => {},
  }
) {
  const dropList = container.querySelectorAll(options.dropClass);
  dropList.forEach((el) => {
    el.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    el.addEventListener("drop", function (event) {
      event.preventDefault();
      if (
        event.target.innerHTML.trim() == "" &&
        options.condition(event, options)
      ) {
        if (options.copy) {
          event.target.appendChild(dragingEl.cloneNode(true));
        } else {
          event.target.appendChild(dragingEl);
        }
      }
    });
  });
}
