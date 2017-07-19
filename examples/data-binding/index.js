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
  .text('Hello')

// Bind data to divs with no text
// Give them a height, width, and background color
// Add a bottom margin so that you can see them
