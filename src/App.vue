<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footer class="bg-primary min-h-[400px]">
      <div class="container">
        <div class="flex flex-wrap lg:grid-cols-6 -mx-5">
          <div class="w-6/12 px-5 text-left font-primary">
            <div class="font-[700] text-white text-left text-2xl mb-12">Digitalhead</div>
            <div class="text-white/50 font-[600] mb-16">
              Sharing Excellence, Unique  Creations. The impression you 
              website makes, directly reflects the competency of your 
              product.
            </div>
            <div class="text-white/50 text-[16px]">
              Email : <a href="#">slabpixel@gmail.com</a>
            </div>
          </div>
          <div class="w-6/12 px-5 ">
            <div class="grid grid-cols-3 font-primary">
              <div v-for="(item,id) in footerLink" :key="id">
                <h6 class="uppercase text-white text-[16px] font-[700] text-left mb-12">{{item.title}}</h6>
                <ul class="text-left flex flex-col gap-[20px]">
                  <li v-for="(item,ids) in item.menu" :key="ids"><a href="#" class="text-white/50 text-[16px]">{{item.text}}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  data: () =>({
    footerLink: [
      {
        title: 'Navigations',
        menu: [
          {
            text: 'Why Us',
            link: '#',
          },
          {
            text: 'Services',
            link: '#',
          },
          {
            text: 'The Process',
            link: '#',
          },
          {
            text: 'Pricing',
            link: '#',
          },
          {
            text: 'Testimonials',
            link: '#',
          },
        ],
      },
      {
        title: 'Company',
        menu: [
          {
            text: 'Privacy Policy',
            link: '#',
          },
          {
            text: 'Terms Conditions',
            link: '#',
          },
          {
            text: 'Pricing',
            link: '#',
          },
          {
            text: 'FAQs',
            link: '#',
          },
          {
            text: 'Custom Plan',
            link: '#',
          },
        ],
      },
      {
        title: 'Social Media',
        menu: [
          {
            text: 'Facebook',
            link: '#',
          },
          {
            text: 'Instagram',
            link: '#',
          },
          {
            text: 'Twitter',
            link: '#',
          },
          {
            text: 'LinkedIn',
            link: '#',
          },
    
        ],
      },
    ]
  })
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
