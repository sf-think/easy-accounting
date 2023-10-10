import { defineComponent, ref } from 'vue'

export const App = defineComponent({
  setup() {
    const count = ref(0)
    return () => (
      <>
        <div>{count.value}</div>
        <button onClick={() => count.value++}> +1 </button>
      </>
    )
  }
})
