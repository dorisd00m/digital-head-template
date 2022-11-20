<template>
    <div class="
        flex 
        justify-center 
        items-center
        gap-3
        before:content-['']
        before:block
        before:flex-1
        before:h-[1px]
        after:content-['']
        after:block
        after:flex-1
        after:h-[1px]
       
        lg:mb-16
      "
      :class="dark != true ? ' before:bg-primary/50 after:bg-primary/50 text-primary/50' : 'before:bg-white/50 after:bg-white/50 text-white/50'"
      >
        <h2 class="font-ClashDisplay-Variable font-[600] text-2xl">
            <slot></slot>
        </h2>
      </div>
</template>

<script>
export default {
    props: ['dark']
}
</script>

<style>

</style>