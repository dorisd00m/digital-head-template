<template>
  <div class="home">
    <section class="hero bg-[url('@/assets/img/bggradient.svg')] bg-no-repeat bg-cover bg-center min-h-[955px] py-[50px] lg:py-[112px]">
      <div class="container relative">

        <h1 class="
          text-center 
          font-ClashDisplay-Bold 
         
          lg:before:w-[96px]
          lg:after:w-[96px]
          before:bg-contain
          lg:before:content-['']
          before:bg-[url('@/assets/img/star-left.svg')] 
          before:bg-no-repeat
          before:-mt-[30px]
          after:bg-contain
          lg:after:content-['']
          after:bg-[url('@/assets/img/star-right.svg')] 
          after:bg-no-repeat
          after:-mt-[30px]
          text-[36px]
          xl:text-[64px] 
          text-primary 
          leading-[44.28px]
          xl:leading-[78.72px]
          lg:flex
          justify-center
          gap-2
          mb-[32px]
          lg:mb-[26px]
        ">
          <span><span class="inline lg:hidden">✨</span><span class="underline">Efficient</span> and <span class="inline lg:hidden">✨</span><br class="block lg:hidden"/> <span class="underline">High Performing Team</span> <br/>
          to Execute All The Work</span>
        </h1>
        <p class="font-primary text-black/50 text-[26px] mb-[48px]">Dedicated team that will cover all creative works just by simple subscribe.</p>
        <div class="flex gap-3 font-primary items-center justify-center font-extrabold mb-[62px] lg:mb-[64px]">
          <div class="border-2 border-primary-orange text-primary-orange py-[9px] lg:py-[12px] px-[6px] lg:px-[16px] leading-[10px] lg:leading-[23px] text-[10px] lg:text-[18px]">
            Define The Project
          </div>
          <img svg-inline src="@/assets/img/arrow-right.svg" alt="">
          <div class="border-2 border-primary-yellow text-primary-yellow py-[9px] lg:py-[12px] px-[6px] lg:px-[16px] leading-[10px] lg:leading-[23px] text-[10px] lg:text-[18px]">
            Design The Solution
          </div>
          <img svg-inline src="@/assets/img/arrow-right.svg" alt="">
          <div class="border-2 border-primary-green text-primary-green py-[9px] lg:py-[12px] px-[6px] lg:px-[16px] leading-[10px] lg:leading-[23px] text-[10px] lg:text-[18px]">
            Deliver The Result
          </div>
        </div>
        <div class="text-center mb-24">
          
          <button type="button" class="font-[800] py-4 px-4 lg:py-[21px] lg:px-[43px] inline-flex justify-center items-center gap-2 rounded-full border border-transparent bg-primary text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm">
            Get Started Now <Icon icon="bi:arrow-right-circle" class="text-2xl ml-2" />
          </button>
        </div>
        <div class="
          flex 
          justify-center 
          items-center
          gap-3
          before:content-['']
          before:block
          before:flex-1
          before:h-[1px]
          before:bg-primary/50
          after:content-['']
          after:block
          after:flex-1
          after:h-[1px]
          after:bg-primary/50
          text-primary/50
          mb-16
        ">
          <div class="font-ClashDisplay-Variable font-[600] text-2xl">Trusted by <span class="text-primary-green">14+</span> companies <br class="block lg:hidden"/> and many more</div>
        </div>
        <div class="flex justify-center gap-5 lg:gap-16 flex-wrap [&>img]:h-[31px] [&>img]:w-[100px] [&>img]:object-contain lg:[&>img]:h-auto">
          <img src="@/assets/img/brand/demostack.png" class="object-contain opacity-50" alt="">
          <img src="@/assets/img/brand/ethyca.png" class="object-contain opacity-50" alt="">
          <img src="@/assets/img/brand/myshop.png" class="object-contain opacity-50" alt="">
          <img src="@/assets/img/brand/canopees.png" class="object-contain opacity-50" alt="">
          <img src="@/assets/img/brand/winclex.png" class="object-contain opacity-50" alt="">
        </div>
      </div>
    </section>
    <section class="min-h-[316px] py-[50px] bg-primary bg-[url('@/assets/img/linebg.svg')] bg-cover bg-top text-white lg:py-[25px] 2xl:py-[30px] lg:px-[80px] 2xl:px-[100px] relative">
      <div class="flex justify-between items-end opacity-50">
        <img src="@/assets/img/star.png" alt="" class="w-[32px] flex-none">
        <img src="@/assets/img/star.png" alt="" class="w-[56px] flex-none rotate-45">
      </div>
      <div class="-mt-[90px] lg:mt-0">
        <div class="
          flex
          flex-col
          justify-center
          items-center
          divide-y
          lg:items-stretch
          lg:divide-y-0
          lg:grid 
          lg:grid-cols-3 
          lg:divide-x 
          [&>div]:py-[50px] 
          [&>div]:xl:py-0 
          [&>div]:xl:px-[60px] 
          [&>div]:px-[30px] 
          lg:[&>div:first-child]:pl-0 
          lg:[&>div:last-child]:pr-0 
          text-center
        
        ">
          <div v-for="(item,id) in [
            {
              title: 'Define The Project',
              subtitle: `Our experienced team act together <br class='hidden 2xl:block'/> 
              with problem-solving skills to <br class='hidden 2xl:block'/>
              understand your needs.`
            },
            {
              title: 'Design The Solution',
              subtitle: `The experts collaboration leads to <br class='hidden 2xl:block'/>
              our capability to design intuitive <br class='hidden 2xl:block'/>
              solution.`
            },
            {
              title: 'Deliver The Result',
              subtitle: `Cut cost and cut time at once to get <br class='hidden 2xl:block'/>
              the work done efficiently.`
            },
          ]" :key="id">
            <h3 class="mb-8 font-ClashDisplay-Semibold text-2xl" v-html="item.title"></h3>
            <p class="font-primary text-white/50 text-[20px]" v-html="item.subtitle"></p>
          </div>
         
        </div>
      </div>
      <div class="flex justify-between items-end opacity-50 -mt-[100px] xl:mt-0">
        <img src="@/assets/img/star.png" alt="" class="w-[56px] flex-none">
        <img src="@/assets/img/star.png" alt="" class="w-[32px] flex-none rotate-45">
      </div>
    </section>
    <section class="py-[150px]">
      <div class="container">
        <div class="flex flex-col gap-[130px]">
          <div class="flex flex-wrap lg:flex-nowrap gap-[50px] 2xl:gap-[116px] text-left self-start">
              <div class="w-9/12 sm:w-6/12 lg:w-5/12 h-fit xl:w-[465px] mx-auto xl:mx-0 relative flex-none">
                <ul class="bg-white border border-black rounded-xl pl-[30px] xl:pl-[40px] pr-[20px] self-end py-[20px] xl:py-[30px] list-disc flex-none -left-[50px] lg:-left-[20px] 2xl:-left-[60px] z-[20] font-ClashDisplay-Medium absolute bottom-0">
                  <li v-for="(item,id) in ['Fast','Anywhere','Anytime','Top Quality','Dedicated Talent']" :key="id" class="py-1 text-xs lg:text-base">{{item}}</li>
                </ul>
                <img src="@/assets/img/home/whyus1.png" alt="" class="w-full rounded-xl relative z-[10] object-cover">
              </div>
              <div class="">
                <h5 class="font-ClashDisplay-Semibold text-[34px] lg:text-[64px] leading-[31px] lg:leading-[68px] mb-8">
                  <small class="block text-lg text-primary font-ClashDisplay-Variable mb-5">Why Us</small>
                  <span class="block">Get your top quality <br/> & dedicated talent ⚡</span>
                </h5>
                <p class="w-full xl:w-[550px] font-primary font-[400] leading-[36px] text-[22px] mb-[62px]">
                  Our swift-paced team is capable of handling design 
                  projects on anywhere and anytime. <br/>
                  We’re ready to deliver  your best product wherever 
                  you are!
                </p>
                <button type="button" class="font-primary font-normal py-4 px-9 inline-flex justify-center items-center gap-2 rounded-full border border-transparent bg-primary text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm">
                  Discover our possibilities <Icon icon="bi:arrow-right-circle" class="text-2xl ml-2" />
                </button>
              </div>
          </div>
          <div class="flex flex-wrap lg:flex-nowrap gap-[50px] 2xl:gap-[116px] text-left self-start xl:self-end">
              
              <div class="order-2 lg:order-1">
                <h5 class="font-ClashDisplay-Semibold text-[34px] lg:text-[64px] leading-[31px] lg:leading-[68px] mb-8">
                  <small class="block text-lg text-primary font-ClashDisplay-Variable mb-5">Why Us</small>
                  <span class="block">Flat rates, No hidden <br/> cost 💸</span>
                </h5>
                <p class="xl:w-[550px] font-primary font-[400] leading-[36px] text-[22px] mb-[62px]">
                  No paying to the nose! Our subscription plan helps to <br/>
                  get your work done with reasonable price
                </p>
                <button type="button" class="font-primary font-normal py-4 px-9 inline-flex justify-center items-center gap-2 rounded-full border border-transparent bg-primary text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm">
                  See Pricing Plan <Icon icon="bi:arrow-right-circle" class="text-2xl ml-2" />
                </button>
              </div>
              <div class="order-1 lg:order-2 xl:w-[465px] relative">
                
                <img src="@/assets/img/home/whyus2.png" alt="" class="w-full rounded-xl relative z-[10] object-cover">
              </div>
          </div>
          <div class="flex flex-wrap lg:flex-nowrap gap-[50px] 2xl:gap-[116px] max-w-full xl:max-w-none text-left self-start ">
              <div class="relative max-w-full xl:max-w-[530px]">
                
                <img src="@/assets/img/home/whyus3.png" alt="" class="w-full rounded-xl relative z-[10] object-cover">
              </div>
              <div class="max-w-full">
                <h5 class="font-ClashDisplay-Semibold text-[34px] lg:text-[64px] leading-[31px] lg:leading-[68px] mb-8">
                  <small class="block text-lg text-primary font-ClashDisplay-Variable mb-5">Why Us</small>
                  <span class="block">Team up without <br/> the chaos 🤝</span>
                </h5>
                <p class="w-full xl:w-[550px] font-primary font-[400] leading-[36px] text-[22px] mb-[62px]">
                  No hurdle, no hassle. Have the most convenient way <br/>
                  of managing your project and monitor along the <br/>  
                  way

                </p>
                <div class="flex flex-col xl:flex-row flex-wrap lg:w-[500px] gap-5">
                  <button 
                    v-for="(item,id) in whyUs" :key="id"
                    type="button" class="flex-none w-fit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl border border-gray-900 font-semibold text-gray-800 hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm">
                      <img :src="item.icon" class="mr-1" /> {{item.text}}
                  </button>
                </div>
              </div>
              
          </div>
        </div>
      </div>
    </section>
    <section class="py-[100px] lg:px-[20px]">
      <div class="
        flex 
        justify-center 
        items-center
        gap-3
        before:content-['']
        before:block
        before:flex-1
        before:h-[1px]
        before:bg-primary/50
        after:content-['']
        after:block
        after:flex-1
        after:h-[1px]
        after:bg-primary/50
        text-primary/50
        mb-16
      ">
        <h2 class="font-ClashDisplay-Variable font-[600] text-2xl">OUR SERVICES</h2>
      </div>
      <div class="container">

        <h3 class="
          text-center 
          font-ClashDisplay-Semibold
          w-full
          text-[56px] 
          text-primary 
          leading-[68.72px]
          mb-5
        ">
          What We Do, What you can have💡
        </h3>
        <p class="text-center text-primary/50 text-2xl mb-20">Well-planned workflow with seamless design process executions</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
          <div v-for="(item,id) in ourServices" :key="id">
            <h5 class="text-left font-ClashDisplay-Medium text-2xl mb-5">{{item.title}}</h5>
            <div v-auto-animate class="flex flex-wrap gap-3 font-primary mb-3 transition-all duration-1000 overflow-hidden h-auto items-start">
              <span v-for="(item,id) in limitMobile(item.resLimit,item.items,item.toggle)" :key="id" class="flex-none inline-flex items-center py-[16px] px-[20px] text-[16px] gap-5 rounded-2xl text-xs font-medium bg-gray-100 text-gray-800">{{item}}</span>
            </div>
            <button type="button" class="
              mx-auto 
              py-3 
              px-4 
              inline-flex 
              sm:hidden 
              flex-col 
              justify-center 
              items-center 
              gap-2 
              rounded-md 
              border 
              border-transparent 
              font-semibold 
              text-gray-800 
              
              focus:outline-none 
              focus:ring-2 
              focus:ring-gray-800 
              focus:ring-offset-2 
              transition-all text-sm"
              @click="item.toggle = !item.toggle"
              >
                <template v-if="item.toggle == false">
                  See All
                  <Icon icon="carbon:chevron-down" class="" />
                </template>
                <template v-else>
                  <Icon icon="carbon:chevron-up" class="" />                  
                  Show Less
                </template>
            </button>
          </div>
          <div class="text-left">
            <h5 class="text-left font-ClashDisplay-Medium text-2xl mb-5">Not Listed Here 😲??</h5>
            <button type="button" class="font-primary font-normal py-4 px-9 inline-flex justify-center items-center gap-2 rounded-full border border-transparent bg-primary text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-primary py-[100px] lg:px-[20px]">
      <h-line :dark="true">
        THE PROCESS
      </h-line>
      <div class="container">
        <h3 class="
          text-center 
          font-ClashDisplay-Semibold
          w-full
          text-[56px] 
          text-white 
          leading-[68.72px]
          mb-5
        ">
          Our simple and easy process
        </h3>
        <p class="text-center text-white/50 text-2xl mb-20">Well-planned workflow with seamless design process executions</p>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
  section {
    @apply px-[20px]
  }
