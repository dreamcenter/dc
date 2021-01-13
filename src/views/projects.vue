<template>
    <div>
        <mainpanel>
            <p slot="title">title</p>
            <p slot="content">content-todo</p>
        </mainpanel>
    </div>
</template>

<script>
import Vue from 'vue'
import mainpanel from '../components/mainpanel'
Vue.component('mainpanel', mainpanel)
export default {

}
</script>
