<template>
    <nav class="w-full mx-auto px-[46px] py-[28px] font-primary flex items-center justify-between" aria-label="Global">
        <a class="flex-none text-xl font-[700]" href="#">Digitalhead</a>
        <div 
            class="
                fixed
                right-0
                top-0
                bottom-0
                z-[20]
                bg-primary
                w-[300px]
                h-full                
                divide-y-2
                divide-white/40
                flex
                flex-col
                [&>a]:text-white
                [&>a]:lg:text-primary
                p-[50px_15px]
                gap-0
                transition
                lg:p-[0]
                lg:h-auto
                lg:w-auto
                lg:bg-transparent
                lg:relative
                lg:flex-row 
                lg:items-center 
                lg:gap-5 
                lg:mt-5 
                
                sm:mt-0 sm:pl-5
                [&>a]:font-[400]
                [&>a]:p-[25px_0]
                [&>a]:text-left
                [&>a]:lg:p-[0]
                [&>a]:sm:text-sm
                [&>a]:lg:text-center
                [&>a]:lg:text-[16px]
                
              "
              :class="menu ? 'translate-x-[0]' : 'translate-x-[300px]'"
        >
          <button type="button" class="absolute right-[20px] top-[20px] lg:hidden text-white text-[30px]" @click="menu = false">
            <Icon icon="carbon:close" />
          </button>
          <a class="!border-t-0" href="#" aria-current="page">Why Us</a>
          <a class="" href="#">Services</a>
          <a class="" href="#">Pricing</a>
          <a class="" href="#">Testimonials</a>
          <a class="" href="#">FAQs</a>
        </div>
        <button type="button"
          class="            
            lg:hidden
            
          "
          @click="menu = !menu"
        >
          <img svg-inline src="@/assets/img/menu.svg" class="w-[30px] h-[30px]"/>
        </button>
        <button type="button" 
            class="
                hidden
                lg:inline-flex
                w-[150px]
                h-[47px]
                py-3 
                px-4                 
                justify-center 
                items-center 
                gap-2 
                rounded-full 
                border 
                border-transparent 
                font-semibold 
                bg-primary
                text-white 
                hover:bg-gray-900 
                focus:outline-none 
                focus:ring-2 
                focus:ring-gray-800 
                focus:ring-offset-2 
                transition-all 
                text-sm 
                dark:focus:ring-gray-900 
                dark:focus:ring-offset-gray-800">
          Contact Us
        </button>
      </nav>
</template>

<script>
export default {
  data: () => ({
    menu: false,
  })
  
}
</script>

<style>

</style>