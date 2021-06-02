<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-4 mb-1">
                  <label for="c_form_first_name">NPWZ</label>
                  <b-form-input type="text" placeholder="NPWP"></b-form-input>
                </div>
                <div class="col-md-6 mb-">
                  <label for="c_form_last_name">NPWP</label>
                  <b-form-input type="text" placeholder="NPWP"></b-form-input>
                  <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="c_form_city">NIK</label>
                  <b-form-input type="text" placeholder="NIK"></b-form-input>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="c_form_nama">Nama</label>
                  <b-form-input type="text" placeholder="Nama"></b-form-input>
                  <b-form-invalid-feedback
                    >Please provide a valid state.</b-form-invalid-feedback
                  >
                </div>
                <div class="col-md-2 mb-3">
                  <label for="c_form_jeniskelamin">Jenis Kelamin</label>
                  <b-form-select v-model="select" :options="jk"></b-form-select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-10 mb-3">
                  <label for="c_form_alamat">Alamat</label>
                  <b-form-input type="text" placeholder="Alamat"></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="c_form_telepon">Telepon</label>
                  <b-form-input
                    type="text"
                    placeholder="Telepon"
                  ></b-form-input>
                </div>
                <div class="col-md-2 mb-3">
                  <label for="c_form_kategori">Kategori</label>
                  <b-form-select
                    v-model="select"
                    :options="kategori"
                  ></b-form-select>
                </div>
                <div class="col-md-2 mb-3">
                  <label for="c_form_kategori">Aktif</label>
                  <b-form-select
                    v-model="select"
                    :options="aktif"
                  ></b-form-select>
                </div>
              </div>
              <b-button type="submit" variant="primary">Simpan</b-button>
            </b-form>
          </div>
        </px-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jeniskelamin: null,
      jk: [
        { value: null, text: "Pilih" },
        { value: "1", text: "Laki-laki" },
        { value: "2", text: "Perempuan" },
        { value: "AKSI", text: "action" },
      ],
      kategori: null,
      kategori: [
        { value: null, text: "Pilih" },
        { value: "1", text: "Individu" },
        { value: "2", text: "Kelompok" },
        { value: "AKSI", text: "action" },
      ],
      aktif: null,
      aktif: [
        { value: null, text: "Pilih" },
        { value: "1", text: "Individu" },
        { value: "2", text: "Kelompok" },
        { value: "AKSI", text: "action" },
      ],
    };
  },
  methods: {
    onsubmit() {},
  },
};
</script>
