//HELPERS

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  function getMode(arr) {
    return arr.sort((a, b) =>
      arr.filter(v => v === a).length -
      arr.filter(v => v === b).length
    ).pop();
  }
  
  function getAvgOfArr(arr) {
    let sum = arr.reduce((previous, current) => current += previous);
    return Math.floor(sum / arr.length);
  }
  
  function getHeightInFeet(heightInches) {
    if (heightInches % 12 === 0) {
      return (heightInches / 12) + ' feet';
    } else {
      let feet = Math.floor(heightInches / 12);
      let inches = heightInches % 12;
  
      return feet + "'" + inches + '"';
    }
  }
  
  function isBigEnough(value) {
    if ((value.key >= userInput[0]) && (value.key <= userInput[1])) {
      return true;
    };
  }
  
  var parser = d3.time.format("%Y-%m-%d");
  var formatter = new Intl.DateTimeFormat("en", {
    month: "long"
  });
  
  
  //ENDS HELPERS
  
  //filter everything by the number of years they have in the WNBA 
  var userInput = [0, 20];  
  var ageRanges = [[0, 3], [4, 6], [7, 9], [10, 20], [0, 20]];
  var buttonContainer = document.getElementsByClassName("container__buttons")[0];

  function appendButtons(){

    for(var i=0; i<ageRanges.length; i++) {
      var button = document.createElement("button");
      button.dataset.value = ageRanges[i];
      
      if (i === 3) {
        button.innerHTML = "10+ years";
      } else if (i === 4) {
        button.innerHTML = "all";
      } else {
        button.innerHTML = ageRanges[i][0] + '-' + ageRanges[i][1] + " years";
      }

      button.className = "btn";
      buttonContainer.appendChild(button);

      button.addEventListener("click", function (e) {
        userInput = (e.originalTarget.dataset.value).split(",");
        updateData()
      });
    
    }
  }

  appendButtons()
    
  // need to get the both of the data and merge returning a players arr
    
  function updateData() {
  
    d3.json("/data/players.json", function (data) {

      function findPropertyMode(property) {
        return getMode(makeArray(property));
      }
  
      var players = data;
  
      var playersArr = [].concat.apply([], players);
  
      //organizes by years
      var playersByYearsOfExperience = d3.nest()
        .key(function (d) {
          return d.y
        })
        .entries(playersArr);
  
      var filteredPlayers = playersByYearsOfExperience.filter(isBigEnough);
  
      //make arrays from json keys
      function makeArray(property) {
        var arr = filteredPlayers.map(function (year) {
          return year.values.map(function (player) {
            return player[property]
          })
        });
        return [].concat.apply([], arr);
      }
  
      function getAvgAge() {
        var playerBirthdays = makeArray('dob').map(function (dob) {
          return parser.parse(dob)
        })
    
        var playerAges = playerBirthdays.map(function (dob) {
          if (dob) {
            return calculateAge(dob)
          }
        })
  
        return playerAges
      }
  
      function getBirthdayData() {
   
        var arr = getPlayersArr();
  
        arr.forEach(function(item){
           item.birthMonth = formatter.format(parser.parse(item.dob))
           item.dob = parser.parse(item.dob);
        })
  
        arr.sort(sortByDateAscending);
  
        function sortByDateAscending(a, b) {
          // Dates will be cast to numbers automagically:
          return a.dob.getMonth() - b.dob.getMonth();
        }
      
        return getCountByProp(arr, 'birthMonth', 0);
  
      }
  
      function getAvgHeight() {
        var playersHeights = makeArray('ht');
  
        //iterate through each player playersHeights  
        var heightsInInches = playersHeights.map(function (height) {
          var heightArr = height.split('-')
          var inches = ((heightArr[0] * 12) + (heightArr[1] * 1))
  
          return inches
        })
  
        var avgHeightInches = getAvgOfArr(heightsInInches);
  
        return getHeightInFeet(avgHeightInches);
      }
  
      function getExperienceData() {
        var arr = getPlayersArr();
  
        arr.sort(function (a, b) {
          return a.y - b.y;
        });
  
        return getCountByProp(arr, 'y', 0);
      }
  
      function filterArrByCount(arr, countMin) {
        var newArr = [];
  
        arr.map(function (item) {
  
          if (item.values.length > countMin) {
            newArr.push(item);
          }
        })
  
        return newArr;
      }
  
      function filterUniversities() {
  
        var top5University = [];
        var other = {
          key: "Other",
          values: []
        };
  
        getCountByProp(getPlayersArr(), 'hcc', 0).map(function (university) {
  
          university.values.map(function (uni) {
            if (uni.values.length > 2) {
              top5University.push(uni);
            } else {
              other.values.push(uni)
            }
          })
  
        })
  
        top5University.push(other);
  
        return top5University;
      }
  
      function appendPlayerNamesFromPID(pid, parentChart) {
  
        const playerIDs = pid.map(values => values.key)
  
        var newArr = [];
  
        playerIDs.forEach(function (id) {
          newArr.push(playersArr.filter(player => player.pid == id))
        })
  
        d3.selectAll(".names p").remove();
  
        newArr.map(function (player) {
          player.map(function (person) {
            d3.select(parentChart + ".names").append("p").html(
              `<a href="http://www.wnba.com/player/${person.fn}-${person.ln}/#/career" <p>  ${person.fn} ${person.ln}, ${person.tc} ${person.tn} </p></a>`
            )
          })
        })
  
      }
  
      function getCountByProp(arr, prop, countMin) {
    
        var playersByProp = d3.nest()
          .key(function (d) {
            return d[prop];
          })
          .key(function (d) {
            return d.pid;
          })
          .rollup(function (v) {
            return v.length
          })
          .entries(arr);
  
        return [{
          key: `Players by ${prop}`,
          values: filterArrByCount(playersByProp, countMin)
        }]
  
      }
  
      function getPlayersArr() {
  
        var arr = [];
  
        filteredPlayers.forEach(function (year) {
          year.values.map(function (player) {
            arr.push(player)
          })
        })
  
        return arr
  
      }
  
      //NV CHARTS
      function makeBarChart(parentChart) {
        var chart = nv.models.discreteBarChart()
          .x(function (d) {
            return d.key
          })
          .y(function (d) {
            return d.values.length
          })
          // .rotateLabels(-45)
          .staggerLabels(true); //TODO actually just rotate labels
          // .showValues(true);
  
          // console.log(chart.options());
          
          // chart.options().rotateLabels(-45);
          chart.margin().left = 20;
          chart.margin({bottom: 60});
  
        chart.valueFormat(d3.format('.0f'));
        chart.yAxis.tickFormat(d3.format('.0f'));
        chart.noData("Not enough players for duplicates, sorry!");
  
        chart.discretebar.dispatch.on("elementClick", function (e) {
  
          chartOnClick(parentChart, e)
  
          chart.update();
  
        });
  
        return chart
      }
  
      function chartOnClick(parentChart, e) {
  
        // console.log(e);
  
        appendPlayerNamesFromPID(e.data.values, parentChart);
  
        d3.selectAll('.grid')
          .classed('names--active', false)
  
        d3.select(parentChart + '.grid')
          .classed('names--active', true)
  
        
  
        if(parentChart === '.chart__universities') {
  
          d3.select(parentChart + ' svg')
          .attr('width', "600")
          .attr('height', "600");
  
        } else {
  
          d3.select(parentChart + ' svg')
          .attr('width', "1000")
          .attr('height', "500");
        }
  
  
        window.dispatchEvent(new Event('resize'));
  
      }
  
      //first name chart
      nv.addGraph(function () {
        var chart = makeBarChart('.chart__firstnames');
  
        d3.select('.chart__firstnames svg')
          .datum(getCountByProp(getPlayersArr(), 'fn', 1))
          .call(chart);
  
        nv.utils.windowResize(chart.update);
  
        return chart;
      })
  
      //last name chart
      nv.addGraph(function () {
        var chart = makeBarChart('.chart__lastnames');
  
        d3.select('.chart__lastnames svg')
          .datum(getCountByProp(getPlayersArr(), 'ln', 1))
          .call(chart);
  
        nv.utils.windowResize(chart.update);
  
        return chart;
      })
  
      //university chart
      nv.addGraph(function () {
        var chart = nv.models.pieChart()
          .x(function (d) {
            return d.key
          })
          .y(function (d) {
            return d.values.length
          })
          .showLabels(true)
          .labelsOutside(true)
          .labelSunbeamLayout(true)
          .showLegend(false);
  
          chart.valueFormat(d3.format('.0f'));
          chart.pie.dispatch.on("elementClick", function (e) {
            chartOnClick('.chart__universities', e)
            chart.update(); 
          });
  
        d3.select(".chart__universities svg")
          .datum(filterUniversities())
          .call(chart);
  
        nv.utils.windowResize(chart.update);
  
        return chart;
      });
  
      //experience chart
      nv.addGraph(function () {
  
        var chart = makeBarChart('.chart__experience');
  
        chart.discretebar.dispatch.on("elementClick", function (e) {
          chartOnClick('.chart__experience', e)
          chart.update(); 
        });
  
        d3.select('.chart__experience svg')
          .datum(getExperienceData())
          .call(chart);
  
        nv.utils.windowResize(chart.update);
  
        return chart;
      })
  
      //birth month chart
      nv.addGraph(function () {
        var chart = makeBarChart('.chart__birthmonth');
  
        chart.discretebar.dispatch.on("elementClick", function (e) {
          chartOnClick('.chart__birthmonth', e)
          chart.update(); 
        });
  
  
        d3.select('.chart__birthmonth svg')
          .datum(getBirthdayData())
          .call(chart);
  
        nv.utils.windowResize(chart.update);
  
        return chart;
      })
  
      //Avgs 
      var avgPlayerAge = getAvgOfArr(getAvgAge());
      var avgHeight = getAvgHeight();
      var modePlayerFirstNames = findPropertyMode('fn');
      var modePlayerLastNames = findPropertyMode('ln');
      var modePlayerSchool = findPropertyMode('hcc');
      var modePlayerNumber = findPropertyMode('num');
      var playersYearsExperience = makeArray('y');
      var playersYearsExpeienceAvg = getAvgOfArr(playersYearsExperience);
  
      //append Avgs to DOM
      d3.select(".age").text(avgPlayerAge);
      d3.select(".height").text(avgHeight);
      d3.select(".college").text(modePlayerSchool);
      d3.select(".first-name").text(modePlayerFirstNames);
      d3.select(".last-name").text(modePlayerLastNames);
      d3.select(".experience").text(playersYearsExpeienceAvg);
      
      
    });
  }
  
  updateData()
  