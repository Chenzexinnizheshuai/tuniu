<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <div>
            <slot>

            </slot>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        label : {
            type : String,
        },
        prop : {
            type : String
        }
    }
}
</script>
