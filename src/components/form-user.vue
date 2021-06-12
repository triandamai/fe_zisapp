<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="User" active>
          <b-card-text>
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="c_form_koder">Kode </label>
                  <b-form-input type="text" placeholder="Kode"></b-form-input>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="c_form_namauser">Nama</label>
                  <b-form-input type="text" placeholder="Nama"></b-form-input>
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
                <div class="col-md-4 mb-3">
                  <label for="c_form_telepon">Telepon</label>
                  <b-form-input
                    type="text"
                    placeholder="Telepon"
                  ></b-form-input>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="c_form_pimpinan">Level</label>
                  <b-form-select v-model="level" :options="lvl"></b-form-select>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="c_form_statususer">Status</label>
                  <b-form-select
                    v-model="status"
                    :options="statususer"
                  ></b-form-select>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="c_form_username">Username</label>
                  <b-form-input
                    type="text"
                    placeholder="Username"
                  ></b-form-input>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="c_form_password">Password</label>
                  <b-form-input
                    type="text"
                    placeholder="Password"
                  ></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 mb-1">
                  <label for="c_form_kantorl">Kantor Layanan</label>
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
          </b-card-text>
        </b-tab>
        <b-tab title="Rubah Password">
          <b-card-text>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label for="c_form_koder">Kode </label>
                <b-form-input type="text" placeholder="Kode"></b-form-input>
              </div>
              <div class="col-md-4 mb-3">
                <label for="c_form_namauser">Nama</label>
                <b-form-input type="text" placeholder="Nama"></b-form-input>
                <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
              </div>
              <div class="col-md-4 mb-3">
                <label for="c_form_username">Username</label>
                <b-form-input type="text" placeholder="username"></b-form-input>
                <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label for="c_form_password">Password Lama </label>
                <b-form-input
                  type="password"
                  placeholder="Password Lama"
                ></b-form-input>
              </div>
              <div class="col-md-4 mb-3">
                <label for="c_form_passwordbaru">Password Baru</label>
                <b-form-input
                  type="password"
                  placeholder="Password Baru"
                ></b-form-input>
                <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
              </div>
              <div class="col-md-4 mb-3">
                <label for="c_form_konfpass">Konfirmasi Password Baru</label>
                <b-form-input
                  type="password"
                  placeholder="Konfirmasi Password Baru"
                ></b-form-input>
                <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
              </div>
            </div>
            <b-button type="submit" variant="primary">Simpan</b-button>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kantorlayanan: [
        { label: "laki-laki", value: "L" },
        { label: "perempuan", value: "P" },
      ],
    };
  },
  methods: {
    onsubmit() {},
  },
};
</script>
