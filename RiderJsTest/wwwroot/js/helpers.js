export function addInteractions() {
    window.jsTestInteractions = {
        addingWidgetHover: function (selector, dotNetReference, methodName) {
            document.querySelector(selector).addEventListener('mouseover', event => {
                console.log("Before hover call");
                let row = event.target.closest("tr");
                let rowIndex = Array.from(row.parentElement.children).indexOf(row);
                dotNetReference.invokeMethodAsync(methodName, ".widget:nth-child(" + (rowIndex + 1) + ")"); // 1 for zero-indexing
                console.log("After hover call");
            })
        },
        addingWidgetHoverOut: function (selector, dotNetReference, methodName) {
            document.querySelector(selector).addEventListener('mouseout', event => {
                console.log("Before hover out call");
                let row = event.target.closest("tr");
                let rowIndex = Array.from(row.parentElement.children).indexOf(row);
                dotNetReference.invokeMethodAsync(methodName, ".widget:nth-child(" + (rowIndex + 1) + ")"); // 1 for zero-indexing
                console.log("After hover out call");
            })
        },
        addingWidgetClick: function (selector, dotNetReference, methodName) {
            document.querySelector(selector).addEventListener('click', event => {
                console.log("Offset: " + event.offsetX + ", " + event.offsetY);
                console.log("Before click call");
                let row = event.target.closest("tr");
                let rowIndex = Array.from(row.parentElement.children).indexOf(row);
                dotNetReference.invokeMethodAsync(methodName, ".widget:nth-child(" + (rowIndex + 1) + ")", event.offsetX, event.offsetY);
                console.log("After click call");
            })
        },
        addingWidgetHighlight: function (selector) {
            console.log("Highlighting: " + selector);
            document.querySelector(selector).classList.add("highlight");
        },
        addingWidgetUnhighlight: function (selector) {
            console.log("Unhighlighting: " + selector);
            document.querySelector(selector).classList.remove("highlight");
        },
        addingWidgetGetWidgetNumber: function (selector) {
            this.addingWidgetUnhighlight(selector);
            let row = document.querySelector(selector);
            return parseInt(row.lastChild.textContent);
        }
    }
}