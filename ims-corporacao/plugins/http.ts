export interface HttpData {
    code: number,
    status: string,
    message: string,
    data: any,
}

export interface HttpPack {
    get(url: string, data?: any, additionalHeaders?: { [key: string]: string }): Promise<HttpData>;
    post(url: string, data?: any, additionalHeaders?: { [key: string]: string }, allowUnauthorized?: boolean): Promise<HttpData>;
    put(url: string, data?: any, additionalHeaders?: { [key: string]: string }): Promise<HttpData>;
    delete(url: string, data?: any, additionalHeaders?: { [key: string]: string }): Promise<HttpData>;
}

export interface Http {
    back(): HttpPack;
}

function objectToQueryString(obj: Record<string, any>): string {
  const keyValuePairs: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value !== undefined) {
        keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  }

  return keyValuePairs.join('&');
}

const httpFetch = (api_http: string, authorizationDefault?: string): HttpPack =>  {
    return {
        async post(url: string, data?: any, additionalHeaders?: { [key: string]: string }, allowUnauthorized?: boolean): Promise<HttpData> {
            let response = {
                status: 0 as number,
                body: {} as HttpData,
            };

            try {
                await $fetch(`${api_http}${url}`, {
                    method: "post",
                    body: data || null,
                    ignoreResponseError: true,

                    retry: 2,
                    retryDelay: 1000,
                    retryStatusCodes: [400, 425, 429, 500, 502, 503],
                    
                    headers: {
                        'Authorization': authorizationDefault || '',
                        ...additionalHeaders
                    },
                    onResponse(res){
                        if(!allowUnauthorized && res.response.status == 401){
                            throw createError({statusCode: 401, statusMessage: 'Acesso negado', fatal: true})
                        }
                        response.body = res.response._data
                        response.status = res.response.status;
                    },
                })

                if(!response.body.code || !response.body.status || !response.body.message){
                    throw createError({statusCode: 500, message: 'Ocorreu um erro inesperado, tente novamente mais tarde', fatal: true, data: response.body})
                }
                if(response.status != response.body.code){
                    throw createError({statusCode: 409, message: 'O status informado no pacote não é mesmo retornado na requisição'})
                }
            } catch (error: any) {
                throw new Error('Ocorreu um erro ao tentar fazer a requisição')
            }

            return response.body;
        },
        async get(url: string, data?: any, additionalHeaders?: { [key: string]: string }, allowUnauthorized?: boolean): Promise<HttpData> {
            let response = {
                status: 0 as number,
                body: {} as HttpData,
            };

            try {
                await $fetch(`${api_http}${url}${data ? '?' + objectToQueryString(data) : ''}`, {
                    method: "get",
                    body: data || null,
                    ignoreResponseError: true,

                    retry: 2,
                    retryDelay: 1000,
                    retryStatusCodes: [400, 425, 429, 500, 502, 503],
                    
                    headers: {
                        'Authorization': authorizationDefault || '',
                        ...additionalHeaders
                    },
                    onResponse(res){
                        if(!allowUnauthorized && res.response.status == 401){
                            throw createError({statusCode: 401, statusMessage: 'Acesso negado', fatal: true})
                        }
                        response.body = res.response._data
                        response.status = res.response.status;
                    },
                })

                if(!response.body.code || !response.body.status || !response.body.message){
                    throw createError({statusCode: 500, message: 'Ocorreu um erro inesperado, tente novamente mais tarde', fatal: true, data: response.body})
                }
                if(response.status != response.body.code){
                    throw createError({statusCode: 409, message: 'O status informado no pacote não é mesmo retornado na requisição'})
                }
            } catch (error: any) {
                throw new Error('Ocorreu um erro ao tentar fazer a requisição')
            }

            return response.body;
        },
        async put(url: string, data?: any, additionalHeaders?: { [key: string]: string }, allowUnauthorized?: boolean): Promise<HttpData> {
            let response = {
                status: 0 as number,
                body: {} as HttpData,
            };

            try {
                await $fetch(`${api_http}${url}`, {
                    method: "put",
                    body: data || null,
                    ignoreResponseError: true,
                    headers: {
                        'Authorization': authorizationDefault || '',
                        ...additionalHeaders
                    },
                    onResponse(res){
                        if(!allowUnauthorized && res.response.status == 401){
                            throw createError({statusCode: 401, statusMessage: 'Acesso negado', fatal: true})
                        }
                        response.body = res.response._data
                        response.status = res.response.status;
                    },
                })

                if(!response.body.code || !response.body.status || !response.body.message){
                    throw createError({statusCode: 500, message: 'Ocorreu um erro inesperado, tente novamente mais tarde', fatal: true})
                }
                if(response.status != response.body.code){
                    throw createError({statusCode: 409, message: 'O status informado no pacote não é mesmo retornado na requisição'})
                }
            } catch (error: any) {
                throw new Error('Ocorreu um erro ao tentar fazer a requisição')
            }

            return response.body;
        },
        async delete(url: string, data?: any, additionalHeaders?: { [key: string]: string }, allowUnauthorized?: boolean): Promise<HttpData> {
            let response = {
                status: 0 as number,
                body: {} as HttpData,
            };

            try {
                await $fetch(`${api_http}${url}`, {
                    method: "delete",
                    body: data || null,
                    ignoreResponseError: true,

                    retry: 2,
                    retryDelay: 1000,
                    retryStatusCodes: [400, 425, 429, 500, 502, 503],
                    
                    headers: {
                        'Authorization': authorizationDefault || '',
                        ...additionalHeaders
                    },
                    onResponse(res){
                        if(!allowUnauthorized && res.response.status == 401){
                            throw createError({statusCode: 401, statusMessage: 'Acesso negado', fatal: true})
                        }
                        response.body = res.response._data
                        response.status = res.response.status;
                    },
                })

                if(!response.body.code || !response.body.status || !response.body.message){
                    throw createError({statusCode: 500, message: 'Ocorreu um erro inesperado, tente novamente mais tarde', fatal: true, data: response.body})
                }
                if(response.status != response.body.code){
                    throw createError({statusCode: 409, message: 'O status informado no pacote não é mesmo retornado na requisição'})
                }
            } catch (error: any) {
                throw new Error('Ocorreu um erro ao tentar fazer a requisição')
            }

            return response.body;
        },
    } as HttpPack
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            http: {
                back(){
                    return httpFetch('/api/')
                }
            }
        }
    }
});