export default defineNuxtPlugin({
    name: 'treat',
    setup(){
        return {
            provide: {
                treat: {
                    date: {
                        msToDate(ms: number){
                            if(!ms) return '00/00/0000'
                            const data = new Date(ms);

                            return `
                                ${data.getDate().toString().padStart(2, '0')}/
                                ${(data.getMonth() + 1).toString().padStart(2, '0')}/
                                ${data.getFullYear()}
                            `;
                        },
                    }
                }
            }
        }
    }
})