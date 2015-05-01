// Конвертирует html-теги в html-entities для prism

//document.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(
        document.querySelectorAll('code'),
        function (element) {
            element.textContent = element.innerHTML.trim();
        }
    )
//});