/**
 * отрисовка поля
 * @param field {number[][]} - состояние поля
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисовано поле
 * @param onCellClick {(x: number, y: number) => void}
 * @returns void
 */
export function drawField(htmlElement: Element, field: number[][], onCellClick: (x: number, y: number) => void) {
    const rowIterator = (row: number[], rowIndex: number) =>
        `<tr>${row
            .map((cell: number, columnIndex: number) => {
                if (cell === 1) {
                    return `<td 
        data-x=${columnIndex}
        data-y=${rowIndex}
        class="cell alive" 
        style="background-color:#FA58D0; height:10px; width:10px;"></td>`;
                }
                return `<td 
      data-x=${columnIndex}
      data-y=${rowIndex}
      class="cell dead" 
      style="background-color:#FFFFFF; height:10px; width:10px;"></td>`;
            })
            .join('')}</tr>`;

    if (htmlElement) {
        // eslint-disable-next-line no-param-reassign
        htmlElement.innerHTML = `<table style="border: 1px solid black;">${field.map(rowIterator).join('')}</table>`;
        htmlElement.querySelector('table')!.addEventListener('click', (ev) => {
            const clickedElement = ev.target as HTMLTableCellElement;
            const x = clickedElement!.getAttribute('data-x');
            const y = clickedElement!.getAttribute('data-y');
            if (Number(x) >= 0 && Number(y) >= 0) {
                onCellClick(Number(x), Number(y));
            }
        });
    }

}
