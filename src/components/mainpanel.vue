<template>
    <div class="mainpanel">
        <slot name="title" class="title_class"></slot>
        <hr>
        <slot name="content"></slot>
    </div>
</template>

<style lang="scss" scoped>
    .mainpanel{
        width: 76%;
        background-color: rgba(255,255,255,.5);
        margin: 0 auto;
        position: relative;
        top: 70px;
        padding: 20px;
        hr{
            position: relative;
            top: 10px;
            opacity: .8;
        }
    }
</style>
