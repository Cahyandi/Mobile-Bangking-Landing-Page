<template>
<div id="js-scroll">
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
 mounted() {
    this.lmS = new this.locomotiveScroll({
      el: document.querySelector("#js-scroll"),
      smooth: true
    });
    console.log("lmS", this.lmS);
  }
}
</script>
