<template>
  <div>
    <Breadcrumbs main="Master" title="Data Muzaki" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <px-card :actions="false">
            <div slot="with-padding">
              <b-form class="needs-validation" @submit="onsubmit">
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="c_form_first_name">First name</label>
                    <b-form-input
                      type="text"
                      id="c_form_first_name"
                      placeholder="First name"
                    ></b-form-input>
                    <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="c_form_last_name">Last name</label>
                    <b-form-input
                      type="text"
                      id="c_form_last_name"
                      placeholder="Last name"
                    ></b-form-input>
                    <b-form-valid-feedback>Lock Good</b-form-valid-feedback>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="c_form_username">Username</label>
                    <b-input-group prepend="@">
                      <b-form-input
                        type="text"
                        id="c_form_username"
                        placeholder="Username"
                      ></b-form-input>
                    </b-input-group>
                    <b-form-invalid-feedback
                      >Please choose a unique and valid
                      username.</b-form-invalid-feedback
                    >
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label for="c_form_city">City</label>
                    <b-form-input
                      type="text"
                      id="c_form_city"
                      placeholder="City"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      >Please provide a valid city.</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="c_form_state">State</label>
                    <b-form-input
                      type="text"
                      id="c_form_state"
                      placeholder="State"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      >Please provide a valid state.</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="c_form_zipcode">Zip</label>
                    <b-form-input
                      type="text"
                      id="c_form_zipcode"
                      placeholder="Zip"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      >Please provide a valid zip.</b-form-invalid-feedback
                    >
                  </div>
                </div>
                <b-button type="submit" variant="primary">Submit Form</b-button>
              </b-form>
            </div>
          </px-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onsubmit() {},
  },
};
</script>
