const toggleCss = function( ) {
    document.querySelector("#imgCss").onclick = function() {
        if(this.className.match('imgBorde')) {
            this.className = 'img';
        }
        else {
            this.className = 'img imgBorde'
        }
    }
  };
  