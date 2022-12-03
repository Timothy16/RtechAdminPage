export default function ({ $axios, store, app, $config}){

    $axios.onError(error => {

        if (error){
            if (error.response.status === 422) {
                store.dispatch('validation/setErrors', error.response.data.errors ? error.response.data.errors : null)

                let messageData1 = {'text': error.response.data.message, 'target': null, 'type': 'error', 'time': null}

                store.dispatch('message/setMessage', messageData1)

            }
            if (error.response.status === 400) {
                // store.dispatch('validation/setErrors', error.response.data.errors ? error.response.data.errors : null)

                let messageData2 = {'text': error.response.data.message, 'target': null, 'type': 'error', 'time': null}

                store.dispatch('message/setMessage', messageData2)

            }

            if (error.response.status === 401) {

                let messageData3 = {'text': "You're not loggedin", 'target': null, 'type': 'danger', 'time': null}

                store.dispatch('message/setMessage', messageData3)

                this.$router.push(`/login`)

            }
            if (error.response.status === 402) {
                // store.dispatch('validation/setErrors', error.response.data.errors ? error.response.data.errors : null)
                // console.log("Data",  error.response.data)
                // console.log("response",  error.response)
                let messageData4 = {'text': error.response.data.message, 'target': null, 'type': 'danger', 'time': null}

                store.dispatch('message/setMessage', messageData4)


            }
    }
        return Promise.reject(error)
    })

    $axios.onRequest((request) => {
    //   console.log('rr', request)
        store.dispatch('validation/clearErrors')
        store.dispatch('message/clearMessage')
    })

    $axios.onResponse(response => {
        if (response){
                

            if (response.status === 200) {
                if (response.data.message)
                {
                    let messageData3 = {'text': response.data.message, 'target': null, 'type': 'success', 'time': null}
                    store.dispatch('message/setMessage', messageData3)

                    if(( response.config.method === 'post' ||  response.config.method === 'delete' || response.config.method === 'patch'  )){

                        app.$notify({
                            group: 'all',
                            title: 'Important message',
                            text: response.data.message,
                            type: 'success',
                            duration: 15000,
                        })
                    }
                }
            }
        }
        return Promise.resolve(response)
    })
}
