<template>
    <div class="mainpanel">
        <slot name="title" class="title_class"></slot>
        <hr>
        <slot name="content"></slot>
    </div>
</template>

<style lang="scss" scoped>
    .mainpanel{
        width: 78%;
        background-color: #F0F8FF;
        opacity: .7;
        margin: 0 auto;
        position: relative;
        top: 80px;
        padding: 20px;
        color: coral;
        hr{
            position: relative;
            top: 10px;
            opacity: .8;
            margin-bottom: 10px;
        }
    }
</style>
