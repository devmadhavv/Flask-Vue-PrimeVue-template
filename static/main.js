const { createApp, ref, mount } = Vue;

const app = createApp({
    setup() {  
        const vueData = "Hello from Vue js"
        return {
            vueData
        };
    },
    delimiters: ['{', '}']
})

app.use(PrimeVue.Config, {
    theme: {
        preset: PrimeVue.Themes.Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});

app.component('p-datepicker', PrimeVue.DatePicker);
app.component('p-tabs', PrimeVue.Tabs);

app.mount('#app')