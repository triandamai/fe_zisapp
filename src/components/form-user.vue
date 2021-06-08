<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="User" active>
          <b-card-text>
            <b-form class="needs-validation" @submit="onsubmit">
              <div class="form-row">
                <div class="col-md-2 mb-">
                  <label for="c_form_koder">Kode </label>
                  <b-form-input type="text" placeholder="Kode"></b-form-input>
                </div>
                <div class="col-md-8 mb-">
                  <label for="c_form_namauser">Nama</label>
                  <b-form-input type="text" placeholder="Nama"></b-form-input>
                  <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-10 mb-3">
                  <label for="c_form_alamat">Alamat</label>
                  <b-form-input type="text" placeholder="Alamat"></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-10 mb-3">
                  <label for="c_form_email">Email</label>
                  <b-form-input type="text" placeholder="Email"></b-form-input>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="c_form_telepon">Telepon</label>
                  <b-form-input
                    type="text"
                    placeholder="Telepon"
                  ></b-form-input>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="c_form_pimpinan">Level</label>
                  <b-form-select v-model="level" :options="lvl"></b-form-select>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="c_form_username">Username</label>
                  <b-form-input
                    type="text"
                    placeholder="Username"
                  ></b-form-input>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="c_form_password">Password</label>
                  <b-form-input
                    type="text"
                    placeholder="Password"
                  ></b-form-input>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="c_form_konpassword">Konfirmasi Password</label>
                  <b-form-input
                    type="konpassword"
                    placeholder="Konfirmasi Password"
                  ></b-form-input>
                </div>
                <div class="col-md-4 mb-">
                  <label for="c_form_kantorl">Kantor Layanan</label>
                  <b-form-input
                    type="text"
                    placeholder="Kantor Layanan"
                  ></b-form-input>
                </div>
              </div>
              <b-button type="submit" variant="primary">Simpan</b-button>
            </b-form>
          </b-card-text>
        </b-tab>
        <b-tab title="Rubah Password">
          <b-card-text>
            <div class="form-row">
              <div class="col-md-2 mb-">
                <label for="c_form_koder">Kode </label>
                <b-form-input type="text" placeholder="Kode"></b-form-input>
              </div>
              <div class="col-md-4 mb-">
                <label for="c_form_namauser">Nama</label>
                <b-form-input type="text" placeholder="Nama"></b-form-input>
                <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
              </div>
              <div class="col-md-3 mb-">
                <label for="c_form_username">Username</label>
                <b-form-input type="text" placeholder="username"></b-form-input>
                <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-3 mb-">
                <label for="c_form_password">Password Lama </label>
                <b-form-input
                  type="password"
                  placeholder="Password Lama"
                ></b-form-input>
              </div>
              <div class="col-md-3 mb-">
                <label for="c_form_passwordbaru">Password Baru</label>
                <b-form-input
                  type="password"
                  placeholder="Password Baru"
                ></b-form-input>
                <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
              </div>
              <div class="col-md-3 mb-">
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
