<template>
    <div>
        <van-nav-bar :title="isLogin ? '登录' : '注册'" left-arrow @click-left="onClickLeft">
            <template #right>
                <van-icon name="ellipsis" />
            </template>
        </van-nav-bar>
        <div class="footer">
            <div class="image">
                <img src="../../assets/logo.png" alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <!-- 文本提示 -->
                <div class="tipes">
                    <p @click="isLogin = !isLogin">{{ isLogin ? '已有帐号，请登录' : '没有账号，请注册' }}</p>
                </div>
                <!-- 验证码 -->
                <div class="login">
                    <van-field center clearable label="验证码" placeholder="输入验证码" v-model="verify">
                        <template #button>
                            <vueImgVerify ref="verifyRef" />
                        </template>
                    </van-field>
                </div>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>

    </div>


</template>
<script setup>
import vueImgVerify from "../../components/vueImgVerify.vue"
import { ref, reactive, toRefs } from "vue"
import { Toast } from "vant"
let verifyRef = ref(null)
let state = reactive({
    verify: ''
})
let username = ref('17001100999')
let password = ref('password')
let btn = () => {
    if (verifyRef.value.imgCode == satisfies.verify) {
        Toast.success('验证码输入正确')
    } else {
        Toast.fail('验证码输入错误')
    }

}
let isLogin = ref(false)
let onClickLeft = () => {

}
</script>
<style scoped>
.footer {
    margin-left: 10px;
}

.image {
    width: 100px;
    height: 150px;
    position: relative;
}

img {
    position: absolute;
    top: 20px;
    left: 150px;
    width: 100px;
    height: 100px;
}

.tipes {
    color: #1989FA;
    font-size: 14px;
    margin-left: 30px;
}

.login {
    margin-left: 13px;
}
</style>

