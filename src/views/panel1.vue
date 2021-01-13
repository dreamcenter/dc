<template>
    <div>
        <div>
            <search id="search"></search>
        </div>
        <music></music>
        <bottom></bottom>
    </div>
</template>

<script>
import Vue from 'vue'
import bottom from '../components/bottom'
import mainpanel from '../components/mainpanel'
import music from '../components/music'
import search from '../components/search'
Vue.component('bottom', bottom)
Vue.component('mainpanel', mainpanel)
Vue.component('music', music)
Vue.component('search', search)
export default {

}
</script>

<style lang="scss">
    #search{
        position: relative;
        top: 200px;
    }

</style>
