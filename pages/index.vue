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
    import AOS from 'aos'
    import 'aos/dist/aos.css'
  export default {
    data() {
      return {
        lmS: null
      };
    },
  mounted() {
      setTimeout(()=>{
        cthis.lmS = new this.locomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      });
      }, 1000);
      console.log("lmS", this.lmS);

      AOS.init({ })
    },
  }
</script>
