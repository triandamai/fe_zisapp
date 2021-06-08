<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-4 mb-1">
                  <label for="c_form_norek">No.Rekening</label>
                  <b-form-input
                    type="text"
                    placeholder="No.Rekening"
                  ></b-form-input>
                </div>
                <div class="col-md-4 mb-1">
                  <label for="c_form_nama">Nama Bank</label>
                  <b-form-input
                    type="text"
                    placeholder="Nama Bank"
                  ></b-form-input>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-4 mb-1">
                  <label for="c_form_kodeakun">Kode Akun</label>
                  <b-form-input
                    type="text"
                    placeholder="Kode Akun"
                  ></b-form-input>
                </div>
                <div class="col-md-4 mb-1">
                  <label for="c_form_namaakun">Nama Akun</label>
                  <b-form-input
                    type="text"
                    placeholder="Nama Akun"
                  ></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-1">
                  <label for="c_form_nolayanan">Nomor Layanan</label>
                  <b-form-input
                    type="text"
                    placeholder="Nomor Layanan"
                  ></b-form-input>
                </div>
                <div class="col-md-4 mb-1">
                  <label for="c_form_kantor">Kantor Layanan</label>
                  <b-form-input
                    type="text"
                    placeholder="Kantor Layanan"
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
export default {
  data() {
    return {};
  },
  methods: {
    onsubmit() {},
  },
};
</script>
