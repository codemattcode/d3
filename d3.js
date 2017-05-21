var canvas = d3.select('body')
    var bananaData = [10,20,30,50];
    
    var canvas = d3.select('.bananaBox')
     .append('svg')
     .attr('width', 500)
     .attr('height', 500);
    
    var bananas = canvas.selectAll('circle')
    .data(bananaData)
    .enter()
      .append('circle')
      .attr('fill', 'yellow')
      .attr('cx', function(d,i){
        return d = (i*100);
      })
    .attr('cy', function(d){
      return d;
    })
    .attr('r', function(d){
      return d;
    });



    function scaling(){
        var graphData = [10,400],
            w         = 400,
            h         = 400;
        var canvas = d3.select('.graphContainer')
        .append('svg')
        .attr('width', w)
        .attr('height',h);

        var graphBars = canvas.selectAll('rect')
        .data(graphData)
        .enter()
        .append('rect')
        .attr('fill', 'blue')
        .attr('width', function(d){
            return d;
        })
        .attr('height', 20)
        .attr('y', function(d,i){
            return i * 50;
        })
    }