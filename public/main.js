// Generated by CoffeeScript 1.8.0
(function() {
  var Render, above128, calcSurfaceArea, generate, generateRects;

  Render = (function() {
    function Render(elId, pack) {
      var paper, rect, _i, _j, _len, _len1, _ref, _ref1;
      if ($("#isDrawRender").is(":checked")) {
        paper = Raphael(elId, pack.binWidth, pack.binHeight);
        paper.rect(0, 0, pack.binWidth, pack.binHeight).attr("fill", "#000");
        _ref = pack.arrangment;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rect = _ref[_i];
          paper.rect(rect.left, rect.top, rect.width, rect.height).attr("fill", "#" + parseInt(rect.id, 10).toString(16));
        }
        _ref1 = pack.freeRects;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          rect = _ref1[_j];
          paper.rect(rect.left, rect.top, rect.width, rect.height).attr("stroke", "#00ff00");
        }
      }
      $("#details").append("<pre>\n      矩形数量:" + pack.arrangment.length + ";\n      辅助区数量: " + pack.freeRects.length + ";\n      算法：" + pack.heuristic + ";\n      耗时：" + pack.timeSpent + "ms;\n      画布大小：" + pack.binWidth + " x " + pack.binHeight + ";\n      容积率: " + pack.plotRatio + "\n      占地面积: " + pack.occupiedArea + "\n</pre>");
    }

    return Render;

  })();

  above128 = function() {
    return 128 + 128 * Math.random() >>> 0;
  };

  calcSurfaceArea = function(rects) {
    var rect, result, _i, _len;
    result = 0;
    for (_i = 0, _len = rects.length; _i < _len; _i++) {
      rect = rects[_i];
      result += rect.width * rect.height;
    }
    return result;
  };

  generateRects = function() {
    var base, i, n, rects, _i;
    rects = [];
    base = $("#isMulti").is(":checked") ? 1000 * Math.random() >>> 0 : 20;
    n = base + Math.random() * 120 >>> 0;
    for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
      rects.push({
        id: (above128() << 16) + i * 4,
        width: 1 + 256 * Math.random() >>> 0,
        height: 1 + 256 * Math.random() >>> 0
      });
    }
    return rects;
  };

  generate = function() {
    var jobId, rects, totalArea;
    jobId = Date.now();
    rects = generateRects();
    totalArea = calcSurfaceArea(rects);
    $("#input").text("输入: 矩形数量:" + rects.length);
    $.ajax({
      type: "POST",
      url: "/calc",
      data: {
        rects: rects,
        margin: $("#margin:checked").val(),
        padding: $("#padding:checked").val(),
        is_multi: $("#isMulti").is(":checked")
      },
      success: function(results) {
        var i, id, pack, totalTs, _i, _len;
        console.log("@" + jobId + " receive server result:");
        if (results.success !== true) {
          return $("#output").text("输出：遇到问题:calculation failed. reason:" + results.msg);
        }
        if (results.results == null) {
          return $("#output").text("输出：遇到问题:calculation failed. empty results");
        }
        results = results.results;
        if (!Array.isArray(results)) {
          results = [results];
        }
        $("#details").empty();
        $("#canvases").empty();
        totalTs = 0;
        for (i = _i = 0, _len = results.length; _i < _len; i = ++_i) {
          pack = results[i];
          id = "node" + i;
          $("#canvases").append("<div id='" + id + "'></div>");
          new Render(id, pack);
          totalTs += pack.timeSpent;
        }
        $("#output").text("输出：bin 数量：" + results.length + ", 总耗时：" + totalTs + "ms");
        if ($("#isContinue").is(":checked")) {
          setTimeout(generate, 1000);
        }
      },
      dataType: "json"
    });
  };

  $(document).ready(function() {
    return $("#btnGenerate").click(generate);
  });

}).call(this);