
/* note-popover:start */
(() => {
  if (window.__ffxNotePopoverReady) return;
  window.__ffxNotePopoverReady = true;

  let activeMark = null;
  let panel = null;

  function closeNotePopover({ restoreFocus = false } = {}) {
    if (!panel) return;
    const mark = activeMark;
    activeMark?.setAttribute("aria-expanded", "false");
    activeMark?.removeAttribute("aria-controls");
    panel.classList.remove("is-open");
    panel.remove();
    panel = null;
    activeMark = null;
    if (restoreFocus && mark?.isConnected) mark.focus({ preventScroll: true });
  }

  function positionPanel(mark) {
    if (!panel || window.matchMedia("(max-width: 720px)").matches) return;
    const rect = mark.getBoundingClientRect();
    const gap = 10;
    const margin = 12;
    const width = panel.offsetWidth;
    const height = panel.offsetHeight;
    const left = Math.max(margin, Math.min(window.innerWidth - width - margin, rect.left + rect.width / 2 - width / 2));
    const fitsBelow = rect.bottom + gap + height <= window.innerHeight - margin;
    const top = fitsBelow
      ? rect.bottom + gap
      : Math.max(margin, rect.top - height - gap);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
    panel.style.setProperty("--note-origin-x", `${rect.left + rect.width / 2 - left}px`);
    panel.style.setProperty("--note-origin-y", fitsBelow ? "0%" : "100%");
  }

  function openNotePopover(mark) {
    const noteId = mark.getAttribute("href")?.slice(1) || "";
    const source = document.getElementById(noteId);
    if (!source) return;
    if (activeMark === mark && panel) return closeNotePopover({ restoreFocus: true });
    closeNotePopover();

    const number = noteId.replace(/^note-/, "");
    panel = document.createElement("aside");
    panel.id = "active-note-popover";
    panel.className = "note-popover";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "false");
    panel.setAttribute("aria-label", `注释 ${number}`);
    panel.innerHTML =
      '<button class="note-popover-close" type="button" aria-label="关闭注释">×</button>' +
      `<p class="note-popover-title">注释 ${number}</p>` +
      `<div class="note-popover-copy">${source.innerHTML}</div>`;
    panel.querySelectorAll("[id]").forEach(element => element.removeAttribute("id"));
    document.body.append(panel);
    activeMark = mark;
    mark.setAttribute("aria-controls", panel.id);
    mark.setAttribute("aria-expanded", "true");
    positionPanel(mark);
    requestAnimationFrame(() => panel?.classList.add("is-open"));
  }

  document.addEventListener("click", event => {
    const mark = event.target.closest?.(".note-mark");
    if (mark) {
      event.preventDefault();
      openNotePopover(mark);
      return;
    }
    if (event.target.closest?.(".note-popover-close")) {
      closeNotePopover({ restoreFocus: true });
      return;
    }
    if (panel && !event.target.closest?.(".note-popover")) closeNotePopover();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && panel) {
      event.preventDefault();
      closeNotePopover({ restoreFocus: true });
    }
  });

  window.addEventListener("resize", () => activeMark && positionPanel(activeMark), { passive: true });
  window.addEventListener("scroll", () => panel && closeNotePopover(), { passive: true });
})();
/* note-popover:end */






