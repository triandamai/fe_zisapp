<template>
  <div>
    <Breadcrumbs main="Master" title="Data Muzaki" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <FormMuzaki : isEdit="false" @submit="onSubmit" :body="{}" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      methods: {
        onSubmit(evt) {
          evt.preventDefault();
          if (this.c_form.first_name != "") {
            console.log("custom stylr", this.c_form.first_name);
            this.c_form_result.first_name = true;
          } else {
            this.c_form_result.first_name = false;
          }

          if (this.c_form.last_name != "") {
            this.c_form_result.last_name = true;
          } else {
            this.c_form_result.last_name = false;
          }

          if (this.c_form.username != "") {
            this.c_form_result.username = true;
          } else {
            this.c_form_result.username = false;
          }

          if (this.c_form.city != "") {
            this.c_form_result.city = true;
          } else {
            this.c_form_result.city = false;
          }

          if (this.c_form.state != "") {
            this.c_form_result.state = true;
          } else {
            this.c_form_result.state = false;
          }

          if (this.c_form.zip != "") {
            this.c_form_result.zip = true;
          } else {
            this.c_form_result.zip = false;
          }
        },
      },
    };
  },
};
</script>
