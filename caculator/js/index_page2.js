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

var content1_left = new Vue ({
  el: '#app1',
  data: {
    title: 'HÌNH CHỮ NHẬT',
    textAlign: 'center',
    content1_1: 'S = Chiều Dài * Chiều Rộng',
    content1_2: 'C = (Chiều Dài + Chiều Rộng) * 2',
    textColor: '#306165',
    heigh: '',
    witdh: '',
    result1: 0,
    result2: 0,
  },
  methods: {
    rectangle() {
      this.result2 = parseFloat(this.witdh) * parseFloat(this.heigh);
      this.result1 = (parseFloat(this.witdh) + parseFloat(this.heigh)) * 2;
    },
    clearAll() {
      this.witdh = '';
      this.heigh = '';
      this.result1 = 0;
      this.result2 = 0;
    }
  }
})

var content1_right = new Vue ({
  el: '#app2',
  data: {
    title: 'HÌNH VUÔNG',
    textAlign: 'center',
    textColor: '#306165',
    content1_1: 'C = Cạnh * 4',
    content1_2: 'S = Cạnh',
    edge: '',
    result1: 0,
    result2: 0,
  },
  methods: {
    square() {
      this.result1 = parseFloat(this.edge) * 4;
      this.result2 = parseFloat(this.edge) * parseFloat(this.edge);
    },
    clearAll() {
      this.edge = '';
      this.result1 = 0;
      this.result2 = 0;
    }
  }
})

var content2left = new Vue ({
  el: '#app3',
  data: {
    title: 'HÌNH TRÒN',
    textAlign: 'center',
    textColor: '#306165',
    content1_1: 'C = Bán kính * 2 * π',
    content1_2: 'S = π * Bán kính * Bán kính',
    radius: '',
    result1: 0,
    result2: 0,
  },
  methods: {
    circle() {
      this.result1 = parseFloat(this.radius) * 2 * 3.14;
      this.result2 = 3.14 * parseFloat(this.radius) * parseFloat(this.radius);
    },
    clearAll() {
      this.radius = '';
      this.result1 = 0;
      this.result2 = 0;
    }
  }
})

var content2left = new Vue ({
  el: '#app4',
  data: {
    title: 'HÌNH TAM GIÁC',
    textAlign: 'center',
    textColor: '#306165',
    content1_1: 'C = a + b + c',
    content1_2: 'S = 1/2 * a * h',
    edge1: '',
    edge2: '',
    edge3: '',
    edge4: '',
    heigh:'',
    result1: 0,
    result2: 0,
  },
  methods: {
    triangle() {
      this.result1 = parseFloat(this.edge1) + parseFloat(this.edge2) + parseFloat(this.edge3);
      this.result2 = 1/2 * parseFloat(this.edge4) * parseFloat(this.heigh);
    },
    clearAll() {
      this.edge1 = 0;
      this.edge2 = 0;
      this.edge3 = 0;
      this.edge4 = 0;
      this.heigh = 0;
      this.result1 = 0;
      this.result2 = 0;
    }
  }
})

var unit = new Vue ({
  el: '#convert',
  data: {
    colorMessage: 'red',
    unit1: '',
    unit2: '',
    message: ''
  },
  methods: {
    convertUnit() {
      if(this.unit2 == '' && this.unit1 != '') {
        this.unit2 = parseFloat(this.unit1) / 10;
        this.message = '';
      }else if(this.unit1 == '' && this.unit2 != '') {
        this.unit1 = parseFloat(this.unit2) * 10;
        this.message = '';
      }else {
        this.message = 'Đã xảy ra lỗi, vui lòng nhập lại!';
      }
    },

    deleteUnit1() {
      this.unit1 = '';
    },
    deleteUnit2() {
      this.unit2 = '';
    }
  }
})





