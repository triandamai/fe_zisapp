<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-4 mb-1">
                  <label for="c_form_nodisposisi">No.Disposisi</label>
                  <b-form-input
                    type="text"
                    placeholder="No.Disposisi"
                  ></b-form-input>
                </div>
                <div class="col-md-4 mb-1">
                  <label for="c_form_pengirim">Pengirim</label>
                  <b-form-input
                    type="text"
                    placeholder="Pengirim"
                  ></b-form-input>
                </div>
                <div class="col-md-4 mb-1">
                  <label for="c_form_nosurat">No.Surat</label>
                  <b-form-input
                    type="text"
                    placeholder="No.Surat"
                  ></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 ">
                  <label for="datepicker">Tanggal Surat</label>
                  <b-form-datepicker id="datepicker" v-model="value">
                  </b-form-datepicker>
                </div>
                <div class="col-md-4 ">
                  <label for="datepicker">Tertanggal</label>
                  <b-form-datepicker id="datepicker" v-model="value">
                  </b-form-datepicker>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="c_form_kategori">Tujuan</label>
                  <b-form-select
                    v-model="disposisi"
                    :options="tujuan"
                  ></b-form-select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 mb-1">
                  <label for="c_form_muzaki">Mustahik</label>
                  <v-autocomplete
                    :items="mustahik"
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
                <div class="col-md-6 mb-1">
                  <label for="c_form_perihal">Perihal</label>
                  <b-form-input
                    type="text"
                    placeholder="Perihal"
                  ></b-form-input>
                </div>
                <div class="col-md-6 mb-1">
                  <label for="c_form_penerima">Catatan Penerima</label>
                  <b-form-input
                    type="text"
                    placeholder="Catatan Penerima"
                  ></b-form-input>
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
import Pxcard from "./Pxcard.vue";
export default {
  components: { Pxcard },
  data() {
    return {
      periode: null,
      period: [
        { value: null, text: "2017" },
        { value: "", text: "2018" },
        { value: "", text: "2019" },
      ],
      metode: null,
      pembayaran: [
        { value: null, text: "Pilih" },
        { value: "", text: "CASH" },
        { value: "", text: "MUTASI BANK" },
      ],
    };
  },
  methods: {
    onsubmit() {},
  },
};
</script>
