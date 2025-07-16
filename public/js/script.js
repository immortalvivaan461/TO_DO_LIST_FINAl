function handleCheckbox(checkbox, taskId) {
    const parent = checkbox.closest(".eachtask");
    const taskText = parent.querySelector(".task-text");

    if (checkbox.checked) {
        taskText.classList.add("done");
    } else {
        taskText.classList.remove("done");
    }

    setTimeout(() => {
        checkbox.form.submit();
    }, 150);
}
