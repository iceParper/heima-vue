<template>
    <div>
        <label>
            姓名:{{ value1 }}
            <!-- <h1>{{ value }}</h1> -->
            <input type="text" :value="value1" @input="$emit('aaa', $event.target.value)" />
        </label>
    </div>
</template>

<script>
export default {
    name: 'DemoBaseInput',

    data() {
        return {}
    },
    props: {
        value1: String,
    },
    model: {
        prop: 'value1',
        event: 'aaa',
    },
    mounted() {},
    methods: {},
}
</script>
