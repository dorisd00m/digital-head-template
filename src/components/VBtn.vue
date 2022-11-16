<template>
    <button :type="type" :class="[buttonTheme(),]">
      <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button'
        },
        theme: {
            type: String,
            default: 'solid'
        },
        color: {
            type: String,
            default: 'black',
        }
    },
    data: () => ({
        btnClasses: {            
            Solid:      '"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800',                        
            Outline:    '"py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500',                        
            Ghost:      '"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm',                        
            Soft:       '"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm',                    
            White:      '"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800',                        
            Link:       '"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm',
            
        }
    }),
    mounted() {
        
    },
    methods: {
        buttonTheme() {
            let classes;
            switch(this.theme) {
                default: 
                    classes = this.solidStyle();
                    break;                
                case 'solid':
                    classes = this.solidStyle();
                    break;
                case 'outline':
                    classes = this.btnClasses.Outline
                    break;
                case 'ghost':
                    classes = this.btnClasses.Ghost
                    break;
                case 'soft':
                    classes = this.btnClasses.Soft
                    break;
                case 'white':
                    classes = this.btnClasses.White
                    break;
                case 'link':
                    classes = this.btnClasses.Link
                    break;
            }
            return classes
        },
        solidStyle(){
            const color = this.color;
            const baseClass = 'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold transition-all focus:outline-none text-sm ';
            let classes ;
            switch (color) {
                case 'black':
                    classes = baseClass+'bg-gray-800 text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800';
                    break;
                case 'gray':
                    classes = baseClass+'bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800';
                    break;
                case 'red':
                    classes = baseClass+'bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800';
                    break;
                case 'yellow':
                    classes = baseClass+'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800';
                    break;
                case 'green':
                    classes = baseClass+'bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800';
                    break;
                case 'blue':
                    classes = baseClass+'bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800';
                    break;
                case 'violet':
                    classes = baseClass+'bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800';
                    break;
                case 'purple':
                    classes = baseClass+'bg-purple-500 text-white hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800';
                    break;
                case 'pink':
                    classes = baseClass+'bg-pink-500 text-white hover:bg-pink-600 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800';
                    break;
                case 'white':
                    classes = baseClass+'bg-white text-gray-600 hover:bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800';
                    break;
            }
            return classes
        },
        outlineStyle() {

        }
    }
}
</script>

<style>

</style>