const app = Vue.createApp({
  data() {
    return {
      boxASel: false,
      boxBSel: false,
      boxCSel: false
    };
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') this.boxASel = !this.boxASel;
      else if (box === 'B') this.boxBSel = !this.boxBSel;
      else if (box === 'C') this.boxCSel = !this.boxCSel;
    }
  }
});

app.mount("#styling");