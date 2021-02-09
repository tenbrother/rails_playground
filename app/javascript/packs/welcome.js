Lasca.load(Vue, "home", {
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    click: function ($event) {
      this.count++;
    }
  }
})