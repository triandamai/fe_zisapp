<template>
  <div>
    <Breadcrumbs main="Master" title="Data Muzaki" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <FormMuzaki : isEdit="false" />
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
        onSubmit() {},
      },
    };
  },
};
</script>
