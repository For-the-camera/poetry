<script>
import PageTitle from '../components/PageTitle.vue';
export default {
    name: "Page2",
    comments: {
        PageTitle
    },
    props: {},
    data() {
        return {};
    },
    methods: {},
    components: { PageTitle }
};
</script>
<template>
  <div class="page-container">
    <PageTitle></PageTitle>
  </div>
</template>
<style scoped></style>
