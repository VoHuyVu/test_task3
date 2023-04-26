var vm = new Vue({
    el: '#container',
    data: {
      result: '',
      times: '*',
      divide: '/',
      plus: '+',
    },
    methods: {
      show(value) {
        this.result += value;
      },
  
      equal() {
        this.result = eval(this.result);
      },
  
      deleteItems() {
        var myArray = this.result.split('');
        if (myArray.length >= 0) {
          var x = myArray.pop();
          var isArray = myArray.join('');
          this.result = isArray;
        }
      },
  
      deleteAll() {
        this.result = '';
      }
    }
  })


  var nav = new Vue ({
    el: '#nav_title',
    data: {
      title: 'VUE MATH',
      pageName1: 'MÁY TÍNH',
      pageName2: 'HÌNH HỌC',
      url1: './index.html',
      url2: './index_page2.html',
      activeColor: '#FFD154',
      activeColor_1: 'white',
      fontSize: 40,
      noneDecoration: 'none',
      listStyle: 'none',
    },
    
  })



