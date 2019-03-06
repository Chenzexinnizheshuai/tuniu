<template>
    <div>
        <i-form>
            <form-item label="名字" prop="name">
                <i-input></i-input>
            </form-item>
            <form-item label="邮箱" prop="email">
                <i-input></i-input>
            </form-item>
        </i-form>
    </div>
</template>
<script>
import FormItem from './iformitem'
import IForm from './iform'
import IInput from './iinput'
export default {
    components : {
        FormItem : FormItem,
        IForm : IForm,
        IInput : IInput
    },    
}
</script>
