<template>
  <div>
    <Breadcrumbs main="Master" title="Data Muzaki" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <px-card :actions="false">
            <div slot="with-padding">
              <b-form class="needs-validation" @submit="onCustomStyleSubmit">
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="c_form_first_name">First name</label>
                    <b-form-input
                      type="text"
                      id="c_form_first_name"
                      v-model="c_form.first_name"
                      :state="c_form_result.first_name"
                      placeholder="First name"
                    ></b-form-input>
                    <b-form-valid-feedback :state="c_form_result.first_name"
                      >Lock Good</b-form-valid-feedback
                    >
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="c_form_last_name">Last name</label>
                    <b-form-input
                      type="text"
                      id="c_form_last_name"
                      v-model="c_form.last_name"
                      :state="c_form_result.last_name"
                      placeholder="Last name"
                    ></b-form-input>
                    <b-form-valid-feedback :state="c_form_result.last_name"
                      >Lock Good</b-form-valid-feedback
                    >
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="c_form_username">Username</label>
                    <b-input-group prepend="@">
                      <b-form-input
                        type="text"
                        id="c_form_username"
                        v-model="c_form.username"
                        :state="c_form_result.username"
                        placeholder="Username"
                      ></b-form-input>
                    </b-input-group>
                    <b-form-invalid-feedback :state="c_form_result.username"
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
                      v-model="c_form.city"
                      :state="c_form_result.city"
                      placeholder="City"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="c_form_result.city"
                      >Please provide a valid city.</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="c_form_state">State</label>
                    <b-form-input
                      type="text"
                      id="c_form_state"
                      v-model="c_form.state"
                      :state="c_form_result.state"
                      placeholder="State"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="c_form_result.state"
                      >Please provide a valid state.</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="c_form_zipcode">Zip</label>
                    <b-form-input
                      type="text"
                      id="c_form_zipcode"
                      v-model="c_form.zip"
                      :state="c_form_result.zip"
                      placeholder="Zip"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="c_form_result.zip"
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
  </div></template
>
