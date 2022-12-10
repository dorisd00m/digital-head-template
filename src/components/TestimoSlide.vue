<template>
  <div>
     <div
     
      class="testimoslide"
    >
        <div   class="swiper testiSlide p-5">
          <div class="swiper-wrapper">
            <div v-for="(item,id) in slide" :key="id" class="swiper-slide text-[9px] lg:text-[18px] bg-white rounded-2xl drop-shadow-lg px-10 relative">
                
                <div class="font-primary text-[20px] text-left text-black/50 min-h-[230px]  py-10" v-html="item.testi"></div>
                <hr>
                <div class="flex gap-3 py-5">
                    <img src="@/assets/img/person-icon.svg" alt="">
                    <div class="text-left">
                        <div class="font-bold font-primary text-[20px]">
                            {{item.name}}
                        </div>
                        <div class="text-sm text-black/50">
                            {{item.pos}}
                            
                        </div>
                    </div>
                </div>

            </div>
       
         
            
      
          </div>
        </div>
      
    </div>
    

  </div>
</template>
<style lang="scss">
    
</style>
<script>
import Swiper from 'swiper/bundle';

export default {
    data: () => ({
        slide: [
            {
                testi: ` The entire SlabPixel team is very  talented 
                and able to create  stunning visuals, <strong>UI 
                design</strong> and  Animations in a timely 
                manner.`,
                name: 'Arjan Van Bremen',
                pos: 'Founder & Software Engineer of XTracked',
            },
            {
                testi: ` SlabPixel team are just amazing. We have 
                had some personal websites and
                dashboards. The team always delivered 
                on time. The best quality with endless 
                iterations. Good Job!`,
                name: 'Nevo David',
                pos: 'CEO & Founder of Linvo',
            },
            {
                testi: `We loved working with SlabPixel! 
                They gave outputs very quickly with a 
                high quality of work.`,
                name: 'Coby Lim',
                pos: 'Product Manager of PayMongo',
            },
            {
                testi: ` The entire SlabPixel team is very  talented 
                and able to create  stunning visuals, <strong>UI 
                design</strong> and  Animations in a timely 
                manner.`,
                name: 'Arjan Van Bremen',
                pos: 'Founder & Software Engineer of XTracked',
            },
        ]
    }),
    mounted() {
        // eslint-disable-next-line no-unused-vars
        var swiper = new Swiper(".testiSlide", {
            
                spaceBetween: 30,
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                },
                976: {
                    slidesPerView: 3,
                    centeredSlides: false,
                }
            },
            
            
            
            
        });
        // eslint-disable-next-line no-unused-vars
        // var swiper2 = new Swiper(".mySwiper2", {
        //     loop: false,
        //     autoplay: {delay: 3000},
        //     spaceBetween: 10,
        //     navigation: false,
        //     effect: 'fade',
        //     fadeEffect: {
        //         crossFade: true
        //     },
        //     thumbs: {
        //         swiper: swiper,
        //     },
        // });
    }
}
</script>

<style>

</style>