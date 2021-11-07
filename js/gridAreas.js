export default function gridAreas(cols, rows) {

    let gridAreas = '';
    for (let i = 0; i < rows; i++) {
        gridAreas += `"`
        for (let j = 0; j < cols; j++) {
            gridAreas += `tile-${j + (i * cols)} `
        }
        gridAreas = gridAreas.replace(/\s$/, '"\n')
    };
    
    return gridAreas;
}