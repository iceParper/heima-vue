<template>
    <div>
        <div>
            <span>年龄:</span>
            <input type="text" v-model.number="age" />
        </div>
        <div>
            <span>人生格言:</span>
            <input type="text" v-model.trim="message" />
        </div>
        <div>
            <span>自我介绍:</span>
            <textarea v-model.lazy="info"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: '',
            message: '',
            info: '',
        }
    },
}
</script>
