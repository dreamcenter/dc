<template>
    <div>
        <div>
            <search id="search"></search>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import search from '../components/search'
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
