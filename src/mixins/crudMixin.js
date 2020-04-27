import SearchPanel from '@/components/SearchPanel';
import TableActionButtons from '@/components/TableActionButtons';

export const crudMixin = {
  components: {
    SearchPanel,
    TableActionButtons,
  },
  created() {
    // alert('Hello from mixin');
    // Life cycle hooks of mixins are called before that of components
  },
  data() {
    return {
      gridData: [],
      editedIndex: -1,
      totalItemsLength: 0,
      perPage: 5,
      dialog: false,
      pagination: {},
    };
  },
  methods: {
    onPageChange(pageConfig) {
      console.log('page object:', pageConfig);
      this.getAll(pageConfig).then(({ data: resData }) => {
        this.gridData = resData.data;
        this.totalItemsLength = resData.total;
      });
    },
    async save() {
      if (this.editedIndex > -1) {
        const resUpdate = await this.update(this.editedItem);
        if (resUpdate.success === 200 && resUpdate.data.success) {
          alert('Updated!!!');
          const { page, itemsPerPage } = this.pagination;
          const pageConfig = {
            page,
            pageSize: itemsPerPage,
          };
          await this.getAll(pageConfig);
        }
      } else {
        const resInsert = await this.insert(this.editedItem);
        if (resInsert.success === 200 && resInsert.data.success) {
          alert('Saved!!!');
          const { page, itemsPerPage } = this.pagination;
          const pageConfig = {
            page,
            pageSize: itemsPerPage,
          };
          await this.getAll(pageConfig);
        }
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
    async deleteItem(item) {
      const res = await this.$confirm(
        'Are you sure you want to delete this item?',
        {
          title: 'Delete Item',
          color: 'red',
        }
      );
      if (res) {
        this.delete(item.id).then((response) => {
          if (response.status == 200 && response.data.success) {
            const index = this.gridData.indexOf(item);
            this.gridData.splice(index, 1);
          }
        });
      }
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    pagination: {
      async handler() {
        const { page, itemsPerPage } = this.pagination;
        const pageConfig = {
          page,
          pageSize: itemsPerPage,
        };
        let { data: resData } = await this.getAll(pageConfig);
        this.gridData = resData.data;
        this.totalItemsLength = resData.total;
      },
    },
  },
  mounted() {},
};
