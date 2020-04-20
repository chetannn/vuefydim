export const crudMixin = {
  created() {
    // alert('Hello from mixin');
  },
  data() {
    return {
        gridData: [],
        editedIndex: -1,
        totalItemsLength: 0,
        perPage: 5,
        dialog: false,
    }
  },
  methods: {
    onPageChange(pageConfig) {
      console.log('page object:', pageConfig);
      //ajax request
      this.$store.dispatch('getAll', pageConfig).then(({ data: resData }) => {
        this.gridData = resData.data;
        this.totalItemsLength = resData.total;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.gridData[this.editedIndex], this.editedItem);
      } else {
        this.$store.dispatch('save', this.editedItem).then(() => {
          alert('saved!!!');
        });
      }
      this.close();
    },
    editItem(item) {
      this.editedIndex = this.gridData.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    deleteItem(item) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.$store.dispatch('delete', item.id).then((res) => {
          if (res.status == 200 && res.data.success) {
            const index = this.gridData.indexOf(item);
            this.gridData.splice(index, 1);
          }
        });
      }
    },
  },
};
