<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-6 mb-1">
                  <label for="c_form_norek">No.Rekening</label>
                  <b-form-input
                    type="text"
                    placeholder="No.Rekening"
                  ></b-form-input>
                </div>
                <div class="col-md-6 mb-1">
                  <label for="c_form_nama">Nama Bank</label>
                  <b-form-input
                    type="text"
                    placeholder="Nama Bank"
                  ></b-form-input>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-12 ">
                  <label for="c_form_kodeakun">Kode Akun</label>

                  <v-autocomplete
                    :items="kode"
                    item-text="label"
                    auto-select-first
                    return-object
                    outlined
                    required
                    small
                  ></v-autocomplete>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 mb-3">
                  <label for="c_form_kantor">Kantor Layanan</label>
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
      kode: [
        { label: "laki-laki", value: "L" },
        { label: "perempuan", value: "P" },
      ],
      kantorlayanan: [
        { label: "Trisna Cantik", value: "L" },
        { label: "Trisna Manis", value: "P" },
      ],
    };
  },
  methods: {
    onsubmit() {},
  },
};
</script>
