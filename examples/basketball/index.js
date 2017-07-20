// http://stats.nba.com/stats/shotchartdetail?CFID=33&CFPARAMS=2014-15&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=201935&PlusMinus=N&PlayerPosition=&Rank=N&RookieYear=&Season=2014-15&SeasonSegment=&SeasonType=Regular+Season&TeamID=0&VsConference=&VsDivision=&mode=Advanced&showDetails=0&showShots=1&showZones=0
// 201935 is James Harden

d3.json('shots.json', (data) => {
  const headers = data.resultSets[0].headers;
  const SCHEMA = {
    LOC_X: 17,
    LOC_Y: 18,
    TEAM_NAME: 6,
    SHOT_TYPE: 12,
    SHOT_MADE_FLAG: 20,
    GAME_DATE: 21,
    MINUTES_REMAINING: 8,
    SECONDS_REMAINING: 9,
  };
  const shotsData = data.resultSets[0].rowSet;

  // console.log(shots);
  // const maxX = shots.reduce((a, c) => c[17] > a ? c[17] : a, 0);
  // const minX = shots.reduce((a, c) => c[17] < a ? c[17] : a, 0);
  // console.log(minX, maxX);
  // const maxY = shots.reduce((a, c) => c[18] > a ? c[18] : a, 0);
  // const minY = shots.reduce((a, c) => c[18] < a ? c[18] : a, 0);
  // console.log(minY, maxY);

  var shots = d3.select('#app')
    .append('g')
    .attr('transform', 'translate(250, 50)')
    .selectAll('g')
    .data(shotsData)
    .enter()
    .append('g')
    .attr('transform', (d) => `translate(${d[SCHEMA.LOC_X]}, ${d[SCHEMA.LOC_Y]})`)
    .on("mouseover", (d, i, nodes) => {
      d3.select(nodes[i]).raise()
        .append('text')
        .attr('class', 'info')
        .text(d[SCHEMA.MINUTES_REMAINING])
	.attr('pointer-events', 'none')
    })
    .on("mouseout", (d) => {
      d3.selectAll('.info').remove();
    })

  shots.append('circle')
    .attr('r', '5px')
    .attr('fill', (d) => d[SCHEMA.SHOT_MADE_FLAG] ? 'green' : 'red')
});

