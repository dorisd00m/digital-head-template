<template>
    <nav class="w-full mx-auto px-[46px] py-[28px] font-primary flex items-center justify-between" aria-label="Global">
        <a class="flex-none text-xl font-[700]" href="#">Digitalhead</a>
        <div 
            class="
                flex 
                flex-row 
                items-center 
                gap-5 
                mt-5 
                sm:justify-end 
                sm:mt-0 sm:pl-5
                [&>a]:font-[400]
                [&>a]:sm:text-sm
                
                [&>a]:lg:text-[16px]
            "
        >
          <a class="" href="#" aria-current="page">Why Us</a>
          <a class="" href="#">Services</a>
          <a class="" href="#">Pricing</a>
          <a class="" href="#">Testimonials</a>
          <a class="" href="#">FAQs</a>
        </div>
        
        <button type="button" 
            class="
                w-[150px]
                h-[47px]
                py-3 
                px-4 
                inline-flex 
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

}
</script>

<style>

</style>