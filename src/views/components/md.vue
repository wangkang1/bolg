<template>
    <div>
        <div class="title">
            <input type="text" placeholder="请输入标题行">
           
             <router-link to="./read"> <button  @click="save">发布文章</button></router-link>
        </div>
        <div id="editor">
            <mavon-editor v-model="md" @save="save" style="height: 100%"></mavon-editor>
        </div>
    </div>
</template>
    <script>
var mavonEditor = require('mavon-editor')
export default {
    name: 'editor',
    components: {
        'mavon-editor': mavonEditor.mavonEditor
    },
    data() {
        return {
            md:"",
        }
    },
    methods: {
        save: function () {
            this.$store.dispatch('update_md', this.md);
            alert("发布文章成功")
        }
    }
}
</script>
    
<style scoped lang="less" >
.title {
    margin-top: 20px;
    overflow-x: hidden;
    input {
        margin-left: 20px;
        border: none;
        outline: none;
        height: 35px;
        background: #f1efef;
        font-size: 24px;
        font-weight: bold;
    }
    button {
        float: right;
        width: 80;
        height: 40px;
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #fff;
        background-color: #59bfff;
        border-color: #46b8da;
        position: relative;
        right: 20px;
    }
}

#editor {
    margin: 20px auto;
    width: 100%;
    height: 830px;
}
</style>
