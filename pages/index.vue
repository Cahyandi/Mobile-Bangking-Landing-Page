<template>
<div id="js-scroll" >
  <Header />
  <ContentLife />
  <ContentTextCenter />
  <ContentThreeColumn />
  <ContentDownload/>
  <ContentConnection/>
  <ContentSubscribe />
  <Footer />
  </div>
</template>

<script >
export default {
  data() {
    return {
      lmS: null
    };
  },
 mounted() {
    this.lmS = new this.locomotiveScroll({
      el: document.querySelector("#js-scroll"),
      smooth: true
    });
    console.log("lmS", this.lmS);
  }
}
</script>

<style lang="scss" scoped>
div {
   min-height: 100%;
}
</style>