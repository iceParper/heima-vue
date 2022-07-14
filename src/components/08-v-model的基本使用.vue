<template>
    <div>
        <div>
            <span>用户名:</span>
            <input type="text" v-model="username" />
            {{ username }}
        </div>
        <div>
            <span>密码:</span>
            <input type="password" v-model="password" />
            {{ password }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
}
</script>
