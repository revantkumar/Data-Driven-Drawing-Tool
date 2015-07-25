function drawLine() {

  var data = [{
        "x": 1,
        "y": 5
      }, {
        "x": 20,
        "y": 20
      }];
      var w = 200;
      var h = 200;

      var drag = d3.behavior.drag() // <-A
      .on("drag", move);

      function move(d) {
        var x = d3.event.x,
          y = d3.event.y;

        if (inBoundaries(x, y))
          d3.select(this)
            .attr("transform", function(d) {
              return "translate(" + x + ", " + y + ")";
            });
      }

      // Line creation function configured to do simple linear transformation.
      var lineFunction = d3.svg.line()
        .x(function(d) {
          return d.x;
        })
        .y(function(d) {
          return d.y;
        })
        .interpolate("linear");

      //The SVG Container
      var svgContainer = d3.select('#canvasSVG').attr({
        width: 1000,
        height: 800
      });

      //The line SVG Path we draw
      var lineGraph = svgContainer.append("path")
        .attr("d", lineFunction(data))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none")
        .call(drag);

      function inBoundaries(x, y) {
        return (x >= (0 + 5) && x <= (w - 5)) && (y >= (0 + 5) && y <= (h - 5));
      }

}


/*


  var svg, frameGroup, dragCircle, resizeCircle, dragRect, dragBarTop, dragBarRight, rotateHandler,
    x = 200, y = 200,
    angle = 0,
    r = 40//, height = 5,
    dragR = 6,
    that = this;

    svg = d3.select('#canvasSVG').attr({
        width: 1000,
        height: 800
    });

    frameGroup = svg.append('g')
.attr({
    'pointer-events': 'all',
    'class': 'dummy frameGroup'
});

    dragCircle = frameGroup.append("line")
       .attr("class","vizelement")
       .attr("cx",x)
       .attr("cy",y)
       .attr("r",r)
       .attr("fill","black")
       .style("opacity",0.5)
       .attr('cursor', 'move')
       .call(d3.behavior.drag().origin(function() {
           return {x: 0, y: 0}
       }).on('drag', function() {
          x = x + d3.event.dx;
          y = y + d3.event.dy;        
          positionate();
       }));

    resizeCircle = frameGroup.append("circle")
       .attr("class","circleareadragger")
       .attr("cx",x+r)
       .attr("cy",y)
       .attr("r",dragR)
       .attr("fill","black")
       .call(d3.behavior.drag().on('drag', function() {
        r = r + d3.event.dx;
        if (r < dragR) {
            return;
        }        
        positionate();
    }));
    
    positionate(); 

    function positionate() {
    var translate;

    translate = 'translate(' + x + ',' + y + ')';
    dragCircle.attr('transform', translate);
    dragCircle.attr('r', r);

    translate = 'translate(' + (x + (r-40)) + ',' + y + ')';
    resizeCircle.attr('transform', translate);
    } 
}*/