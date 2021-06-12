<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-12 mb-1">
                  <label for="c_form_muzaki">Muzaki</label>
                  <v-autocomplete
                    :items="muzaki"
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
                  <label for="c_form_norek">No.Rekening</label>
                  <v-autocomplete
                    :items="norek"
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
                  <label for="c_form_bank">Bank</label>
                  <v-autocomplete
                    :items="bank"
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
                <div class="col-md-3 ">
                  <label for="c_form_nobukti">No Bukti Fisik</label>
                  <b-form-input
                    type="text"
                    placeholder="No Bukti Fisik"
                  ></b-form-input>
                </div>
                <div class="col-md-3 ">
                  <label for="c_form_periode">Periode</label>

                  <b-form-select
                    v-model="periode"
                    :options="period"
                  ></b-form-select>
                </div>
                <div class="col-md-3 ">
                  <label for="datepicker">Tanggal Donasi</label>
                  <b-form-datepicker id="datepicker" v-model="value">
                  </b-form-datepicker>
                </div>
                <div class="col-md-3 ">
                  <label for="c_form_periode">Metode Pembayaran</label>

                  <b-form-select
                    v-model="metode"
                    :options="pembayaran"
                  ></b-form-select>
                </div>
              </div>
            </b-form>
          </div>
        </px-card>

        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-12 mb-1">
                  <label for="c_form_program">Program</label>
                  <v-autocomplete
                    :items="program"
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
                  <label for="c_form_keterangan">Keterangan</label>
                  <b-form-input
                    type="text"
                    placeholder="Keterangan"
                  ></b-form-input>
                </div>
                <div class="col-md-6 ">
                  <label for="c_form_jumlah">Jumlah</label>
                  <b-form-input type="text" placeholder="Jumlah"></b-form-input>
                </div>
              </div>
              <data-table
                :items="data"
                :headers="headers"
                :hidesimpan="true"
                @add="$router.push({ path: '/main/mustahik/add' })"
                @edit="$router.push({ path: '/main/mustahik/edit' })"
                @delete="onDelete"
              />
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
