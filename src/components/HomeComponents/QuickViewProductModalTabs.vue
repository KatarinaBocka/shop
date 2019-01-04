<template>
    <div class="tabs">
        <div class="current-image">
            <slot></slot>
        </div>

        <div class="row">
            <div class="col-sm-6" v-for="(image, index) in QuickViewProductModalTabs" :key="index" :class="{ 'is-active': image.isActive }">
              <a :href="image.href" @click="selectImage(image)"><img class="tab-img" :src="image.images"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuickViewProductModalTabs',
    data () {
        return {
            QuickViewProductModalTabs: []
        }
    },
    created() {
        this.QuickViewProductModalTabs = this.$children;
    },
    mounted() {
        this.$children.forEach(QuickViewProductModalTab => console.log(QuickViewProductModalTab.name));
    }, 
    methods: {
        selectImage(selectedImage) {
            this.QuickViewProductModalTabs.forEach( image => {
                image.isActive = (image.name == selectedImage.name);
            });  
        }
       
    }
}

</script>

<style lang="scss" scope>
    .tab-img {
        max-width: 100%;
        height: 120px;
        object-fit: cover;
        margin-bottom: 10px;
    }
</style>
