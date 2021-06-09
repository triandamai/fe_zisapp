<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <px-card :actions="false">
          <div slot="with-padding">
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="c_form_nomor">Nomor Kantor </label>
                  <b-form-input
                    type="text"
                    placeholder="Nomor Kantor"
                  ></b-form-input>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="c_form_nama">Nama Kantor</label>
                  <b-form-input
                    type="text"
                    placeholder="Nama Kantor"
                  ></b-form-input>
                  <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-12 mb-3">
                  <label for="c_form_alamat">Alamat</label>
                  <b-form-input type="text" placeholder="Alamat"></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="c_form_telepon">Telepon</label>
                  <b-form-input
                    type="text"
                    placeholder="Telepon"
                  ></b-form-input>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="c_form_pimpinan">Pimpinan</label>
                  <b-form-input
                    type="text"
                    placeholder="Pimpinan"
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
