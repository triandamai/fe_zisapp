<template>
  <div>
    <Breadcrumbs title="Kantor Layanan" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Data Kantor Layanan</h5>
              <span
                >lorem ipsum dolor sit amet, consectetur adipisicing elit</span
              >
            </div>
            <div class="card-body">
              <!-- TAMBAHIN KONTENYA DISINI -->
              <data-table
                :items="data"
                :headers="headers"
                @add="$router.push({ path: '/main/kantorlayanan/add' })"
                @edit="$router.push({ path: '/main/kantorlayanan/edit' })"
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
      headers: [
        { text: "NO", value: "id" },
        { text: "Alamat", value: "alamat" },
        { text: "Nama", value: "nama" },
        { text: "AKSI", value: "action" },
      ],
      data: [{ id: "1", alamat: "alamat", nama: "nama" }],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {},

    onDelete(data) {
      this.$swal({
        text: this.$t("Delete Message", { who: "" }),
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
