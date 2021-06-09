<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="c_form_kode">Kode </label>
                  <b-form-input
                    type="text"
                    placeholder="Kode Mustahik"
                  ></b-form-input>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="c_form_nama">Nama</label>
                  <b-form-input type="text" placeholder="Nama"></b-form-input>
                  <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="c_form_alamat">Alamat</label>
                  <b-form-input type="text" placeholder="Alamat"></b-form-input>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="c_form_telepon">Telepon</label>
                  <b-form-input
                    type="text"
                    placeholder="Telepon"
                  ></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="c_form_kategori">Kategori</label>
                  <b-form-select
                    v-model="ktgmustahik"
                    :options="kategori"
                  ></b-form-select>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="c_form_status">Status</label>
                  <b-form-select
                    v-model="statusmustahik"
                    :options="status"
                  ></b-form-select>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="c_form_status">Asnaf</label>
                  <b-form-select
                    v-model="mustasnaf"
                    :options="asnaf"
                  ></b-form-select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 mb-1">
                  <label for="c_form_kantorlayanan">Kantor Layanan </label>
                  <v-autocomplete
                    :items="kantorlayanan"
                    item-text="label"
                    auto-select-first
                    return-object
                    outlined
                    required
                    small
                  ></v-autocomplete>
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
      ],
      kategori: null,
      kategori: [
        { value: null, text: "Pilih" },
        { value: "1", text: "Individu" },
        { value: "2", text: "Kelompok" },
      ],
      aktif: null,
      aktif: [
        { value: null, text: "Pilih" },
        { value: "1", text: "Individu" },
        { value: "2", text: "Kelompok" },
      ],
    };
  },
  methods: {
    onsubmit() {},
  },
};
</script>
