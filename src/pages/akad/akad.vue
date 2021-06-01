<template>
  <div>
    <Breadcrumbs title="Akad" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Master Data Akad</h5>
              <span
                >lorem ipsum dolor sit amet, consectetur adipisicing elit</span
              >
            </div>
            <div class="card-body">
              <!-- KONTENNYA DISINI -->
              <data-table
                :items="data"
                :headers="headers"
                @add="$router.push({ path: '/main/akad/add' })"
                @edit="$router.push({ path: '/main/akad/edit/1' })"
                @delete="onDelete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      headers: [{ text: "NO", value: "id" }],
      data: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {},

    onDelete(data) {
      this.$swal({
        text: this.$t("Delete Message", { who: `${data.nama_akad}` }),
        showCancelButton: true,
        confirmButtonText: "Hapus",
        confirmButtonColor: "#4466f2",
        cancelButtonText: "Batal",
        cancelButtonColor: "#efefef",
        reverseButtons: true,
      }).then(({ value }) => {
        if (value) {
        }
      });
    },
  },
};
</script>