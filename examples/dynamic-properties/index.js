const data = [1, 5, 6, 2, 7, 4];

d3.select('body')
  .style('background-color', '#03A9FC')

d3.select('#app')
  .selectAll('p')
  .data(data)
  .enter()
  .append('p')
  .style('color', '#FFFFFF')
  .style('font-size', '24px')
  .text((d, i) => `The index is ${i} and the data is ${d}.`)

// Make another property dynamic, like the font-size, the color, or something else
