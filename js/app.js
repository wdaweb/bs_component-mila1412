/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 77,
      "density": {
        "enable": true,
        "value_area": 1681.8163616706042
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 2,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "https://images.goodsmile.info/cgm/images/product/20190823/8722/63060/large/8a8c3cd0b37d37217093444fc1d470ee.jpg",
        "width": 100,
        "height": 130
      }
    },
    "opacity": {
      "value": 0.4484843631121611,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1.378963506136388,
        "opacity_min": 0.04055775018048201,
        "sync": true
      }
    },
    "size": {
      "value": 40.04324670644296,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 9.73386004331568,
        "size_min": 14.60079006497352,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 480.51896047731543,
      "color": "#ffffff",
      "opacity": 0.528570856525047,
      "width": 0.8008649341288591
    },
    "move": {
      "enable": true,
      "speed": 3.2034597365154363,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 2082.248828735034,
        "rotateY": 3203.4597365154364
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);