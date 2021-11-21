function sides(literals, ...expressions) {
    let [firstItem, secondItem] = expressions;
    let arr = []
    arr.push((secondItem + Math.sqrt((secondItem*secondItem) - 16 * firstItem))/4)
    arr.push((secondItem - Math.sqrt((secondItem*secondItem) - 16 * firstItem))/4)
    return arr.sort()
}
