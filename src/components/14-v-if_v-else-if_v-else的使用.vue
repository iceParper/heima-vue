<template>
    <div>
        <h1 v-if="age >= 18">成年人</h1>
        <h1 v-else-if="age >= 12">青少年</h1>
        <h1 v-else>儿童</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: 18,
        };
    },
};
</script>
