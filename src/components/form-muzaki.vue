<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="c_form_first_name">NPWZ</label>
                  <b-form-input type="text" placeholder="NPWZ"></b-form-input>
                </div>
                <div class="col-md-6 mb-3">
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
                <div class="col-md-4 mb-3">
                  <label for="c_form_jeniskelamin">Jenis Kelamin</label>
                  <b-form-select
                    v-model="jeniskelamin"
                    :options="jk"
                  ></b-form-select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="c_form_alamat">Alamat</label>
                  <b-form-input type="text" placeholder="Alamat"></b-form-input>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="c_form_profesi">Profesi</label>
                  <b-form-input
                    type="text"
                    placeholder="profesi"
                  ></b-form-input>
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
                <div class="col-md-4 mb-3">
                  <label for="c_form_kategori">Kategori</label>
                  <b-form-select
                    v-model="kategori"
                    :options="ktg"
                  ></b-form-select>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="c_form_kategori">Status</label>
                  <b-form-select
                    v-model="statusmuzaki"
                    :options="status"
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
      jeniskelamin: 9,
      jk: [
        { value: "9", text: "Pilih" },
        { value: "1", text: "Laki-laki" },
        { value: "2", text: "Perempuan" },
      ],
      kategori: 9,
      ktg: [
        { value: "9", text: "Pilih" },
        { value: "1", text: "Individu" },
        { value: "2", text: "Entitas" },
      ],
      statusmuzaki: 9,
      status: [
        { value: "9", text: "Pilih" },
        { value: "1", text: "Aktif" },
        { value: "2", text: "Tidak Aktif" },
      ],
    };
  },
  methods: {
    onsubmit() {},
  },
};
</script>
