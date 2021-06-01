<template>
  <div>
    <!-- page-wrapper Start-->
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img
                    class="img-fluid for-light"
                    src="../../assets/images/logo/login.png"
                    alt="looginpage"
                  />
                  <img
                    class="img-fluid for-dark"
                    src="../../assets/images/logo/logo_dark.png"
                    alt="looginpage"
                  />
                </a>
              </div>
              <div class="login-main">
                <px-card :actions="false">
                  <div slot="with-padding">
                    <b-card no-body>
                      <b-card-text>
                        <form class="theme-form">
                          <h4>Sign in to account</h4>
                          <p>Enter your email & password to login</p>
                          <div class="form-group">
                            <label class="col-form-label">Email Address</label>
                            <input
                              v-model="email"
                              class="form-control"
                              type="email"
                              required=""
                              placeholder="Test@gmail.com"
                              :class="{
                                'is-invalid': submitted && !email,
                              }"
                            />
                            <div
                              v-show="submitted && !email"
                              class="invalid-feedback"
                            >
                              Email is required
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-form-label">Password</label>
                            <input
                              v-model="password"
                              autocomplete=""
                              class="form-control"
                              :type="type"
                              name="login[password]"
                              required=""
                              placeholder="*********"
                              :class="{
                                'is-invalid': submitted && !email,
                              }"
                            />
                            <div
                              v-show="submitted && !password"
                              class="invalid-feedback"
                            >
                              Email is required
                            </div>
                            <div class="show-hide" @click="showPassword">
                              <span class="show"></span>
                            </div>
                          </div>
                          <div class="form-group mb-0">
                            <div class="checkbox p-0">
                              <input id="checkbox1" type="checkbox" />
                              <label class="text-muted" for="checkbox1"
                                >Remember password</label
                              >
                            </div>
                            <button
                              class="btn btn-primary btn-block"
                              type="button"
                              @click="signUp"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </b-card-text>
                    </b-card>
                  </div>
                </px-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- latest jquery-->
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      type: "password",
      email: "test@admin.com",
      password: "test@123456",
      username: "",
      passwordjwt: "",
      submitted: false,
    };
  },
  computed: {
    // JWT authentication
    loggingIn() {
      return true;
    },
  },
  created() {
    // reset login status for JWT
  },
  methods: {
    // JWT authentication
    handleSubmit() {},
    // show/hide password
    showPassword: function() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    // Firebase login
    signUp: function() {},

    // Auth0 login
    login() {},
  },
};
</script>
