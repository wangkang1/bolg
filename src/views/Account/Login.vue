<<style scoped lang="less">
    .login{
        background : #1F2D3D;
        height     : 870px;
        width:100%;
        overflow:hidden;

        .card-box {
            box-shadow            : 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
            -webkit-border-radius : 5px;
            border-radius         : 5px;
            -moz-border-radius    : 5px;
            background-clip       : padding-box;
            margin-bottom         : 20px;
            background-color      : #F9FAFC;
            border                : 2px solid #8492A6;
        }

        .login-form{
            width   : 350px;
            padding : 35px 35px 15px 35px;
        } 
        .title {
            margin      : 0px auto 40px auto;
            text-align  : center;
            color       : #505458;
            font-weight : normal;
            font-size   : 16px;

            span {
                cursor : pointer;

                &.active {
                    font-weight : bold;
                    font-size   : 18px;
                }
            }
        }
    }

</style>

<<template>
   <Row type="flex" justify="center" align="middle" class="login">
        <Col span="6">
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" class="login-form card-box">
                <h3 class="title">
                    <span class="active">系统登录</span>
                </h3>
                <Form-item prop="username">
                    <Input v-model="formCustom.username" placeholder="帐号"></Input>
                </Form-item>
                <Form-item prop="passwd">
                    <Input type="password" v-model="formCustom.passwd" placeholder="密码"></Input>
                </Form-item>
                <Form-item prop="rememberMe">
                    <Checkbox v-model="formCustom.rememberMe">记住我</Checkbox>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                    <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                </Form-item>
            </Form>
        </Col>
    </Row>
</template>
<<script>
export default {
  data () {
            return {
                formCustom: {
                    username:'',
                    passwd: '',
                    rememberMe:false
                },
                ruleCustom: {
                    username:[
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    passwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('update_userinfo', {
                            userinfo:this.formCustom
                            });
                        this.$Notice.success({
                            title: '系统登录',
                            desc: '登录成功'
                        })
                        if(this.$route.query.redirect){
                            this.$router.push(this.$route.query.redirect)
                        }
                        else{
                            this.$router.push('/')
                        }
                    } else {
                        this.$Notice.error({
                            title: '系统登录',
                            desc: '表单验证失败！'
                        });
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
                this.$store.dispatch('remove_userinfo');
            }
        }
}
</script>
