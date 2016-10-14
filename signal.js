(function () {
    (function ($) {

        var $signal_master = $('.signal-master');
        var $signal = $('.signal');
        return $.extend({
            signal:function(options) {
                var optionList={
                    count:5,
                    color:'444,121,514',
                    stroke:true,
                    background:true,
                    delay:200
                };
                option = $.extend(optionList,options);

              var size=0,
                  opacity=0,
                  color = hexToRgb(getRandomColor()),
                  hexColor,
                  delay=0,
                  regEx = new RegExp(/\d{1,3},\d{1,3},\d{1,3}/g);

              if (optionList.color.indexOf('#') >= 0) {
                  hexColor = hexToRgb(optionList.color);
              }
              for (var i = 1; i <= optionList.count; i++) {
                size+=i+50;
                delay+=optionList.delay + i;
                console.log(delay);
                opacity = optionList.count - i ;
                $signal_master.append('<div class="signal signal-'+i+'"></div>');

                if (optionList.color === 'random') {

                    if (optionList.stroke) {
                        $('.signal-'+i+'').css({
                          width:size,
                          height:size,
                          'border':'2px solid rgba('+color+',0.2'+opacity+')',
                          'animation-delay': delay+'ms',
                          '-webkit-animation-delay': delay+'ms'
                        });

                    }
                    if (optionList.background) {
                        $('.signal-'+i+'').css({
                          width:size,
                          height:size,
                          'background-color':'rgba('+color+',0.2'+opacity+')',
                          'animation-delay':delay+'ms',
                          '-webkit-animation-delay':delay+'ms'
                        });
                    }

                } else if(optionList.color.indexOf('#') >= 0) {

                    if (optionList.stroke) {
                        $('.signal-'+i+'').css({
                          width:size,
                          height:size,
                          'border':'2px solid rgba('+hexColor+',0.2'+opacity+')',
                          'animation-delay':delay+'ms',
                          '-webkit-animation-delay':delay+'ms'
                        });

                    }
                    if (optionList.background) {
                        $('.signal-'+i+'').css({
                          width:size,
                          height:size,
                          'background-color':'rgba('+hexColor+',0.2'+opacity+')',
                          'animation-delay':delay+'ms',
                          '-webkit-animation-delay':delay+'ms'
                        });
                    }


                } else if (regEx.test(optionList.color)) {

                    if (optionList.stroke) {
                        $('.signal-'+i+'').css({
                          width:size,
                          height:size,
                          'border':'2px solid rgba('+optionList.color+',0.2'+opacity+')',
                          'animation-delay':delay+'ms',
                          '-webkit-animation-delay':delay+'ms'
                        });

                    }
                    if (optionList.background) {
                        $('.signal-'+i+'').css({
                          width:size,
                          height:size,
                          'background-color':'rgba('+optionList.color+',0.2'+opacity+')',
                          'animation-delay':delay+'ms',
                          '-webkit-animation-delay':delay+'ms'
                        });
                    }

                }
                console.log(regEx.test(optionList.color));
            }
              $signal_master.css({width:size,height:size});



              function hexToRgb(hex){
                  hex = hex.replace('#','');
                  r = parseInt(hex.substring(0,2), 16);
                  g = parseInt(hex.substring(2,4), 16);
                  b = parseInt(hex.substring(4,6), 16);
                  return r + ',' + g + ',' + b;
              }
              function getRandomColor() {
                  var randomColor = ['#3FC7FA','#7061B6','#D4446A','#6FC56F','#DDDF62','#FF8E4B','#575757','#D24F9F','#44FB55'];
                  var rand = Math.floor(Math.random()*randomColor.length);
                  return randomColor[rand];
              }
            }
        });

    })(jQuery);
}).call();
