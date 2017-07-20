// http://stats.nba.com/stats/shotchartdetail?CFID=33&CFPARAMS=2014-15&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=201935&PlusMinus=N&PlayerPosition=&Rank=N&RookieYear=&Season=2014-15&SeasonSegment=&SeasonType=Regular+Season&TeamID=0&VsConference=&VsDivision=&mode=Advanced&showDetails=0&showShots=1&showZones=0

d3.json('shots2.json', (data) => {
  // console.log(data);
  const headers = data.resultSets[0].headers;
  const shotsData = data.resultSets[0].rowSet;
  // console.log(shotsData);

  const betterData = shotsData.map((d) => ({
    grid_type: d[0],
    game_id: d[1],
    game_event_id: d[2],
    player_id: d[3],
    player_name: d[4],
    team_id: d[5],
    team_name: d[6],
    period: d[7],
    minutes_remaining: d[8],
    seconds_remaining: d[9],
    event_type: d[10],
    action_type: d[11],
    shot_type: d[12],
    shot_zone_basic: d[13],
    shot_zone_area: d[14],
    shot_zone_range: d[15],
    shot_distance: d[16],
    loc_x: d[17],
    loc_y: d[18],
    shot_attempted_flag: d[19],
    shot_made_flag: d[20],
    game_date: d[21],
    htm: d[22],
    vtm: d[23],
  }));
  d3.select('body').append('p').text(JSON.stringify(betterData));

});
