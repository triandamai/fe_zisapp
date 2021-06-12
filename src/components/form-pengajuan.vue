<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-12 mb-1">
                  <label for="c_form_no-pengajuan">No. Pengajuan</label>
                  <b-form-input
                    type="text"
                    placeholder="No. Pengajuan"
                  ></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-1">
                  <label for="c_form_kode">Kode Mustahik</label>
                  <v-autocomplete
                    :items="kodemustahik"
                    item-text="label"
                    auto-select-first
                    return-object
                    outlined
                    required
                    small
                  >
                  </v-autocomplete>
                </div>
                <div class="col-md-6 mb-1">
                  <label for="c_form_nama">Nama Muzaki</label>
                  <v-autocomplete
                    :items="namamuzaki"
                    item-text="label"
                    auto-select-first
                    return-object
                    outlined
                    required
                    small
                  >
                  </v-autocomplete>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 ">
                  <label for="c_form_kegiatan">Kegiatan</label>
                  <b-form-input
                    type="text"
                    placeholder="Kegiatan"
                  ></b-form-input>
                </div>
                <div class="col-md-6 ">
                  <label for="c_form_jumlah">Jumlah</label>
                  <b-form-input type="text" placeholder="Jumlah"></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 ">
                  <label for="c_form_jenis">Jenis</label>

                  <b-form-select
                    v-model="jenis"
                    :options="pengajuan"
                  ></b-form-select>
                </div>
                <div class="col-md-6 ">
                  <label for="c_form_asnaf">Asnaf</label>

                  <b-form-select
                    v-model="asnaf"
                    :options="jenisasnaf"
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
      jenis: null,
      pengajuan: [
        { value: null, text: "Pilih" },
        { value: "", text: "Konsumtif" },
        { value: "", text: "Produktif" },
      ],
      asnaf: null,
      jenisasnaf: [
        { value: null, text: "Pilih" },
        { value: "", text: "Fakir-Miskin" },
        { value: "", text: "Riqob" },
        { value: "", text: "Ibnu Sabil" },
        { value: "", text: "Ghorimin" },
        { value: "", text: "Amil" },
        { value: "", text: "Fisabilillah" },
        { value: "", text: "lain-lain" },
      ],
    };
  },
  methods: {
    onsubmit() {},
  },
};
</script>
