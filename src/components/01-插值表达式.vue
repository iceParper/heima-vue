<template>
    <div id="app">
        {{ msg }}
        <h2>{{ obj.name }}</h2>
        {{ obj.name > 18 ? '老了老了' : '年轻年轻' }}
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            msg: '我是一个天才',
            obj: {
                name: '洪涛',
                age: 12,
            },
        };
    },
};
</script>
