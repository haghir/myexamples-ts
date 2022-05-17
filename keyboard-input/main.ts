function querySelector(selector: string): HTMLElement {
    const elem: HTMLElement | null = document.querySelector(selector);
    if (elem == null)
        throw new Error(`The element corresponding to ${selector} was not found.`);

    return elem;
}

window.onload = () => {
    const pressed: HTMLElement = querySelector("#pressed");
    const repeating: HTMLElement = querySelector("#repeating");

    window.addEventListener("keydown", (e) => {
        if (!e.repeat) {
            console.log(`${e.key} was pressed`);
            pressed.innerHTML = `${e.key}`;
        } else {
            console.log(`${e.key} is repeating`);
            repeating.innerHTML = `${e.key}`;
        }
    });
};
