<template>
  <div class="home">
    <section class="hero bg-[url('@/assets/img/bggradient.svg')] bg-no-repeat bg-cover bg-center min-h-[955px] py-[112px]">
      <div class="container relative">

        <h1 class="
          text-center 
          font-ClashDisplay-Bold 
          before:content-[url('@/assets/img/star-left.svg')] 
          before:-mt-[30px]
          after:content-[url('@/assets/img/star-right.svg')] 
          after:-mt-[30px]
          text-[64px] 
          text-primary 
          leading-[78.72px]
          flex
        ">
          Efficient and High Performing Team <br/>
          to Execute All The Work
        </h1>
        <p class="font-primary text-black/50 text-[26px] lg:mb-[48px]">Dedicated team that will cover all creative works just by simple subscribe.</p>
        <div class="flex gap-3 font-primary justify-center font-extrabold lg:mb-[64px]">
          <div class="border-2 border-primary-orange text-primary-orange py-[12px] px-[16px] leading-[23px] text-[18px]">
            Define The Project
          </div>
          <img svg-inline src="@/assets/img/arrow-right.svg" alt="">
          <div class="border-2 border-primary-yellow text-primary-yellow py-[12px] px-[16px] leading-[23px] text-[18px]">
            Design The Solution
          </div>
          <img svg-inline src="@/assets/img/arrow-right.svg" alt="">
          <div class="border-2 border-primary-green text-primary-green py-[12px] px-[16px] leading-[23px] text-[18px]">
            Deliver The Result
          </div>
        </div>
        <div class="text-center lg:mb-24">
          
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
          lg:mb-16
        ">
          <div class="font-ClashDisplay-Variable font-[600] text-2xl">Trusted by <span class="text-primary-green">14+</span> companies and many more</div>
        </div>
        <div class="flex justify-center gap-16 flex-wrap">
          <img src="@/assets/img/brand/demostack.png" class="object-contain opacity-50" alt="">
          <img src="@/assets/img/brand/ethyca.png" class="object-contain opacity-50" alt="">
          <img src="@/assets/img/brand/myshop.png" class="object-contain opacity-50" alt="">
          <img src="@/assets/img/brand/canopees.png" class="object-contain opacity-50" alt="">
          <img src="@/assets/img/brand/winclex.png" class="object-contain opacity-50" alt="">
        </div>
      </div>
    </section>
    <section class="min-h-[316px] bg-primary bg-[url('@/assets/img/linebg.svg')] bg-cover bg-top text-white lg:py-[30px] lg:px-[100px] relative">
      <div class="flex justify-between items-end opacity-50">
        <img src="@/assets/img/star.png" alt="" class="w-[32px] flex-none">
        <img src="@/assets/img/star.png" alt="" class="w-[56px] flex-none rotate-45">
      </div>
      <div class="">
        <div class="
          flex
          flex-col
          divide-y
          xl:divide-y-0
          xl:grid 
          xl:grid-cols-3 
          xl:divide-x 
          [&>div]:py-[50px] 
          [&>div]:xl:py-0 
          [&>div]:xl:px-[60px] 
          [&>div]:px-[30px] 
          [&>div:first-child]:pl-0 
          [&>div:last-child]:pr-0 
          text-center
        
        ">
          <div v-for="(item,id) in [
            {
              title: 'Define The Project',
              subtitle: `Our experienced team act together <br/> 
              with problem-solving skills to <br/>
              understand your needs.`
            },
            {
              title: 'Design The Solution',
              subtitle: `The experts collaboration leads to <br/>
              our capability to design intuitive <br/>
              solution.`
            },
            {
              title: 'Deliver The Result',
              subtitle: `Cut cost and cut time at once to get <br/>
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
          <div class="flex gap-[116px] text-left self-start">
              <div class="w-[465px] relative">
                <ul class="bg-white border border-black rounded-xl pl-[40px] pr-[20px] self-end py-[30px] list-disc flex-none -left-[100px] z-[20] font-ClashDisplay-Medium absolute bottom-0">
                  <li v-for="(item,id) in ['Fast','Anywhere','Anytime','Top Quality','Dedicated Talent']" :key="id" class="py-1">{{item}}</li>
                </ul>
                <img src="@/assets/img/home/whyus1.png" alt="" class="w-full rounded-xl relative z-[10] object-cover">
              </div>
              <div class="">
                <h5 class="font-ClashDisplay-Semibold text-[64px] leading-[68px] mb-8">
                  <small class="block text-lg text-primary font-ClashDisplay-Variable mb-5">Why Us</small>
                  <span class="block">Get your top quality <br/> & dedicated talent ⚡</span>
                </h5>
                <p class="w-[550px] font-primary font-[400] leading-[36px] text-[22px] mb-[62px]">
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
          <div class="flex gap-[116px] text-left self-start">
              
              <div class="">
                <h5 class="font-ClashDisplay-Semibold text-[64px] leading-[68px] mb-8">
                  <small class="block text-lg text-primary font-ClashDisplay-Variable mb-5">Why Us</small>
                  <span class="block">Flat rates, No hidden <br/> cost 💸</span>
                </h5>
                <p class="w-[550px] font-primary font-[400] leading-[36px] text-[22px] mb-[62px]">
                  No paying to the nose! Our subscription plan helps to <br/>
                  get your work done with reasonable price
                </p>
                <button type="button" class="font-primary font-normal py-4 px-9 inline-flex justify-center items-center gap-2 rounded-full border border-transparent bg-primary text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm">
                  See Pricing Plan <Icon icon="bi:arrow-right-circle" class="text-2xl ml-2" />
                </button>
              </div>
              <div class="w-[465px] relative">
                
                <img src="@/assets/img/home/whyus2.png" alt="" class="w-full rounded-xl relative z-[10] object-cover">
              </div>
          </div>
          <div class="flex gap-[116px] text-left self-start ">
              <div class="relative">
                
                <img src="@/assets/img/home/whyus3.png" alt="" class="w-full rounded-xl relative z-[10] object-cover">
              </div>
              <div class="">
                <h5 class="font-ClashDisplay-Semibold text-[64px] leading-[68px] mb-8">
                  <small class="block text-lg text-primary font-ClashDisplay-Variable mb-5">Why Us</small>
                  <span class="block">Team up without <br/> the chaos 🤝</span>
                </h5>
                <p class="w-[550px] font-primary font-[400] leading-[36px] text-[22px] mb-[62px]">
                  No hurdle, no hassle. Have the most convenient way <br/>
                  of managing your project and monitor along the <br/>  
                  way

                </p>
                <div class="flex flex-wrap w-[500px] gap-5">
                  <button 
                    v-for="(item,id) in [
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
                    ]" :key="id"
                    type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl border border-gray-900 font-semibold text-gray-800 hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm">
                      <img :src="item.icon" class="mr-1" /> {{item.text}}
                  </button>
                </div>
              </div>
              
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
