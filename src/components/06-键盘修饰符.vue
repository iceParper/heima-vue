<template>
    <div>
        <input type="text" @keyup.enter="enter" />
        <hr />
        <input type="text" @keyup.esc="esc" />
    </div>
</template>

<script>
export default {
    methods: {
        enter() {
            alert('enter')
        },
        esc() {
            alert('esc')
        },
    },
}
</script>
