 
 function CanvasEstrela(){
    var canvas = document.createElement( 'canvas' ),
        ctx = canvas.getContext( '2d' ),
        fl = 300,
        count = 150,
        points = [],
        startSpeed = 10,
        tick = 0,
        width,
        height,
        bounds,
        vp,
        mouse,
        canvasOffset;
    
    function rand( min, max ) {
      return Math.random() * ( max - min ) + min;
    }
    
    function norm( val, min, max ) {
      return ( val - min ) / ( max - min );
    }
    
    function resetPoint( p, init ) {
      p.z = init ? rand( 0, bounds.z.max ) : bounds.z.max;
      p.x = rand( bounds.x.min, bounds.x.max ) / ( fl / ( fl + p.z ) );
      p.y = rand( bounds.y.min, bounds.y.max ) / ( fl / ( fl + p.z ) );
      p.ox = p.x;
      p.oy = p.y;
      p.oz = p.z;
      p.vx = 0;
      p.vy = 0;
      p.vz = rand( -1, -10 ) + startSpeed;
      p.ax = 0;
      p.ay = 0;
      p.az = 0;
      p.s = 0;
      p.sx = 0;
      p.sy = 0;
      p.os = p.s;
      p.osx = p.sx;
      p.osy = p.sy;
      p.hue = rand( 160, 290 );
      p.lightness = rand( 70, 100 );
      p.alpha = 0;
      return p;
    }
    
    function create() {
      vp = {
        x: width / 2,
        y: height / 2
      };
      mouse = {
        x: vp.x,
        y: vp.y,
        down: false
      };
      bounds = {
          x: { min: -vp.x, max: width - vp.x },
          y: { min: -vp.y, max: height - vp.y },
          z: { min: -fl, max: 1000 }
      };
    }
    
    function update() {
      if( mouse.down ) {
        if( startSpeed > -30 ) {
          startSpeed -= 0.1;
        } else {
          startSpeed = -30;
        }
      } else {
        if( startSpeed < 0 ) {
          startSpeed += 1;
        } else {
          startSpeed = 0;
        }
      }
      
      vp.x += ( ( width / 2 - ( mouse.x - width / 2 ) ) - vp.x ) * 0.025;
      vp.y += ( ( height / 2 - ( mouse.y - height / 2 ) ) - vp.y ) * 0.025;
      bounds = {
          x: { min: -vp.x, max: width - vp.x },
          y: { min: -vp.y, max: height - vp.y },
          z: { min: -fl, max: 1000 }
      };  
      
      if( points.length < count ) {
        points.push( resetPoint( {} ) );
      }
      var i = points.length;
      while( i-- ) {
        var p = points[ i ];
        p.vx += p.ax;
        p.vy += p.ay;
        p.vz += p.az;
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        if( mouse.down ) {
          p.az = -0.5;
        }
        if( 
          p.sx - p.sr > bounds.x.max ||
          p.sy - p.sr > bounds.y.max ||
          p.z > bounds.z.max ||
          p.sx + p.sr < bounds.x.min ||
          p.sy + p.sr < bounds.y.min ||
          p.z < bounds.z.min
        ) {
          resetPoint( p );
        }
        p.ox = p.x;
        p.oy = p.y;
        p.oz = p.z;
        p.os = p.s;
        p.osx = p.sx;
        p.osy = p.sy;
      }
    }
    
    function render() {
      ctx.save();
      ctx.translate( vp.x, vp.y );
      ctx.clearRect( -vp.x, -vp.y, width, height );
      ctx.globalAlpha = 0.5;
      var i = points.length;
      while( i-- ) {
        var p = points[ i ];    
        p.s = fl / ( fl + p.z );
        p.sx = p.x * p.s;
        p.sy = p.y * p.s;
        p.alpha = ( bounds.z.max - p.z ) / ( bounds.z.max / 2 );
        ctx.beginPath();
        ctx.moveTo( p.sx, p.sy );
        ctx.lineTo( p.osx, p.osy );
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, ' + p.lightness + '%, ' + p.alpha + ')';
        ctx.stroke();
      }
      ctx.restore();
    }
    
    function resize() {
    
      width = canvas.width = document.documentElement.clientWidth;
      height = canvas.height = Math.max(
        document.documentElement.clientHeight,
        document.body.scrollHeight
      );
      canvasOffset = { x: canvas.offsetLeft, y: canvas.offsetTop };
       
     
    }
    
    // function mousemove( e ) {
    //   mouse.x = e.pageX - 0.05;
    //   mouse.y = e.pageY - 0.05;
    // }
    
    // // Warp
    function mousedown() {
      mouse.down = true;
    }
    
    function mouseup() {
      mouse.down = false;
    }
    
    // Creating loop
    function loop() {
      requestAnimationFrame( loop );
      update();
      render();
      tick++;
    }
    
    
      window.addEventListener("mouseup", function(event) {
        canvas.dispatchEvent(new MouseEvent("mouseup"));
      });
    
      window.addEventListener("mousedown", function(event) {
        canvas.dispatchEvent(new MouseEvent("mousedown"));
      });
    
      window.addEventListener( 'resize', resize );
    
      // canvas.addEventListener( 'mousemove', mousemove );
      canvas.addEventListener( 'mousedown', mousedown );
      canvas.addEventListener( 'mouseup', mouseup );
      document.body.appendChild( canvas );
      resize();
      create();
      loop();
     }
    
     CanvasEstrela();
    
    
    
    $("#comprar").on('click',(event) => {
          event.preventDefault();
        
        gtag_report_conversion(window.location.href);
        let titles = document.getElementById("title").textContent.replaceAll(" ", "").trim()
    
        if (titles == "md5" || titles == "MD5") {
            md5()
        }
        else if (titles == "COACH") {
            coach()
        }
        else {
            elojobDuo()
        }
      
    
    })
    
    
    
    function elojobDuo() {
    
        let titles = document.getElementById("title").textContent.toLocaleLowerCase().trim()
        let ch = id("choice").textContent.toLocaleLowerCase().trim()
        let value = id("valor").textContent.replaceAll("POR", "Por").trim()
    
        let lga = id("ligaAtual").value.toLocaleLowerCase()
        let lgd = id("ligaDesejada").value.toLocaleLowerCase()
        let dva = id("divisaoAtual").value.toLocaleLowerCase().replaceAll(" ", "").trim()
        let dvd = id("divisaoDesejada").value.toLocaleLowerCase().replaceAll(" ", "").trim()
    
        lga = lga[0].toUpperCase() + lga.substr(1);
        lgd = lgd[0].toUpperCase() + lgd.substr(1);
    
    
        ch = ch[0].toUpperCase() + ch.substr(1);
        titles = titles[0].toUpperCase() + titles.substr(1);
    
    
        var text
    
    
    
        if ((lga.toLowerCase() == 'mestre' || lga.toLowerCase() == 'graomestre' || lga.toLowerCase() == 'desafiante' || lga.toLowerCase() == "radiante") && (lgd.toLowerCase() == 'mestre' || lgd.toLowerCase() == 'graomestre' || lgd.toLowerCase() == 'desafiante' || lgd.toLowerCase() == "radiante")) {
    
            if (lga.toLocaleLowerCase() == 'graomestre') {
                lga = "Grão Mestre"
            }
            else if (lgd.toLocaleLowerCase() == 'graomestre') {
                lgd = "Grão Mestre"
            }
    
            text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20para%20' + ch + ',%20atualmente%20' + lga + ' %20e%20quero%20chegar%20no%20' + lgd + '%20.' + value
        }
    
        else if (lgd.toLowerCase() == 'mestre' || lgd.toLowerCase() == 'graomestre' || lgd.toLowerCase() == 'desafiante' || lgd.toLowerCase() == "radiante") {
    
            if (lga.toLocaleLowerCase() == 'graomestre') {
                lga = "Grão Mestre"
            }
            else if (lgd.toLocaleLowerCase() == 'graomestre') {
                lgd = "Grão Mestre"
            }
    
            text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20para%20' + ch + ',%20atualmente%20' + lga + '%20' + dva + '%20e%20quero%20chegar%20no%20' + lgd + '%20.' + value
        }
    
        else if (lga.toLowerCase() == 'mestre' || lga.toLowerCase() == 'graomestre' || lga.toLowerCase() == 'desafiante' || lga.toLowerCase() == "radiante") {
    
            if (lga.toLocaleLowerCase() == 'graomestre') {
                lga = "Grão Mestre"
            }
            else if (lgd.toLocaleLowerCase() == 'graomestre') {
                lgd = "Grão Mestre"
            }
    
            text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20para%20' + ch + ',%20atualmente%20' + lga + ' %20e%20quero%20chegar%20no%20' + lgd + '%20.' + value
        }
    
        else {
    
            if (lga.toLocaleLowerCase() == 'graomestre') {
                lga = "Grão Mestre"
            }
            else if (lgd.toLocaleLowerCase() == 'graomestre') {
                lgd = "Grão Mestre"
            }
            text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20para%20' + ch + ',%20atualmente%20' + lga + '%20' + dva + '%20e%20quero%20chegar%20no%20' + lgd + '%20' + dvd + '. ' + value
    
        }
    
    
        var url = `https://${moblie()}.whatsapp.com/send?1=pt_BR&phone=5571996952997&text=`.concat(text);
    
        window.open(url);
    
    
    
    
    }
    
    function md5() {
        let titles = document.getElementById("title").textContent.toLocaleLowerCase().trim()
        let ch = id("choice").textContent.toLocaleLowerCase().trim()
        let value = id("valor").textContent.replaceAll("POR", "Por").trim()
    
    
        let lga = id("ligaAtual").value.toLocaleLowerCase().replaceAll(" ", "").trim()
    
    
        lga = lga[0].toUpperCase() + lga.substr(1);
    
    
    
        ch = ch[0].toUpperCase() + ch.substr(1);
        titles = titles[0].toUpperCase() + titles.substr(1);
    
    
        var text
    
    
        if (lga.toLocaleLowerCase() == 'graomestre') {
            lga = "Grão Mestre"
        }
    
        text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20de ' + ch + "%20 " + value + '%20. O%20meu%20elo%20era%20 ' + lga
    
    
        var url = `https://${moblie()}.whatsapp.com/send?1=pt_BR&phone=5571996952997&text=`.concat(text);
        window.open(url);
    
    
    }
    
    function coach() {
        let titles = document.getElementById("title").textContent.toLocaleLowerCase().trim()
        let ch = id("choice").textContent.toLocaleLowerCase().trim()
        let value = id("valor").textContent.replaceAll("POR", "Por").trim()
    
    
        let lga = id("ligaAtual").value.toLocaleLowerCase().replaceAll(" ", "").trim()
    
    
        lga = lga[0].toUpperCase() + lga.substr(1);
    
    
    
        ch = ch[0].toUpperCase() + ch.substr(1);
        titles = titles[0].toUpperCase() + titles.substr(1);
    
    
        var text
    
    
    
        text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20de ' + ch + "%20de " + lga + " partidas%20" + value
    
    
    
        var url = `https://${moblie()}.whatsapp.com/send?1=pt_BR&phone=5571996952997&text=`.concat(text);
        window.open(url);
    
    
    
    }
    
    function id(id) {
        return document.getElementById(id)
    }
    
    function moblie() {
    
        window.mobileCheck = function mobileCheck() {
            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
    
    
        if (mobileCheck() == false) {
            return type = "web"
        } else {
            return type = "api"
        }
    
    }
    