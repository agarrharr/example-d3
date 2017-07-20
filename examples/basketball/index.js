d3.json('shots.json', (data) => {
console.log(data);
  var shots = d3.select('#app')
    .append('g')
    .attr('transform', 'translate(250, 50)')
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', (d) => `translate(${d.loc_x}, ${d.loc_y})`)
    .on("mouseover", (d, i, nodes) => {
      d3.select(nodes[i]).raise()
        .append('text')
        .attr('class', 'info')
        .text(d.player_name)
	.attr('pointer-events', 'none')
    })
    .on("mouseout", (d) => {
      d3.selectAll('.info').remove();
    })

  shots.append('circle')
    .attr('r', '5px')
    .attr('fill', (d) => d.shot_made_flag ? 'green' : 'red')
});

