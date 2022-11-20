<template>
  <div>
     <div
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class="swiper mySwiper2"
    >
        <div thumbsSlider="" class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide text-[9px] lg:text-[18px]">
                <span>1</span>
                <span class="hidden lg:inline texter">. Subscribe Your Plans</span>
            </div>
            <div class="swiper-slide text-[9px] lg:text-[18px]">
                <span>2</span>
                <span class="hidden lg:inline texter">. Submit Task</span>
            </div>
            <div class="swiper-slide text-[9px] lg:text-[18px]">
                <span>3</span>
                <span class="hidden lg:inline texter">. Draft & Revision</span>
            </div>
            <div class="swiper-slide text-[9px] lg:text-[18px]">
                <span>4</span>
                <span class="hidden lg:inline texter">. Approve & Get Your File</span>
            </div>
      
          </div>
        </div>
        <div class="swiper-wrapper bg-white rounded-b-2xl">
            <div class="swiper-slide">
                <div class="grid grid-cols-12 gap-3 p-10 font-primary">
                    <div class="col-span-5 text-left">
                        <h5 class="text-[32px] font-ClashDisplay-Semibold mb-2"> Subscribes Your Plans ✅</h5>
                        <p class="text-primary/50 text-[20px]">Choose either which suits best whatever amount of works need to be done.</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                
            </div>
            <div class="swiper-slide">
                
            </div>
            <div class="swiper-slide">
                
            </div>
       
        </div>
        <!-- <div class="swiper-button-next"></div> -->
        <!-- <div class="swiper-button-prev"></div> -->
    </div>
    

  </div>
</template>
<style lang="scss">
    .mySwiper {
        .swiper-wrapper {
            position: relative;
            &:after {
                content: '';
                position: absolute
            }
        }
        .swiper-slide {
            @apply  text-white px-[32px] py-[30px] transition-all font-primary font-[600] cursor-pointer w-fit flex-1;
            pointer-events: auto !important;
            &.swiper-slide-thumb-active {
                @apply bg-white text-black rounded-t-xl relative flex-none;
                
                &:after,
                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: -20px;
                    border-radius: 0 0 25px 0;
                    z-index: -1;
                    background: #181818;
                    width: 20px;
                    height: 20px;
                    box-shadow: 5px 5px 0  1px white;
                }
                
                &:after {
                    right: -20px;
                    left: auto;
                    border-radius: 0 0 0 25px;
                    background: #181818;
                    box-shadow: -5px 5px 0  1px white;
                }
                .texter {
                    display: inline;
                }
            }
        }
    }
</style>
<script>
import Swiper from 'swiper/bundle';

export default {
    mounted() {
        var swiper = new Swiper(".mySwiper", {
            loop: false,
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                },
                976: {
                    slidesPerView: 4,
                }
            },
            
            
            freeMode: true,
            watchSlidesProgress: true,
        });
        // eslint-disable-next-line no-unused-vars
        var swiper2 = new Swiper(".mySwiper2", {
            loop: false,
            autoplay: {delay: 3000},
            spaceBetween: 10,
            navigation: false,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }
}
</script>

<style>

</style>