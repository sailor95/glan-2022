/*
 * Example:
 *
 * Input:
 * 883. Projection Area of 3D Shapes
 *
 * Output:
 * 883-projection-area-of-3d-shapes // Folder name
 * projection-area-of-3d-shapes.js // File name
 *
 */

const transferFileName = n =>
  n.replace(/\./, '').replace(/\s/g, '-').toLowerCase().concat('.js')

const fileName = transferFileName(
  '3. Longest Substring Without Repeating Characters'
)

console.log(fileName)
