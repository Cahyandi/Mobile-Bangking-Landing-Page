<template>
<div data-scroll-container>
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
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
      
    });
    console.log("lmS", this.lmS);
  }
}
</script>