</style>
<script>
// @ is an alias to /src
import HLineHeading from '@/components/HLineHeading.vue';

export default {
  name: 'HomeView',
  components: {
    'h-line': HLineHeading,
    
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {  
    onResize() {
      this.windowWidth = window.innerWidth
      
    },
    limitMobile(limitval,item,toggle) {
      if(item) {
        let data;
        if(toggle !== true) {
          if(limitval != false && this.windowWidth < '640') {
            data = item.slice(0,limitval)
          } else {
            data = item
          }
        } else {
          data = item
        }
        return data
      }
    }
  },
  data: () => ({
    windowWidth: window.innerWidth,
    whyUs: [
      {
        icon: require('@/assets/img/home/message.svg'),
        text: 'Communication with slack',
      },
      {
        icon: require('@/assets/img/home/close.svg'),
        text: 'No contracts',
      },
      {
        icon: require('@/assets/img/home/gear.svg'),
        text: 'Manage with Trello',
      },
      {
        icon: require('@/assets/img/home/plus.svg'),
        text: 'Invite unlimited team member',
      },
    ],
    ourServices: [
      {
        title: 'Branding & Graphic Design',
        resLimit: 3,
        toggle: false,
        items: ['Logo','Brand Guidelines','Pitchdeck','Infographic','Social Media','Banner','Packaging','Resume','Bussiness Card','Digital Card','Invoice','Mockup','Icon','Booklet','Cover Books']
      },
      {
        title: 'Website & App designs',
        resLimit: 4,
        toggle: false,
        items: ['Landing Page','Web','App','Mobile','responsive','tablet','Dashboard','Design System',]        
      },     
      {
        title: 'Development',
        resLimit: 3,
        toggle: false,
        items: ['Web Development','Java Script','Front-End Development','CSS','HTML','CMS',]
      },
      {
        title: 'Illustrations',
        resLimit: 2,
        toggle: false,
        items: ['2D Illustration','Isometric Illustration ','Character','Mascot','Icon Illustration',]
      },
      {
        title: 'Animation',
        resLimit: 2,
        toggle: false,
        items: ['2D Animation','GIF Animation','SVG Animation','Lottie Animation','Logo Animation','Social Media Animation','Pitchdeck Animation','Story Animation','Icon Animation',]
      },
    ]
  })
}
</script>
