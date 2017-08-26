<template>
    <!--操作区域-->
    <div>
        <topnav></topnav>
        <router-view></router-view>
    
    </div>
</template>
<script>
import topnav from './views/components/topNav'
export default {
    name: 'heared',
    components: {
        topnav
    },
    data() {
        return {

        };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {

    }
};
</script>
<style>

</style>
