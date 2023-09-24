const keyPressed = document.querySelector("#insert")

window.addEventListener("keydown", function (e) {
    keyPressed.innerHTML =
        `<table>
            <tr>
                <td>key</td>
                <td>key code</td>
                <td>code</td>
            </tr>
            <tr>
                <td id="key">${e.key === " " ? "space":e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
    </table>`;
})