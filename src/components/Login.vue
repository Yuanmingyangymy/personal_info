<template>
  <div class="box">
        <form action="#" id="login" :model="form" enctype="application/x-www-form-urlencoded">
            <h2>登录</h2>
            <input type="text" placeholder="姓名" id="username" v-model.trim="form.name">
            <input type="text" placeholder="电话号码" id="tel" v-model.trim="form.tel">
            <!-- <input type="text" placeholder="QQ号" id="qq" v-model.trim="form.qq"> -->
            <!-- <input type="text" placeholder="所在的专业班级：（例如：软工XXXX）" id="class" v-model.trim="form.class"> -->
            <!-- <input type="text" placeholder="选择方向：IOS/Web/Android/Serve/暂时不定" id="direction" v-model.trim="form.dir"> -->
            <button @click="login">OK</button>
        </form>
        <h3>欢迎加入3G实验室</h3>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'Login',
        data() {
            return {
                form: {
                name: '',
                tel: '',
                // qq: '',
                // class: '',
                // dir: '',
                },
                isnull: false
            }
        },
        methods: {
            login() {
                if(this.form.name == '') {
                alert('姓名不能为空')
                } else if(this.form.tel == '') {
                alert('电话号码不能为空')
                } else {
                axios.post('http://127.0.0.1/login', this.form)
                .then(res => {
                    // 此处逻辑：登录成功跳转至个人信息页面
                    if(res.data.status == 200) {
                    this.$alert('跳转至个人信息页面', '登录成功', {
                        confirmButtonText: '确定',
                        callback: action => {
                        this.$router.push('/index')
                        }
                    })
                    }else if(res.data.status == 202) {
                    this.$alert('输入错误', '登录失败', {
                        confirmButtonText: '确定',
                        callback: action => {
                        this.form.name = '',
                        this.form.tel = ''
                        }
                    })
                    }else {
                    console.log(res.message);
                    }
                }).catch(err => {
                    console.log('操作失败' + err);
                })
                }
            }
        },
    }
</script>

<style scoped>
    .box {
        height: 300px;
    }
</style>
